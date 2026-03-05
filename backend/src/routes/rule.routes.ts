import { Router } from "express";
import { requireAuth } from "../middleware/auth.middleware.js";
import { syncUser } from "../middleware/syncUser.js";

import {
  createRule,
  updateRule,
  deleteRule
} from "../controllers/rule.controller.js";


const router = Router();

router.use(requireAuth,syncUser);

router.post("/:projectId",createRule);
router.patch("/:ruleId", updateRule);
router.delete("/:ruleId", deleteRule);

export default router;