import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

type Heading = {
  id: string
  text: string
}

export default function TableOfContents() {
  const location = useLocation()
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("h2")
    ) as HTMLHeadingElement[]

    const items = elements
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.innerText
      }))

    setHeadings(items)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-40% 0px -55% 0px"
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <aside className="hidden xl:block w-64 border-l border-zinc-800 p-6 sticky top-0 self-start h-screen">

      <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">
        On this page
      </p>

      <ul className="space-y-2 text-sm">

        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`transition ${
                activeId === heading.id
                  ? "text-white font-medium"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}

      </ul>

    </aside>
  )
}