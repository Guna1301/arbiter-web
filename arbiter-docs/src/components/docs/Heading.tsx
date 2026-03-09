import { LinkIcon } from "lucide-react"

type Props = {
  id: string
  children: React.ReactNode
}

export default function Heading({ id, children }: Props) {
  return (
    <h2 id={id} className="group relative scroll-mt-24">

      <a
        href={`#${id}`}
        className="absolute -left-6 opacity-0 group-hover:opacity-100 transition"
      >
        <LinkIcon size={16} />
      </a>

      {children}

    </h2>
  )
}