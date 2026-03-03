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

export const getProjects = async (req:any,res:Response) => {

  const projects = await projectService.getProjects(req.dbUser.id);

  res.json(projects);
};