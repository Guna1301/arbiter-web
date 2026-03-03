import { Router } from "express";
import { createRule } from "../controllers/rule.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { syncUser } from "../middleware/syncUser.js";

const router = Router();

router.post("/:projectId",requireAuth,syncUser,createRule);

export default router;