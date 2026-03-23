import type { Project } from "../types/project"
import { useNavigate } from "react-router-dom"

export default function ProjectCard({ project }: { project: Project }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/dashboard/projects/${project.id}`)}
      className="group flex items-center justify-between w-full p-4 bg-zinc-900 border border-zinc-800 rounded-xl cursor-pointer hover:bg-zinc-800/60 hover:border-zinc-700 transition-all duration-200"
    >
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700/50 text-zinc-400 group-hover:text-zinc-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
          </svg>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-zinc-100 group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <p className="text-xs text-zinc-500 mt-0.5">
            Created {new Date(project.createdAt).toLocaleDateString(undefined, { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </p>
        </div>
      </div>

      <div className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </div>
    </div>
  )
}