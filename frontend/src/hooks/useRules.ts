import { useQuery } from "@tanstack/react-query"
import { getRules } from "../services/rule.api"

export function useRules(projectId: string) {
  return useQuery({
    queryKey: ["rules", projectId],
    queryFn: () => getRules(projectId),
    enabled: !!projectId
  })
}