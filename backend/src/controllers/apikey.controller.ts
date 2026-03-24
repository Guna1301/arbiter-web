import { Request, Response } from "express";
import * as apiService from "../services/apikey.service.js";
import { prisma } from "../config/db.js";

export const createKey = async (req: Request, res: Response) => {
  try {
    const { projectId } = req.params;
    const { name, expiresAt } = req.body;

    if (!name || name.trim().length < 3) {
      return res.status(400).json({
        message: "Valid API key name required (min 3 chars)"
      });
    }

    const id = Array.isArray(projectId) ? projectId[0] : projectId;

    const key = await apiService.createApiKey(
      id,
      name,
      expiresAt ? new Date(expiresAt) : undefined
    );

    res.status(201).json({ apiKey: key });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create API key" });
  }
};

export const getKeys = async (req:Request,res:Response) => {
    const { projectId } = req.params;
    const id = Array.isArray(projectId) ? projectId[0] : projectId;
    const keys = await apiService.getApiKeys(id);
    res.json(keys);
}

export const revokeKey = async (req: Request, res: Response) => {
  const { keyId } = req.params;

  await prisma.apiKey.update({
    where: { id: keyId },
    data: { status: "revoked" }
  });

  res.json({ success: true });
};