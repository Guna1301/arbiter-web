import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div className="flex h-screen w-full bg-zinc-950 text-zinc-100 overflow-hidden">
      
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0">
        
        <Topbar />

        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-zinc-950 relative">
          <Outlet />
        </main>

      </div>

    </div>
  )
}