import { useState } from "react"
import type { Rule } from "../types/rule"
import { deleteRule, updateRule } from "../services/rule.api"
import { useQueryClient } from "@tanstack/react-query"
import { Trash2, Edit2, Activity, ShieldAlert, X, Settings2, ChevronDown, ChevronUp } from "lucide-react"

export default function RuleTable({
  rules,
  projectId
}: {
  rules: Rule[]
  projectId: string
}) {
  const queryClient = useQueryClient()
  
  const [editingRule, setEditingRule] = useState<Rule | null>(null)
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [isUpdating, setIsUpdating] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [jsonError, setJsonError] = useState("")

  const [editName, setEditName] = useState("")
  const [editLimit, setEditLimit] = useState<number | "">("")
  const [editWindow, setEditWindow] = useState<number | "">("")
  const [editAlgorithm, setEditAlgorithm] = useState("")
  const [editPolicy, setEditPolicy] = useState("")
  const [editAbuse, setEditAbuse] = useState("")

  const openEditModal = (rule: Rule) => {
    setEditingRule(rule)
    setEditName(rule.name)
    setEditLimit(rule.limit)
    setEditWindow(rule.window)
    setEditAlgorithm(rule.algorithm || "")
    
    setEditPolicy(rule.policy ? JSON.stringify(rule.policy, null, 2) : "")
    setEditAbuse(rule.abuse ? JSON.stringify(rule.abuse, null, 2) : "")
    
    setShowAdvanced(!!rule.algorithm || !!rule.policy || !!rule.abuse)
    setJsonError("")
  }

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this rule? Traffic will be unprotected.")) return;
    
    setIsDeleting(id)
    try {
      await deleteRule(id)
      queryClient.invalidateQueries({ queryKey: ["rules", projectId] })
    } finally {
      setIsDeleting(null)
    }
  }

  const handleUpdate = async () => {
    if (!editingRule || !editName.trim() || !editLimit || !editWindow) return
    
    setJsonError("")
    let parsedPolicy = undefined
    let parsedAbuse = undefined

    try {
      if (editPolicy.trim()) parsedPolicy = JSON.parse(editPolicy)
      if (editAbuse.trim()) parsedAbuse = JSON.parse(editAbuse)
    } catch (error) {
      setJsonError("Invalid JSON format in Policy or Abuse fields.")
      return
    }

    setIsUpdating(true)

    try {
      const payload = {
        name: editName,
        limit: Number(editLimit),
        window: Number(editWindow),
        algorithm: editAlgorithm || null,
        policy: parsedPolicy || null,
        abuse: parsedAbuse || null
      }

      await updateRule(editingRule.id, payload)
      queryClient.invalidateQueries({ queryKey: ["rules", projectId] })
      setEditingRule(null)
    } catch (error) {
      console.error("Failed to update rule", error)
    } finally {
      setIsUpdating(false)
    }
  }

  const formatAlgo = (algo?: string | null) => {
    if (!algo) return "Default"
    return algo.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  return (
    <>
      <div className="w-full overflow-x-auto border-x border-zinc-800/80 rounded-xl">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-zinc-800/80 bg-zinc-900/50">
              <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Rule Name</th>
              <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Configuration</th>
              <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Algorithm</th>
              <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Advanced</th>
              <th className="px-4 py-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60 bg-zinc-950/20">
            {rules.map((rule) => (
              <tr 
                key={rule.id} 
                className="hover:bg-zinc-800/30 transition-colors group"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <Activity size={14} className="text-emerald-500 shrink-0" />
                    <span className="text-sm font-medium text-zinc-200 whitespace-nowrap">{rule.name}</span>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-zinc-300 font-mono">{rule.limit} reqs</span>
                    <span className="text-xs text-zinc-500 whitespace-nowrap">per {rule.window}s</span>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/60 text-xs font-medium text-zinc-300 whitespace-nowrap">
                    {formatAlgo(rule.algorithm)}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <div className="flex gap-2">
                    {rule.policy && (
                      <span title="Custom Policy Active" className="text-indigo-400 bg-indigo-400/10 p-1 rounded shrink-0">
                        <Settings2 size={14} />
                      </span>
                    )}
                    {rule.abuse && (
                      <span title="Abuse Prevention Active" className="text-amber-400 bg-amber-400/10 p-1 rounded shrink-0">
                        <ShieldAlert size={14} />
                      </span>
                    )}
                    {!rule.policy && !rule.abuse && (
                      <span className="text-xs text-zinc-600">-</span>
                    )}
                  </div>
                </td>

                <td className="px-4 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => openEditModal(rule)}
                      className="p-1.5 text-zinc-400 hover:text-indigo-400 hover:bg-indigo-400/10 rounded-md transition-colors"
                      title="Edit Rule"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(rule.id)}
                      disabled={isDeleting === rule.id}
                      className="p-1.5 text-zinc-400 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors disabled:opacity-50"
                      title="Delete Rule"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingRule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            
            <div className="flex items-center justify-between p-6 border-b border-zinc-800/60 shrink-0">
              <div>
                <h2 className="text-lg font-semibold text-zinc-100">Edit Rule</h2>
                <p className="text-xs text-zinc-400 mt-1">Update limits and algorithms.</p>
              </div>
              <button 
                onClick={() => setEditingRule(null)}
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex flex-col gap-5 custom-scrollbar">
              
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Rule Name *</label>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block p-2.5 transition-colors"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Request Limit *</label>
                  <input
                    type="number"
                    min="1"
                    value={editLimit}
                    onChange={(e) => setEditLimit(e.target.value ? Number(e.target.value) : "")}
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block p-2.5 transition-colors"
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Window (Seconds) *</label>
                  <input
                    type="number"
                    min="1"
                    value={editWindow}
                    onChange={(e) => setEditWindow(e.target.value ? Number(e.target.value) : "")}
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block p-2.5 transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-800/60">
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors w-full"
                >
                  {showAdvanced ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  Advanced Configuration (Optional)
                </button>
              </div>

              {showAdvanced && (
                <div className="flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
                  
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">Algorithm</label>
                    <select
                      value={editAlgorithm}
                      onChange={(e) => setEditAlgorithm(e.target.value)}
                      className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block p-2.5 transition-colors appearance-none"
                    >
                      <option value="">Default (System chosen)</option>
                      <option value="fixed_window">Fixed Window</option>
                      <option value="sliding_window">Sliding Window</option>
                      <option value="token_bucket">Token Bucket</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5 flex justify-between">
                      <span>Policy Rules</span>
                      <span className="text-zinc-600 text-[10px] uppercase">JSON Format</span>
                    </label>
                    <textarea
                      value={editPolicy}
                      onChange={(e) => setEditPolicy(e.target.value)}
                      placeholder='{"role": "admin", "bypass": true}'
                      rows={3}
                      className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block p-2.5 transition-colors font-mono placeholder-zinc-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5 flex justify-between">
                      <span>Abuse Prevention</span>
                      <span className="text-zinc-600 text-[10px] uppercase">JSON Format</span>
                    </label>
                    <textarea
                      value={editAbuse}
                      onChange={(e) => setEditAbuse(e.target.value)}
                      placeholder='{"blockDuration": "24h", "notify": true}'
                      rows={3}
                      className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block p-2.5 transition-colors font-mono placeholder-zinc-700"
                    />
                  </div>
                  
                  {jsonError && (
                    <p className="text-xs text-red-400 bg-red-950/30 p-2 rounded border border-red-900/50">
                      {jsonError}
                    </p>
                  )}
                </div>
              )}

            </div>

            <div className="p-6 pt-4 border-t border-zinc-800/60 shrink-0 flex justify-end gap-3">
              <button
                onClick={() => setEditingRule(null)}
                className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                disabled={!editName.trim() || !editLimit || !editWindow || isUpdating}
                className="px-4 py-2 text-sm font-medium bg-zinc-100 text-zinc-900 hover:bg-white rounded-lg transition-colors disabled:opacity-50"
              >
                {isUpdating ? "Saving..." : "Save Changes"}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}