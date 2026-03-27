import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

export default function RuleChart({ data }: any) {
  const hasData = Array.isArray(data) && data.length > 0
  
  const formatted = hasData ? [...data].sort((a, b) => b.count - a.count) : []

  return (
    <div className="flex flex-col bg-zinc-900/80 border border-zinc-800 p-6 rounded-xl shadow-sm">
      <h3 className="mb-6 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
        Rule Hits
      </h3>

      <div className="h-75 w-full">
        {hasData ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={formatted} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#3f3f46" opacity={0.5} />
              <XAxis 
                dataKey="rule" 
                stroke="#a1a1aa" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                dy={10} 
              />
              <YAxis 
                stroke="#a1a1aa" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value}
              />
              <Tooltip
                cursor={{ fill: '#27272a' }}
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', color: '#f4f4f5' }}
              />
              <Bar dataKey="count" fill="#6366f1" radius={[4, 4, 0, 0]} maxBarSize={50} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full border-2 border-dashed border-zinc-800/80 rounded-lg bg-zinc-900/30">
            <svg 
              className="w-10 h-10 text-zinc-600 mb-3" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <p className="text-sm font-medium text-zinc-400">No data available yet</p>
            <p className="text-xs text-zinc-500 mt-1">Analytics will appear here once rules are triggered.</p>
          </div>
        )}
      </div>
    </div>
  )
}