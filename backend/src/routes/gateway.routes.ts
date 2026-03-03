import { Router } from "express";
import { validateApiKey } from "../middleware/validateApiKey.js";
import { prisma } from "../config/db.js";

const router = Router();

router.post("/protect",validateApiKey,
  async (req:any,res)=>{
    const { rule } = req.body;
    const project = req.project;

    const ruleConfig = await prisma.rule.findFirst({
        where:{
          projectId:project.id,
          name:rule
        }
      });

    res.json({
      global:{
        algorithm:project.defaultAlgorithm,
        whitelist:project.whitelist,
        blacklist:project.blacklist,
        abuse:project.abuse
      },
      rule:ruleConfig
    });

  }
);

export default router;