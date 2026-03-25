import type { AbuseKey } from "../types/analytics"

export default function TopAbuseTable({ data }: { data: AbuseKey[] }) {
  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-6 border-b border-zinc-800 bg-zinc-900/50">
        <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Top Abusive IPs
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-zinc-900/50 text-zinc-400 text-xs uppercase font-semibold">
            <tr>
              <th className="px-6 py-4 font-medium tracking-wider">IP Address</th>
              <th className="px-6 py-4 font-medium tracking-wider text-right">Requests Blocked</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-zinc-800 text-zinc-300">
            {data.length === 0 ? (
              <tr>
                <td colSpan={2} className="px-6 py-8 text-center text-zinc-500">
                  No abuse data available.
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.key} className="hover:bg-zinc-800/40 transition-colors">
                  <td className="px-6 py-4 font-mono text-zinc-200">
                    {item.key}
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-white">
                    {item.count.toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}