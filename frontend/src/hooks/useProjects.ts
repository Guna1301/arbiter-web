import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProjects, createProject } from "../services/project.api";

export function useProjects({ page = 1, limit = 10 }: { page?: number, limit?: number }) {
  return useQuery({
    queryKey: ["projects", page, limit], 
    queryFn: () => getProjects({ page, limit })
  })
}
export function useCreateProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProject, 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    }
  });
}