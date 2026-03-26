import Topbar from "./Topbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen w-full bg-zinc-950 text-zinc-100 overflow-hidden">
      
      <Topbar />

      <main className="flex-1 overflow-y-auto overflow-x-hidden bg-zinc-950 relative flex flex-col">
        <div className="flex-1 p-6">
          <Outlet />
        </div>
        
        <Footer />
      </main>

    </div>
  )
}