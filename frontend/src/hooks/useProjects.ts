import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/react";
import { getProjects, createProject } from "../services/project.api";

export function useProjects({ page = 1, limit = 10 }) {
  const { isLoaded, isSignedIn } = useAuth();

  return useQuery({
    queryKey: ["projects", page, limit],
    queryFn: () => getProjects({ page, limit }),
    enabled: isLoaded && isSignedIn,
    retry: 1,
  });
}

export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
}