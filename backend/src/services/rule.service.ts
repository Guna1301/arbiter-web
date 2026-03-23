import { prisma } from "../config/db.js";
import { redis } from "../config/redis.js";
import { getSafeRuleData } from "../utils/rule.utils.js";
import type { CreateRuleInput, UpdateRuleInput } from "../types/rule.types.js";

async function bumpProjectVersion(projectId: string, tx: any) {
  await tx.project.update({
    where: { id: projectId },
    data: { configVersion: { increment: 1 } }
  });

  await redis.del(`arbiter:config:${projectId}`);
}

export const createRule = async (
  projectId: string,
  data: CreateRuleInput
) => {
  return prisma.$transaction(async (tx) => {
    const rule = await tx.rule.create({
      data: {
        name: data.name,
        limit: data.limit,
        window: data.window,
        algorithm: data.algorithm,
        policy: data.policy,
        abuse: data.abuse,
        projectId
      }
    });

    await bumpProjectVersion(projectId, tx);

    return rule;
  });
};

export const updateRule = async (
  ruleId: string,
  data: UpdateRuleInput
) => {
  const safeData = getSafeRuleData(data);

  return prisma.$transaction(async (tx) => {
    const rule = await tx.rule.update({
      where: { id: ruleId },
      data: safeData
    });

    await bumpProjectVersion(rule.projectId, tx);

    return rule;
  });
};

export const deleteRule = async (ruleId: string) => {
  return prisma.$transaction(async (tx) => {
    const rule = await tx.rule.delete({
      where: { id: ruleId }
    });

    await bumpProjectVersion(rule.projectId, tx);

    return rule;
  });
};

export const getProjectRules = async (projectId: string) => {
  return prisma.rule.findMany({
    where: { projectId },
    orderBy: { createdAt: "desc" }
  });
};