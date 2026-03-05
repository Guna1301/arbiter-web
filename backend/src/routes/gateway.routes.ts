import { Router } from "express";
import { validateApiKey } from "../middleware/validateApiKey.js";
import { getProjectConfig } from "../services/config.service.js";

const router = Router();

router.post("/protect",validateApiKey, async (req:any,res)=>{

    const { rule } = req.body;

    const projectId = req.project.id;

    const config = await getProjectConfig(projectId);

    if(!config){
      return res.status(404).json({
        message:"Project config not found"
      });
    }

    const ruleConfig = config.rules.find(
      (r:any)=> r.name === rule
    );

    res.json({
      global: config.global,
      rule: ruleConfig
    });

  }
);

router.get("/config", validateApiKey, async (req:any,res)=>{

  const projectId = req.project.id;

  const config = await getProjectConfig(projectId);

  res.json({
    version: req.project.configVersion,
    global: config.global,
    rules: config.rules
  });

});

export default router;