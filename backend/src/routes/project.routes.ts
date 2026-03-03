import { Router } from "express";
import * as controller from "../controllers/project.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { syncUser } from "../middleware/syncUser.js";

const router = Router();

router.use(requireAuth, syncUser);

router.post("/", controller.createProject);
router.get("/", controller.getProjects);

export default router;