import * as ruleService from "../services/rule.service.js";

export const getRules = async (req:any,res:any)=>{
  const { projectId } = req.params;

  const rules = await ruleService.getProjectRules(projectId);
  res.json(rules);
}

export const createRule = async (req:any,res:any)=>{

  const { projectId } = req.params;

  const rule = await ruleService.createRule(
    projectId,
    req.body
  );

  res.json(rule);
};

export const updateRule = async (req:any,res:any)=>{

  const { ruleId } = req.params;

  const rule = await ruleService.updateRule(
    ruleId,
    req.body
  );

  res.json(rule);
};

export const deleteRule = async (req:any,res:any)=>{

  const { ruleId } = req.params;

  await ruleService.deleteRule(ruleId);

  res.json({ success:true });
};