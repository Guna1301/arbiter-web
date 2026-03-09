import { NavLink } from "react-router-dom"
import { docsNav } from "../../lib/docsConfig"
import { GithubIcon } from "lucide-react"
import Search from "./Search"

export default function DocsSidebar() {
  return (
    <aside className="w-72 shrink-0 border-r border-zinc-800 bg-zinc-950 h-screen sticky top-0 flex flex-col">

      {/* Branding */}
      <div className="p-6 border-b border-zinc-800">
        <h1 className="text-lg font-semibold bg-linear-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">
          Arbiter
        </h1>

        <p className="text-xs text-zinc-500 mt-1">
          Documentation
        </p>
      </div>

      {/* Search Component */}
      <Search />

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">

        {docsNav.map((group) => (
          <div key={group.section}>

            <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2 px-2">
              {group.section}
            </p>

            <div className="flex flex-col gap-1">

              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    `group flex items-center px-3 py-2 rounded-md text-sm transition-colors
                    ${
                      isActive
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}

            </div>

          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">

        <span>Arbiter v1.0</span>

        <a
          href="https://github.com"
          target="_blank"
          className="flex items-center gap-1 hover:text-white transition"
        >
          <GithubIcon size={14} />
          GitHub
        </a>

      </div>

    </aside>
  )
}