import { useState } from "react"
import { useCreateProject } from "../../hooks/useProjects"

export default function CreateProjectDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  
  const { mutate: createNewProject, isPending } = useCreateProject()

  const handleCreate = () => {
    if (!name.trim()) return
    
    createNewProject(name, {
      onSuccess: () => {
        setIsOpen(false)
        setName("")
      }
    })
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-4 w-full p-4 bg-zinc-900/40 border-2 border-dashed border-zinc-800 rounded-xl cursor-pointer hover:bg-zinc-800/40 hover:border-zinc-600 transition-all duration-200"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 text-zinc-400 group-hover:text-zinc-200 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
            Create new project
          </h3>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <h2 className="text-lg font-semibold text-zinc-100 mb-1">New Project</h2>
            <p className="text-sm text-zinc-400 mb-6">
              Give your new project a descriptive name.
            </p>
            
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
              placeholder="e.g. AeroOS redesign"
              className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block p-3 mb-6 transition-colors placeholder-zinc-500"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                disabled={!name.trim() || isPending}
                className="px-4 py-2 text-sm font-medium bg-zinc-100 text-zinc-900 hover:bg-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? "Creating..." : "Create Project"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}