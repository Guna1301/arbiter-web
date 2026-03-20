import { useParams } from "react-router-dom"

export default function ProjectDetails() {

  const { projectId } = useParams()

  return (
    <div>

      <h1 className="text-2xl font-semibold">
        Project: {projectId}
      </h1>

    </div>
  )
}