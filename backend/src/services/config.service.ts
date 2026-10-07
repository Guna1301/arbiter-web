import { prisma } from "../config/db.js";
import { redis } from "../config/redis.js";

type RuleConfig = {
  limit: number
  window: number
  algorithm: string
  policy: {
    whitelist: string[]
    blacklist: string[]
  } | null
  abuse: {
    threshold: number
    banTime: number
  } | null
}

type ProjectConfig = {
  global: {
    algorithm: string
    whitelist: string[]
    blacklist: string[]
    abuse: {
      threshold: number
      banTime: number
    } | null
  }
  rules: Record<string, RuleConfig>
}

function normalizeList(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : []
}

function normalizePolicy(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null
  }

  const policy = value as Record<string, unknown>

  return {
    whitelist: normalizeList(policy.whitelist),
    blacklist: normalizeList(policy.blacklist)
  }
}

function normalizeAbuse(value: unknown) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null
  }

  const abuse = value as Record<string, unknown>

  if (
    typeof abuse.threshold !== "number" ||
    typeof abuse.banTime !== "number" ||
    abuse.threshold <= 0 ||
    abuse.banTime <= 0
  ) {
    return null
  }

  return {
    threshold: abuse.threshold,
    banTime: abuse.banTime
  }
}

export async function getProjectConfig(
  projectId: string
): Promise<ProjectConfig | null> {

  const cacheKey = `arbiter:config:${projectId}`;

  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached) as ProjectConfig;

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: { rules: true }
  });

  if (!project) return null;

  const compiledRules: Record<string, RuleConfig> = {};

  for (const rule of project.rules) {
    compiledRules[rule.name] = {
      limit: rule.limit,
      window: rule.window,
      algorithm: rule.algorithm ?? project.defaultAlgorithm ?? "token_bucket",
      policy: normalizePolicy(rule.policy),
      abuse: normalizeAbuse(rule.abuse)
    };
  }

  const config: ProjectConfig = {
    global: {
      algorithm: project.defaultAlgorithm ?? "token_bucket",
      whitelist: normalizeList(project.whitelist),
      blacklist: normalizeList(project.blacklist),
      abuse: normalizeAbuse(project.abuse)
    },
    rules: compiledRules
  };

  await redis.set(cacheKey, JSON.stringify(config), "EX", 300);

  return config;
}