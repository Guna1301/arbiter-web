import { 
  Home, 
  Folder, 
  BarChart3, 
  Key, 
  BookOpen,
  Github,
  XIcon,
  LifeBuoy,
} from "lucide-react"
import { NavLink } from "react-router-dom"

const navItems = [
  {
    name: "Overview",
    path: "/dashboard",
    icon: Home,
    end: true,
  },
  {
    name: "Projects",
    path: "/dashboard/projects",
    icon: Folder,
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "API Keys",
    path: "/dashboard/apikeys",
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
    <aside className="w-64 h-screen sticky top-0 bg-zinc-950 border-r border-zinc-800 flex flex-col px-4 py-6">

      <div className="mb-10 px-2">
        <h1 className="text-xl font-bold bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
          Arbiter
        </h1>
        <p className="text-xs text-zinc-500 mt-1 font-medium">
          API Traffic Control
        </p>
      </div>

      <nav className="flex flex-col gap-1.5">
        {navItems.map((item) => {
          const Icon = item.icon

          if (item.newTab) {
            return (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 transition-colors"
              >
                <Icon size={18} strokeWidth={2} />
                {item.name}
              </a>
            )
          }

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors
                ${
                  isActive
                    ? "bg-zinc-800 text-zinc-100 shadow-sm"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                }`
              }
            >
              <Icon size={18} strokeWidth={2} />
              {item.name}
            </NavLink>
          )
        })}

      </nav>

      <div className="mt-auto pt-4 border-t border-zinc-800/60 flex items-center justify-between px-3">
        
        <span className="text-[12px] text-zinc-500 font-medium">
          Arbiter v1.0
        </span>
        
        <div className="flex items-center gap-3 text-zinc-500">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors" aria-label="GitHub">
            <Github size={16} strokeWidth={2} />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors" aria-label="X">
            <XIcon size={16} strokeWidth={2} /> 
          </a>
          <a href="/support" className="hover:text-zinc-200 transition-colors" aria-label="Support">
            <LifeBuoy size={16} strokeWidth={2} />
          </a>
        </div>
        
      </div>
    </aside>
  )
}