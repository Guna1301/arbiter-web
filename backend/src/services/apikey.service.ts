import { prisma } from "../config/db.js";
import { generateApiKey } from "../utils/apikey.js";

export const createApiKey = async (projectId:string) => {

  const { key, hash, prefix } = generateApiKey();

  await prisma.apiKey.create({
    data:{
      keyHash: hash,
      prefix,
      projectId
    }
  });

  return key;
};