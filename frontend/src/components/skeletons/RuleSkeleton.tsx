export default function RuleSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 w-full animate-pulse">
      <div className="h-4 w-24 bg-zinc-800 rounded mb-8"></div>
      
      <div className="h-8 w-48 bg-zinc-800 rounded mb-2"></div>
      <div className="h-4 w-72 bg-zinc-800/50 rounded mb-8"></div>
      
      <div className="h-10 w-full max-w-md bg-zinc-800/40 rounded-lg mb-6"></div>
      
      <div className="h-16 w-full bg-zinc-800/30 rounded-xl mb-4 border border-zinc-800/50"></div>
      
      <div className="h-64 w-full bg-zinc-800/20 rounded-xl border border-zinc-800/50"></div>
    </div>
  )
}