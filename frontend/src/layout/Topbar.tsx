import { BookOpen } from "lucide-react";
import { UserButton } from "@clerk/react";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-950 shrink-0">
      
      <div className="flex items-center gap-3">
        <Link to="/dashboard" className="flex items-center">
          <h1 className="text-xl font-bold bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent">
            Arbiter
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <BookOpen size={18} strokeWidth={2} />
          Docs
        </a>
        
        <div className="h-6 w-px bg-zinc-500" />
        
        <UserButton />
      </div>
      
    </header>
  );
}