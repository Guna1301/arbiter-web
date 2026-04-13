import { prisma } from "../config/db.js";
import { redis } from "../config/redis.js";

type RuleConfig = {
  limit: number
  window: number
  algorithm: string
  policy: any
  abuse: any
}

type ProjectConfig = {
  global: {
    algorithm: string
    whitelist: string[]
    blacklist: string[]
    abuse: boolean
  }
  rules: Record<string, RuleConfig>
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
      policy: rule.policy ?? "block",
      abuse: rule.abuse ?? false
    };
  }

  const config: ProjectConfig = {
    global: {
      algorithm: project.defaultAlgorithm ?? "token_bucket",
      whitelist: (project.whitelist as any) ?? [],
      blacklist: (project.blacklist as any) ?? [],
      abuse: (project.abuse as any) ?? false
    },
    rules: compiledRules
  };

  await redis.set(cacheKey, JSON.stringify(config), "EX", 300);

  return config;
}