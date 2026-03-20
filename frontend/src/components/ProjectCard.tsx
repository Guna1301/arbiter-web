import type { Project } from "../types/project"
import { useNavigate } from "react-router-dom"

export default function ProjectCard({ project }: { project: Project }) {

  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/dashboard/projects/${project.id}`)}
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 cursor-pointer hover:border-indigo-500 transition"
    >
      <h3 className="text-lg font-semibold">
        {project.name}
      </h3>

      <p className="text-sm text-zinc-400 mt-2">
        Created at {new Date(project.createdAt).toLocaleDateString()}
      </p>
    </div>
  )
}