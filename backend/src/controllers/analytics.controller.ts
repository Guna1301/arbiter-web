import { Response } from "express";
import * as analyticsService from "../services/analytics.service.js";

export const blockedCount = async (req: any, res: Response) => {

  const projectId = req.params.projectId;

  const count =
    await analyticsService.getBlockedCount(projectId);

  res.json({ blocked: count });

};

export const ruleStats = async (req: any, res: Response) => {

  const projectId = req.params.projectId;

  const stats =
    await analyticsService.getRuleStats(projectId);

  res.json(stats);

};

export const topKeys = async (req: any, res: Response) => {

  const projectId = req.params.projectId;

  const keys =
    await analyticsService.getTopKeys(projectId);

  res.json(keys);

};