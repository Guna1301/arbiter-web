import { prisma } from "../config/db.js";

export const createRule = async (projectId:string, data:any)=>{
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