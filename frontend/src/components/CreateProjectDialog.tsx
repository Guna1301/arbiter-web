import { useState } from "react"
import { createProject } from "../services/project.api"
import { useQueryClient } from "@tanstack/react-query"

export default function CreateProjectDialog() {

  const [name, setName] = useState("")
  const queryClient = useQueryClient()

  const handleCreate = async () => {

    if (!name) return

    await createProject(name)

    queryClient.invalidateQueries({ queryKey: ["projects"] })

    setName("")
  }

  return (
    <div className="flex gap-2">

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project name"
        className="bg-zinc-900 border border-zinc-700 px-3 py-2 rounded-md"
      />

      <button
        onClick={handleCreate}
        className="bg-indigo-600 px-4 py-2 rounded-md"
      >
        Create
      </button>

    </div>
  )
}