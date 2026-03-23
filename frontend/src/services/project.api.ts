import {api} from "../lib/api";
import {type Project} from "../types/project";

export const getProjects = async ({ page, limit }: { page: number, limit: number }) => {
  const res = await api.get(`/projects`, {
    params: { page, limit }
  });
  return res.data; 
}

export const createProject = async(name: string): Promise<Project> =>{
    const res = await api.post("/projects", {name});
    return res.data;
}