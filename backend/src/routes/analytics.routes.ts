import { Router } from "express";
import {
  blockedCount,
  ruleStats,
  topKeys
} from "../controllers/analytics.controller.js";

const router = Router();

router.get("/blocked/:projectId", blockedCount);
router.get("/rules/:projectId", ruleStats);
router.get("/top-keys/:projectId", topKeys);

export default router;