import { prisma } from "../config/db.js";
import { redis } from "../config/redis.js";

export const createRule = async (projectId:string, data:any)=>{

  const rule = await prisma.rule.create({
    data:{
      ...data,
      projectId
    }
  });

  await prisma.project.update({
    where:{ id: projectId },
    data:{
      configVersion:{ increment:1 }
    }
  });

  await redis.del(`arbiter:config:${projectId}`);

  return rule;
};

export const updateRule = async (ruleId:string, data:any)=>{

  const rule = await prisma.rule.update({
    where:{ id: ruleId },
    data
  });

  await prisma.project.update({
    where:{ id: rule.projectId },
    data:{ configVersion:{ increment:1 } }
  });

  await redis.del(`arbiter:config:${rule.projectId}`);

  return rule;
};

export const deleteRule = async (ruleId:string)=>{

  const rule = await prisma.rule.delete({
    where:{ id: ruleId }
  });

  await prisma.project.update({
    where:{ id: rule.projectId },
    data:{ configVersion:{ increment:1 } }
  });

  await redis.del(`arbiter:config:${rule.projectId}`);

  return rule;
};

export const getProjectRules = async (projectId:string)=>{
  return prisma.rule.findMany({
    where:{ projectId }
  });
};