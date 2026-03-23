import { Request, Response } from "express";
import * as projectService from "../services/project.service.js";

export const createProject = async (req:any,res:Response) => {

  const { name } = req.body;

  const project = await projectService.createProject(
    req.dbUser.id,
    name
  );

  res.json(project);
};

export const getProjects = async (req: any, res: Response) => {
  let { page = "1", limit = "10" } = req.query;

  let pageNum = parseInt(page as string, 10);
  let limitNum = parseInt(limit as string, 10);
  if (isNaN(pageNum) || pageNum < 1) pageNum = 1;
  if (isNaN(limitNum) || limitNum < 1) limitNum = 10;

  const MAX_LIMIT = 50;
  if (limitNum > MAX_LIMIT) limitNum = MAX_LIMIT;

  const projects = await projectService.getProjects(
    req.dbUser.id,
    pageNum,
    limitNum
  );

  res.json(projects);
};