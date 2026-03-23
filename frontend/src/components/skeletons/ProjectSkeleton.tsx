export default function ProjectSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 w-full">
      <div className="animate-pulse flex flex-col gap-4">
        <div className="h-8 bg-zinc-800/80 rounded w-48 mb-8"></div>
        <div className="h-10 bg-zinc-800/40 rounded-lg w-full max-w-md mb-6"></div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 bg-zinc-800/50 rounded-xl w-full"></div>
        ))}
      </div>
    </div>
  )
}