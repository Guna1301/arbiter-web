import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts"

export default function StatusChart({ data }: any) {
  const safeData = data || {}
  const allowedCount = safeData.allowed || 0
  const blockedCount = safeData.blocked || 0
  
  const hasData = allowedCount > 0 || blockedCount > 0

  const formatted = [
    { name: "Allowed", value: allowedCount },
    { name: "Blocked", value: blockedCount }
  ]

  const COLORS = ["#10b981", "#ef4444"] 

  return (
    <div className="flex flex-col bg-zinc-900/80 border border-zinc-800 p-6 rounded-xl shadow-sm">
      <h3 className="mb-6 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
        Traffic Status
      </h3>

      <div className="h-[300px] w-full">
        {hasData ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={formatted}
                cx="50%"
                cy="50%"
                innerRadius={75}
                outerRadius={105}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {formatted.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#f4f4f5' }}
                itemStyle={{ color: '#f4f4f5' }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="circle" 
                wrapperStyle={{ fontSize: '12px', color: '#a1a1aa' }} 
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full border-2 border-dashed border-zinc-800/80 rounded-lg bg-zinc-900/30">
            <svg 
              className="w-10 h-10 text-zinc-600 mb-3" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
            <p className="text-sm font-medium text-zinc-400">No traffic logged yet</p>
            <p className="text-xs text-zinc-500 mt-1">Status overview will appear here.</p>
          </div>
        )}
      </div>
    </div>
  )
}