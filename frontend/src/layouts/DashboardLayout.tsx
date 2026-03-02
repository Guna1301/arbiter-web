import type { ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";

interface DashboardLayoutProps {
  children?: ReactNode;
}

interface SidebarItemProps {
  to: string;
  label: string;
  end?: boolean;
}

const SidebarItem = ({ to, label, end }: SidebarItemProps) => {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-md transition-colors ${
          isActive
            ? "bg-zinc-800 text-blue-500"
            : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

const DashboardLayout = ({}: DashboardLayoutProps) => {
    return (
        <div className="flex min-h-screen bg-zinc-950 text-zinc-100">
            {/* sidebar */}
            <aside className="w-64 bg-zinc-900 border-r border-zinc-800 p-6">
                <h2 className="text-lg font-bold tracking-wide mb-10">
                    ARBITER
                </h2>
                <nav className="space-y-2 text-sm">
                    <SidebarItem to="/dashboard" label="Overview" end />
                    <SidebarItem to="/dashboard/keys" label="API Keys" />
                    <SidebarItem to="/dashboard/rules" label="Rules" />
                    <SidebarItem to="/dashboard/analytics" label="Analytics" />
                    <SidebarItem to="/dashboard/settings" label="Settings" />
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

                <main className="flex-1 p-10">
                    <div className="max-w-6xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout;