import { Github, LifeBuoy } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-5 px-6 border-t border-zinc-800/60 flex items-center justify-between mt-auto bg-zinc-950">
      
      <span className="text-[12px] text-zinc-400 font-medium">
        Arbiter v1.0
      </span>
      
      <div className="flex items-center gap-4 text-zinc-400">
        <a href="https://github.com/Guna1301/arbiter" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors" aria-label="GitHub">
          <Github size={16} strokeWidth={2} />
        </a>
        <a href="https://x.com/gsxvoid" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors" aria-label="X">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 30 30"
            fill="currentColor" 
          >
            <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
          </svg>
        </a>
        <a href="/support" className="hover:text-zinc-200 transition-colors" aria-label="Support">
          <LifeBuoy size={16} strokeWidth={2} />
        </a>
      </div>
      
    </footer>
  )
}