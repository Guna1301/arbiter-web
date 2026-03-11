import { Home, Folder, BarChart3, Key, BookOpen } from "lucide-react"
import { NavLink } from "react-router-dom"

const navItems = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: Folder,
  },
  {
    name: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    name: "API Keys",
    path: "/apikeys",
    icon: Key,
  },
  {
    name: "Docs",
    path: "/docs",
    icon: BookOpen,
    newTab: true,
  },
]

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col px-4 py-6">

      <div className="mb-10 px-2">
        <h1 className="text-lg font-semibold bg-linear-to-r from-yellow-300 via-orange-400 via-red-500 to-red-600 bg-clip-text text-transparent">
          Arbiter
        </h1>
        <p className="text-xs text-zinc-500 mt-1">
          API Traffic Control
        </p>
      </div>

      <nav className="flex flex-col gap-2">

        {navItems.map((item) => {
          const Icon = item.icon

          if (item.newTab) {
            return (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
              >
                <Icon size={18} />
                {item.name}
              </a>
            )
          }

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
                ${
                  isActive
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {item.name}
            </NavLink>
          )
        })}

      </nav>

      <div className="mt-auto pt-6 border-t border-zinc-800">
        <p className="text-xs text-zinc-500 px-2">
          Arbiter v1.0
        </p>
      </div>

    </aside>
  )
}