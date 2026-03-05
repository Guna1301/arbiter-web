import { prisma } from "../config/db.js";
import { redis } from "../config/redis.js";

export const createRule = async (projectId:string, data:any)=>{
  await redis.del(`arbiter:config:${projectId}`);
  return prisma.rule.create({
    data:{
      ...data,
      projectId
    }
  });
};

export const getProjectRules = async (projectId:string)=>{
  return prisma.rule.findMany({
    where:{ projectId }
  });
};