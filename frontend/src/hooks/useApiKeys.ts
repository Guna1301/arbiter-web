import { useQuery } from "@tanstack/react-query"
import { getApiKeys } from "../services/apikey.api"

export function useApiKeys(projectId: string) {
  return useQuery({
    queryKey: ["apikeys", projectId],
    queryFn: () => getApiKeys(projectId),
    enabled: !!projectId
  })
}