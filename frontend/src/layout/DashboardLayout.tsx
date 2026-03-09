import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {

  return (
    <div className="flex bg-black text-white">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Topbar />

        <main className="p-6">
          <Outlet />
        </main>

      </div>

    </div>
  )

}