import { api } from "../lib/api"
import type { Rule, UpdateRuleInput } from "../types/rule"

export const getRules = async (projectId: string): Promise<Rule[]> => {
  const res = await api.get(`/rules/${projectId}`)
  return res.data
}

export const createRule = async (
  projectId: string,
  data: Partial<Rule>
): Promise<Rule> => {
  const res = await api.post(`/rules/${projectId}`, data)
  return res.data
}

export const updateRule = async (
  ruleId: string,
  data: UpdateRuleInput
) => {
  const res = await api.put(`/rules/${ruleId}`, data);
  return res.data;
};

export const deleteRule = async (ruleId: string) => {
  return api.delete(`/rules/${ruleId}`)
}