import { api } from "../lib/api"
import type { RuleMetrics, AbuseKey } from "../types/analytics"

export const getRuleMetrics = async (projectId: string): Promise<RuleMetrics> => {
  const res = await api.get(`/analytics/rules/${projectId}`)
  return res.data
}

export const getTopAbuse = async (projectId: string): Promise<AbuseKey[]> => {
  const res = await api.get(`/analytics/top-abuse/${projectId}`)
  return res.data
}

export const getStatusMetrics = async (projectId: string) => {
  const res = await api.get(`/analytics/stats/${projectId}`)
  return res.data
}