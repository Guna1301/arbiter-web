import { prisma } from "../config/db.js";
import { generateApiKey } from "../utils/apikey.js";

export const createApiKey = async (
  projectId: string,
  name: string,
  expiresAt?: Date
) => {
  const { key, hash, prefix, last4 } = generateApiKey();

  await prisma.apiKey.create({
    data: {
      name,
      keyHash: hash,
      prefix,
      last4,
      projectId,
      expiresAt: expiresAt || null
    }
  });

  return key;
};

export const getApiKeys = async (projectId: string) => {
  const keys = await prisma.apiKey.findMany({
    where: { projectId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      prefix: true,
      last4: true,
      status: true,
      createdAt: true,
      lastUsedAt: true,
      expiresAt: true
    }
  });

  return keys.map(k => ({
    ...k,
    maskedKey: `${k.prefix}_••••••••${k.last4}`
  }));
};