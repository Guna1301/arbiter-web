import { useState, useMemo } from "react"
import { useProjects } from "../../hooks/useProjects"
import ProjectCard from "../../components/ProjectCard"
import CreateProjectDialog from "../../components/CreateProjectDialog"
import ProjectSkeleton from "../../components/skeletons/ProjectSkeleton"
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react"

export default function Projects() {
  const [page, setPage] = useState(1)
  const limit = 10 
  const [searchQuery, setSearchQuery] = useState("")

  const { data, isLoading } = useProjects({ page, limit })
  

  const filteredProjects = useMemo(() => {
    const projectsList = data?.projects || []
    
    if (!searchQuery.trim()) return projectsList

    return projectsList.filter((project: any) => 
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [data, searchQuery])

  if (isLoading) {
    return <ProjectSkeleton />
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 w-full">
      
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-100">Projects</h1>
        <p className="text-sm text-zinc-400 mt-1">
          Manage your workspaces and recent activity.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder="Search current page..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block pl-10 p-2.5 transition-colors placeholder-zinc-500"
          />
          
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 hover:text-zinc-300"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 min-h-[400px]">
        <CreateProjectDialog />

        {filteredProjects.length > 0 ? (
          filteredProjects.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="py-12 text-center border border-zinc-800/50 rounded-xl bg-zinc-900/20 mt-4">
            <p className="text-zinc-300 text-sm font-medium">No projects found</p>
            <p className="text-zinc-500 text-sm mt-1">
              {searchQuery ? `We couldn't find anything matching "${searchQuery}"` : "You don't have any projects yet."}
            </p>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-4 text-sm text-zinc-400 hover:text-zinc-200 underline underline-offset-4"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>

      {data?.totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-zinc-800/60 mt-8 pt-6">
          <p className="text-sm text-zinc-500">
            Showing page <span className="font-medium text-zinc-300">{page}</span> of <span className="font-medium text-zinc-300">{data.totalPages}</span>
          </p>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} />
              Previous
            </button>
            <button
              onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))}
              disabled={page >= data.totalPages}
              className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 hover:text-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}

    </div>
  )
}