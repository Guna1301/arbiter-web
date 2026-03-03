import { Request, Response } from "express";
import * as apiService from "../services/apikey.service.js";

export const createKey = async (req:Request,res:Response) => {
    const { projectId } = req.params;
    const id = Array.isArray(projectId) ? projectId[0] : projectId;
    
    const key = await apiService.createApiKey(id);

    res.json({ apiKey:key });
}