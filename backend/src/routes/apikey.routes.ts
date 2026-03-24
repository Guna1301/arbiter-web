import { Router } from "express";
import { createKey, getKeys, revokeKey } from "../controllers/apikey.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { syncUser } from "../middleware/syncUser.js";

const router = Router();

router.use(requireAuth, syncUser);

router.post("/:projectId", createKey);
router.get("/:projectId", getKeys);
router.patch("/revoke/:keyId", revokeKey);

export default router;