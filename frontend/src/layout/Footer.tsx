import { Github, XIcon, LifeBuoy } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-5 px-6 border-t border-zinc-800/60 flex items-center justify-between mt-auto bg-zinc-950">
      
      <span className="text-[12px] text-zinc-500 font-medium">
        Arbiter v1.0
      </span>
      
      <div className="flex items-center gap-4 text-zinc-500">
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
      
    </footer>
  )
}