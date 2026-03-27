import type { AbuseKey } from "../../types/analytics"

export default function TopAbuseTable({ data }: { data: AbuseKey[] }) {
  const safeData = data || []
  const hasData = safeData.length > 0

  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-zinc-800 bg-zinc-900/50">
        <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          Top Abusive IPs
        </h3>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-zinc-900/50 text-zinc-400 text-xs uppercase font-semibold">
            <tr>
              <th className="px-6 py-4 font-medium tracking-wider">IP Address</th>
              <th className="px-6 py-4 font-medium tracking-wider text-right">Requests Blocked</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-zinc-800 text-zinc-300">
            {!hasData ? (
              <tr>
                <td colSpan={2} className="p-6">
                  <div className="flex flex-col items-center justify-center py-12 px-4 border-2 border-dashed border-zinc-800/80 rounded-lg bg-zinc-900/30">
                    <svg 
                      className="w-10 h-10 text-zinc-600 mb-3" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-sm font-medium text-zinc-400">No abusive IPs detected</p>
                    <p className="text-xs text-zinc-500 mt-1">Your traffic looks clean right now.</p>
                  </div>
                </td>
              </tr>
            ) : (
              safeData.map((item) => (
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