export default function AnalyticsMock() {
  const allowedColor = "#22c55e"; 
  const blockedColor = "#ef4444";
  const barColor = "#6366f1"; 

  return (
    <div className="order-2 lg:order-1">
      <div className="bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col gap-[1px] border border-zinc-800">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px]">
          
          <div className="bg-[#121212] p-6 h-64 flex flex-col">
            <div className="text-[11px] text-zinc-500 font-semibold tracking-widest mb-6">RULE HITS</div>
            <div className="flex-1 flex items-end justify-center gap-12">
              
              <div className="flex flex-col justify-between h-full text-zinc-600 text-[11px] font-mono pb-6">
                <span>3</span>
                <span>2.25</span>
                <span>1.5</span>
                <span>0.75</span>
                <span>0</span>
              </div>
              
              <div className="flex flex-col items-center gap-3 h-full justify-end">
                <div className="w-10 rounded-t-sm h-[80%]" style={{ backgroundColor: barColor }}></div>
                <span className="text-[11px] text-zinc-400">login</span>
              </div>
              
              <div className="flex flex-col items-center gap-3 h-full justify-end">
                <div className="w-10 rounded-t-sm h-[30%]" style={{ backgroundColor: barColor }}></div>
                <span className="text-[11px] text-zinc-400">search</span>
              </div>
              
            </div>
          </div>

          <div className="bg-[#121212] p-6 h-64 flex flex-col items-center">
            <div className="self-start text-[11px] text-zinc-500 font-semibold tracking-widest mb-2">TRAFFIC STATUS</div>
            
            <div className="relative flex items-center justify-center w-32 h-32 mt-2">
              <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                <circle cx="18" cy="18" r="15.915" fill="none" className="stroke-zinc-900" strokeWidth="4" />
                <circle cx="18" cy="18" r="15.915" fill="none" strokeDasharray="30 70" className="stroke-green-500" strokeWidth="4" strokeDashoffset="-70" />
                <circle cx="18" cy="18" r="15.915" fill="none" strokeDasharray="70 30" className="stroke-red-500" strokeWidth="4" strokeDashoffset="-0" />
              </svg>
            </div>

            <div className="flex gap-6 text-[11px] font-semibold text-zinc-400 mt-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: allowedColor }}></span> Allowed
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: blockedColor }}></span> Blocked
              </span>
            </div>
          </div>

        </div>

        <div className="bg-[#121212] p-6">
          <div className="text-[11px] text-zinc-500 font-semibold tracking-widest mb-6 uppercase">Top Abusive IPs</div>
          
          <div className="grid grid-cols-2 text-[11px] font-semibold text-zinc-500 mb-4 tracking-wider">
            <div>IP ADDRESS</div>
            <div className="text-right">REQUESTS BLOCKED</div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 items-center">
              <span className="font-mono text-zinc-300 text-sm">1.0.0.127</span>
              <div className="text-right font-semibold text-zinc-100">2</div>
            </div>
            <div className="grid grid-cols-2 items-center">
              <span className="font-mono text-zinc-300 text-sm">1.0.0.126</span>
              <div className="text-right font-semibold text-zinc-100">1</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}