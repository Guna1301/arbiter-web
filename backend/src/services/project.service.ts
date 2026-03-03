import { prisma } from "../config/db.js";

export const createProject = async (
  userId: string,
  name: string
) => {

  return prisma.project.create({
    data: {
      name,
      ownerId: userId
    }
  });
};

export const getProjects = async (userId: string) => {
  return prisma.project.findMany({
    where: { ownerId: userId }
  });
};