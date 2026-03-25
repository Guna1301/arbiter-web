import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts"

export default function StatusChart({ data }: any) {
  const formatted = [
    { name: "Allowed", value: data.allowed || 0 },
    { name: "Blocked", value: data.blocked || 0 }
  ]

  const COLORS = ["#10b981", "#ef4444"] 

  return (
    <div className="flex flex-col bg-zinc-900/80 border border-zinc-800 p-6 rounded-xl shadow-sm">
      <h3 className="mb-6 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
        Traffic Status
      </h3>

      <div className="h-[300px] w-full">
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
      </div>
    </div>
  )
}