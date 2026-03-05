import { prisma } from "../config/db.js";
import { redis } from "../config/redis.js";

export const getProjectConfig = async (projectId: string) => {

  const cacheKey = `arbiter:config:${projectId}`;

  const cached = await redis.get(cacheKey);

  if (cached) {
    return JSON.parse(cached);
  }

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: { rules: true }
  });

  if (!project) return null;

  const config = {
    global: {
      algorithm: project.defaultAlgorithm,
      whitelist: project.whitelist,
      blacklist: project.blacklist,
      abuse: project.abuse
    },
    rules: project.rules
  };

  await redis.set(cacheKey, JSON.stringify(config), "EX", 300);

  return config;
};