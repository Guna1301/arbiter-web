import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

export default function RuleChart({ data }: any) {
  const formatted = [...data].sort((a, b) => b.count - a.count)

  return (
    <div className="flex flex-col bg-zinc-900/80 border border-zinc-800 p-6 rounded-xl shadow-sm">
      <h3 className="mb-6 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
        Rule Hits
      </h3>

      <div className="h-[300px] w-full">
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
      </div>
    </div>
  )
}