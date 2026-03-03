import { Router } from "express";
import { createKey } from "../controllers/apikey.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { syncUser } from "../middleware/syncUser.js";

const router = Router();

router.post("/:projectId", requireAuth, syncUser, createKey);

export default router;