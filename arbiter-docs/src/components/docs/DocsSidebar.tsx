import { NavLink } from "react-router-dom"
import { docsNav } from "../../lib/docsConfig"
import { GithubIcon } from "lucide-react"
import Search from "./Search"

export default function DocsSidebar() {
  return (
    <aside className="w-72 shrink-0 border-r border-zinc-800 bg-zinc-950 h-screen sticky top-0 flex flex-col">

      <div className="p-6 border-b border-zinc-800">
      <h1 className="text-lg font-semibold bg-linear-to-r from-yellow-300 via-orange-400 via-red-500 to-red-600 bg-clip-text text-transparent">
        Arbiter
      </h1>

        <p className="text-xs text-zinc-500 mt-1">
          Documentation
        </p>
      </div>

      <Search />

      <nav className="flex-1 overflow-y-auto p-4 space-y-6">

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
                    `block px-3 py-2 rounded-md text-sm transition
                    ${
                      isActive
                        ? "bg-zinc-800 text-white font-medium"
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

      </nav>

      <div className="p-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-300">

        <span>Arbiter v1.0</span>

        <a
          href="https://github.com/Guna1301/arbiter-web"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 hover:text-white transition"
        >
          <GithubIcon size={14} />
          GitHub
        </a>

      </div>

    </aside>
  )
}