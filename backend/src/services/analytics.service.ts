import { prisma } from "../config/db.js";

export const getBlockedCount = async (projectId: string) => {

  return prisma.event.count({
    where: {
      projectId,
      allowed: false
    }
  });

};

export const getEventStats = async (projectId: string) => {
  const result = await prisma.event.groupBy({
    by: ["allowed"],
    where: {
      projectId,
    },
    _count: {
      allowed: true,
    },
  });

  let blocked = 0;
  let allowed = 0;

  for (const r of result) {
    if (r.allowed) {
      allowed = r._count.allowed;
    } else {
      blocked = r._count.allowed;
    }
  }

  return { blocked, allowed };
};

export const getRuleStats = async (projectId: string) => {
  const result = await prisma.event.groupBy({
    by: ["rule"],
    where: {
      projectId,
    },
    _count: {
      rule: true,
    },
  });

  return result.map(r => ({
    rule: r.rule,
    count: r._count.rule
  }));
};

export const getTopAbuseKeys = async (projectId: string) => {
  const result = await prisma.event.groupBy({
    by: ["key"],
    where: {
      projectId,
      allowed: false,
    },
    _count: {
      key: true,
    },
    orderBy: {
      _count: {
        key: "desc",
      },
    },
    take: 10,
  });

  return result.map((r) => ({
    key: r.key,
    count: r._count.key, 
  }));
};