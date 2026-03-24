import { useState, useMemo } from "react"
import { Search, X, Shield } from "lucide-react"
import { useRules } from "../hooks/useRules"
import CreateRule from "./CreateRule"
import RuleTable from "./RuleTable"
import RuleSkeleton from "./skeletons/RuleSkeleton"
import type { Rule } from "../types/rule"

interface RulesTabProps {
  projectId: string;
}

export default function RulesTab({ projectId }: RulesTabProps) {
  const { data, isLoading } = useRules(projectId)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredRules = useMemo(() => {
    if (!data) return []
    if (!searchQuery.trim()) return data
    
    return data.filter((rule: Rule) => {
      const search = searchQuery.toLowerCase()
      return (
        (rule.name && rule.name.toLowerCase().includes(search)) ||
        (rule.algorithm && rule.algorithm.toLowerCase().includes(search))
      )
    })
  }, [data, searchQuery])

  if (isLoading) return <RuleSkeleton />

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
            <Search size={16} />
          </div>
          <input
            type="text"
            placeholder="Search by endpoint, name, or algorithm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block pl-10 p-2.5 transition-colors placeholder-zinc-500"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <CreateRule projectId={projectId} />
      </div>

      {filteredRules.length > 0 ? (
        <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-xl overflow-hidden shadow-sm">
          <RuleTable rules={filteredRules} projectId={projectId} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center border border-dashed border-zinc-800/60 rounded-xl bg-zinc-900/20">
          <div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center mb-4 text-zinc-500">
            <Shield size={24} />
          </div>
          <p className="text-zinc-200 text-sm font-medium mb-1">No protection rules active</p>
          <p className="text-zinc-500 text-sm max-w-sm">
            {searchQuery 
              ? `We couldn't find any rate limits matching "${searchQuery}".` 
              : "You haven't configured any rate limiting rules for this project yet."}
          </p>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="mt-4 text-sm text-zinc-400 hover:text-zinc-200 underline underline-offset-4"
            >
              Clear search
            </button>
          )}
        </div>
      )}
    </div>
  )
}