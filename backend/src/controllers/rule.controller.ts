import * as ruleService from "../services/rule.service.js";

export const createRule = async (req:any,res:any)=>{

  const { projectId } = req.params;

  const rule = await ruleService.createRule(
      projectId,
      req.body
    );

  res.json(rule);
};