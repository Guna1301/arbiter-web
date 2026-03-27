import { useState, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { docsNav } from "../../lib/docsConfig"
import { GithubIcon, Menu, PanelLeftClose, PanelLeftOpen, X } from "lucide-react"
import Search from "./Search"

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
)

export default function DocsSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location])

  const SidebarContent = (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
            Arbiter
          </h1>
          <p className="text-xs text-zinc-500 mt-1">Documentation</p>
        </div>
        
        <button 
          onClick={() => setIsCollapsed(true)}
          className="hidden md:block text-zinc-500 hover:text-white transition"
        >
          <PanelLeftClose size={20} />
        </button>

        <button 
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden text-zinc-500 hover:text-white transition"
        >
          <X size={20} />
        </button>
      </div>

      <div className="px-4 py-4">
        <Search />
      </div>

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
                    `block px-3 py-2 rounded-md text-sm transition ${
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
        <div className="flex items-center gap-3">
          <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <XIcon size={14} />
          </a>
          <a href="https://github.com/Guna1301/arbiter-web" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <GithubIcon size={14} />
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {!isMobileOpen && (
        <div className="md:hidden fixed top-4 left-4 z-40">
          <button 
            onClick={() => setIsMobileOpen(true)}
            className="p-2 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-md text-white shadow-xl"
          >
            <Menu size={20} />
          </button>
        </div>
      )}

      {isCollapsed && (
        <div className="hidden md:block fixed top-6 left-6 z-50">
           <button 
            onClick={() => setIsCollapsed(false)}
            className="p-2 text-zinc-500 hover:text-white transition bg-zinc-950 border border-zinc-800 rounded-md shadow-lg"
          >
            <PanelLeftOpen size={20} />
          </button>
        </div>
      )}

      <div 
        className={`fixed inset-0 bg-black/60 z-[60] md:hidden transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      <aside 
        className={`
          fixed inset-y-0 left-0 z-[70] h-screen bg-zinc-950
          border-r border-zinc-800 transition-all duration-300 ease-in-out
          w-72 overflow-hidden
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:sticky md:top-0 md:z-30 md:translate-x-0
          ${isCollapsed ? "md:w-0 md:border-none" : "md:w-72"}
        `}
      >
        <div className="w-72 h-full">
          {SidebarContent}
        </div>
      </aside>
    </>
  )
}