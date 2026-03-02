import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex bg-zinc-950 text-zinc-100">

      {/* Left Branding Panel */}
      <div className="hidden md:flex w-1/2 bg-zinc-900 items-center justify-center p-12 border-r border-zinc-800">
        <div>
          <h1 className="text-3xl font-bold mb-4">ARBITER</h1>
          <p className="text-zinc-400 max-w-sm">
            Distributed API protection built for scalable backend systems.
          </p>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

    </div>
  );
};

export default AuthLayout;