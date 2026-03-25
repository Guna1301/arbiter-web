import { Router } from "express";
import {
  blockedCount,
  getEventStatsController,
  ruleStats,
  topAbuseKeys,
} from "../controllers/analytics.controller.js";

const router = Router();

router.get("/blocked/:projectId", blockedCount);
router.get("/rules/:projectId", ruleStats);
router.get("/top-abuse/:projectId", topAbuseKeys);
router.get("/stats/:projectId", getEventStatsController);

export default router;