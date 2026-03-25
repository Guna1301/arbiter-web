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


export const getEventStatsController = async (req: any, res: Response) => {
  const projectId = req.params.projectId;

  const stats = await analyticsService.getEventStats(projectId);

  res.json(stats);
};


export const topAbuseKeys = async (req: any, res: Response) => {

  const projectId = req.params.projectId;

  const keys =
    await analyticsService.getTopAbuseKeys(projectId);

  res.json(keys);

};