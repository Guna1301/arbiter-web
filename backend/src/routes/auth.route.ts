import { Router } from "express";

import { authCallback } from "../controllers/auth.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const router = Router();

router.post('/callback', requireAuth, authCallback);

export default router;