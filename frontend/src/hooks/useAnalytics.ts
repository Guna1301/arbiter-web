import { useQuery } from "@tanstack/react-query"
import {
  getRuleMetrics,
  getTopAbuse,
  getStatusMetrics
} from "../services/analytics.api"

export function useRuleMetrics(projectId: string) {
  return useQuery({
    queryKey: ["rule-metrics", projectId],
    queryFn: () => getRuleMetrics(projectId),
    enabled: !!projectId
  })
}

export function useTopAbuse(projectId: string) {
  return useQuery({
    queryKey: ["top-abuse", projectId],
    queryFn: () => getTopAbuse(projectId),
    enabled: !!projectId
  })
}

export function useStatusMetrics(projectId: string) {
  return useQuery({
    queryKey: ["status-metrics", projectId],
    queryFn: () => getStatusMetrics(projectId),
    enabled: !!projectId
  })
}