import { useMemo, useState } from "react"
import Fuse from "fuse.js"
import { docsNav } from "../../lib/docsConfig"
import { useNavigate } from "react-router-dom"

type Item = {
  title: string
  path: string
}

export default function Search() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  const items: Item[] = docsNav.flatMap(section => section.items)

  const fuse = useMemo(() => {
    return new Fuse(items, {
      keys: ["title"],
      threshold: 0.3
    })
  }, [items])

  const results = query
    ? fuse.search(query).map(result => result.item)
    : []

  return (
    <div className="p-4 border-b border-zinc-800">

      <input
        type="text"
        placeholder="Search docs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full bg-zinc-900 text-sm px-3 py-2 rounded border border-zinc-700 focus:outline-none"
      />

      {query && (
        <div className="mt-3 space-y-2">

          {results.map((item) => (
            <div
              key={item.path}
              onClick={() => {
                navigate(item.path)
                setQuery("")
              }}
              className="text-sm cursor-pointer text-zinc-300 hover:text-white"
            >
              {item.title}
            </div>
          ))}

        </div>
      )}

    </div>
  )
}