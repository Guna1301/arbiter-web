import { useProjects } from "../../hooks/useProjects"
import ProjectCard from "../../components/ProjectCard"
import CreateProjectDialog from "../../components/CreateProjectDialog"

export default function Projects() {

  const { data, isLoading } = useProjects()

  if (isLoading) {
    return <p>Loading projects...</p>
  }

  return (
    <div>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-semibold">
          Projects
        </h1>

        <CreateProjectDialog />

      </div>

      {data?.length === 0 ? (
        <p className="text-zinc-400">
          No projects yet. Create your first project.
        </p>
      ) : (

        <div className="grid grid-cols-3 gap-4">

          {data?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

        </div>

      )}

    </div>
  )
}