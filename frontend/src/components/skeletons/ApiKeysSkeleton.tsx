export default function ApiKeysSkeleton() {
  return (
    <div className="flex flex-col gap-6 w-full animate-pulse">
      
      <div className="flex justify-between items-end">
        <div>
          <div className="h-6 w-24 bg-zinc-800 rounded mb-2"></div>
          <div className="h-4 w-72 bg-zinc-800/50 rounded"></div>
        </div>
        <div className="h-9 w-28 bg-zinc-800 rounded-lg"></div>
      </div>

      <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl overflow-hidden shadow-sm">
        
        <div className="grid grid-cols-6 gap-4 bg-zinc-900 border-b border-zinc-800/80 px-6 py-4">
          <div className="h-4 w-16 bg-zinc-800 rounded"></div>
          <div className="h-4 w-24 bg-zinc-800 rounded"></div>
          <div className="h-4 w-16 bg-zinc-800 rounded"></div>
          <div className="h-4 w-20 bg-zinc-800 rounded"></div>
          <div className="h-4 w-20 bg-zinc-800 rounded"></div>
          <div className="h-4 w-12 bg-zinc-800 rounded ml-auto"></div>
        </div>

        <div className="divide-y divide-zinc-800/50">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="grid grid-cols-6 gap-4 px-6 py-4 items-center">
              <div className="h-4 w-24 bg-zinc-800/80 rounded"></div>
              <div className="h-6 w-40 bg-zinc-800/40 rounded"></div>
              <div className="h-6 w-20 bg-zinc-800/60 rounded-full"></div>
              <div className="h-4 w-24 bg-zinc-800/60 rounded"></div>
              <div className="h-4 w-20 bg-zinc-800/60 rounded"></div>
              <div className="h-8 w-8 bg-zinc-800/80 rounded ml-auto"></div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}