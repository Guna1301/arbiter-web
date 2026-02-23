import type { ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayout = ({}: DashboardLayoutProps) => {
    return (
        <div className="flex min-h-screen bg-zinc-950 text-zinc-100">
            {/* sidebar */}
            <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6">
                <h2 className="text-xl font-semibold mb-8">Arbiter</h2>
                <nav className="space-y-4 text-sm">
                    <Link to="/dashboard" className="block hover:text-blue-500">
                        Overview
                    </Link>
                    <Link to="/dashboard/keys" className="block hover:text-blue-500">
                        API Keys
                    </Link>
                    <Link to="/dashboard/rules" className="block hover:text-blue-500">
                        Rules
                    </Link>
                    <Link to="/dashboard/analytics" className="block hover:text-blue-500">
                        Analytics
                    </Link>
                    <Link to="/dashboard/settings" className="block hover:text-blue-500">
                        Settings
                    </Link>
                </nav>
            </aside>

            {/* main content area */}
            <div className="flex-1 flex flex-col">
                {/* top navbar */}
                <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-6">
                    <div className="text-sm text-zinc-400">
                        Dashboard
                    </div>
                    <div className="text-sm">
                        User
                    </div>
                </header>

                <main className="flex-1 p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout;