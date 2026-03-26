import { TrendingUp } from "lucide-react";

export default function AnalyticsMock() {
  const allowedColor = "rgb(34,197,94)"; 
  const blockedColor = "rgb(239,68,68)";
  const barColor = "rgb(99,102,241)";
  return (
    <div className="order-2 lg:order-1 grid gap-4 p-4 border border-zinc-900 rounded-3xl bg-black">
      
      <div className="grid grid-cols-2 gap-4">
        
        <div className="bg-[#0c0c0e] border border-zinc-800/60 p-5 rounded-2xl">
          <div className="text-xs text-zinc-400 font-semibold mb-6 tracking-wide">RULE HITS</div>
          <div className="flex items-end justify-center gap-6 h-40">
            <div className="flex flex-col justify-between text-zinc-600 text-[11px] font-mono h-full select-none">
              <span>3</span>
              <span>2.25</span>
              <span>1.5</span>
              <span>0.75</span>
              <span>0</span>
            </div>
            <div className="flex flex-col items-center gap-2 h-full justify-end group">
                <div className="relative w-12 h-[80%] rounded-md hover:brightness-110 transition-all cursor-default" style={{ backgroundColor: barColor }}>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 p-2 rounded-lg bg-zinc-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">Hits: 3</div>
                </div>
                <span className="text-[12px] text-zinc-400">login</span>
            </div>
             <div className="flex flex-col items-center gap-2 h-full justify-end group">
                <div className="relative w-12 h-[35%] rounded-md hover:brightness-110 transition-all cursor-default" style={{ backgroundColor: barColor }}>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 p-2 rounded-lg bg-zinc-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">Hits: 1</div>
                </div>
                <span className="text-[12px] text-zinc-400">search</span>
            </div>
          </div>
        </div>

        <div className="bg-[#0c0c0e] border border-zinc-800/60 p-5 rounded-2xl flex flex-col items-center">
          <div className="self-start text-xs text-zinc-400 font-semibold mb-6 tracking-wide">TRAFFIC STATUS</div>
          
          <div className="relative flex items-center justify-center w-36 h-36">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <circle cx="18" cy="18" r="15.915" fill="none" className="stroke-zinc-900" strokeWidth="4" />
              <circle cx="18" cy="18" r="15.915" fill="none" strokeDasharray="30 70" className="stroke-green-500" strokeWidth="4" strokeDashoffset="-70" />
              <circle cx="18" cy="18" r="15.915" fill="none" strokeDasharray="70 30" className="stroke-red-500" strokeWidth="4" strokeDashoffset="-0" />
            </svg>
             <div className="absolute flex flex-col items-center justify-center text-zinc-100 font-bold">
               <span className="text-3xl">89.2%</span>
               <span className="text-xs font-normal text-zinc-500 mt-1">allowed</span>
             </div>
          </div>

          <div className="flex gap-4 text-xs font-semibold text-zinc-400 mt-6 select-none">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: allowedColor }}></span> Allowed
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: blockedColor }}></span> Blocked
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#0c0c0e] border border-zinc-800/60 p-5 rounded-2xl">
        <div className="flex items-center gap-2 text-zinc-100 text-sm font-semibold mb-10 tracking-wide">
          <TrendingUp size={16} /> TOP ABUSIVE IPS
        </div>
        
        <div className="grid grid-cols-2 text-xs font-semibold text-zinc-600 mb-4 tracking-wide px-2 select-none">
          <div>IP ADDRESS</div>
          <div className="text-right">REQUESTS BLOCKED</div>
        </div>

        <div className="space-y-3">
          {[
            { ip: "1.0.0.127", hits: 2 },
            { ip: "1.0.0.126", hits: 1 },
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-2 items-center text-sm p-3 rounded-lg hover:bg-zinc-900 transition-colors cursor-pointer border border-zinc-900">
              <span className="font-mono text-zinc-300 font-bold text-base">{row.ip}</span>
              <div className="flex items-center gap-4 justify-end">
                <span className="text-zinc-500">{row.hits} hits dropped</span>
                <span className="text-2xl font-bold text-zinc-100">{row.hits}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}