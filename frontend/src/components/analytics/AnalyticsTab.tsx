import { useRuleMetrics, useTopAbuse, useStatusMetrics } from "../../hooks/useAnalytics"
import RuleChart from "./RuleChart"
import StatusChart from "./StatusChart"
import TopAbuseTable from "./TopAbuseTable"

export default function AnalyticsTab({ projectId }: { projectId: string }) {
  const { data: rules } = useRuleMetrics(projectId)
  const { data: abuse } = useTopAbuse(projectId)
  const { data: status } = useStatusMetrics(projectId)

  if (!rules || !abuse || !status) {
    return (
      <div className="flex min-h-100 w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-800 border-t-indigo-500" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-2">
        <h2 className="text-xl font-semibold text-white tracking-tight">Security Analytics</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RuleChart data={rules} />
        <StatusChart data={status} />

        <div className="lg:col-span-2">
          <TopAbuseTable data={abuse} />
        </div>
      </div>
    </div>
  )
}