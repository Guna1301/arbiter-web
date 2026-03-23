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

export const getProjects = async (userId: string, page: number,  limit: number) => {
  const skip = (page - 1) * limit;

  const [projects, totalCount] = await Promise.all([
    prisma.project.findMany({
      where: { ownerId: userId },
      skip,
      take: limit,
      orderBy: { createdAt: "desc" }
    }),
    prisma.project.count({
      where: { ownerId: userId }
    })
  ]);

  const totalPages = Math.ceil(totalCount / limit);

  return {
    projects,
    totalCount,
    totalPages,
    currentPage: page
  };
};