import { prisma } from "../config/db.js";

export const getBlockedCount = async (projectId: string) => {

  return prisma.event.count({
    where: {
      projectId,
      allowed: false
    }
  });

};

export const getRuleStats = async (projectId: string) => {

  return prisma.event.groupBy({
    by: ["rule"],
    where: {
      projectId
    },
    _count: {
      rule: true
    }
  });

};

export const getTopKeys = async (projectId: string) => {

  return prisma.event.groupBy({
    by: ["key"],
    where: {
      projectId,
      allowed: false
    },
    _count: {
      key: true
    },
    orderBy: {
      _count: {
        key: "desc"
      }
    },
    take: 10
  });

};