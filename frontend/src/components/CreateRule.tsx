import { useState } from "react"
import { createRule } from "../services/rule.api"
import { useQueryClient } from "@tanstack/react-query"
import { ShieldPlus, X, ChevronDown, ChevronUp } from "lucide-react"

export default function CreateRule({ projectId }: { projectId: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  
  const [name, setName] = useState("")
  const [limit, setLimit] = useState<number | "">("")
  const [window, setWindow] = useState<number | "">("")
  
  const [algorithm, setAlgorithm] = useState("")
  const [policy, setPolicy] = useState("")
  const [abuse, setAbuse] = useState("")
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [jsonError, setJsonError] = useState("")
  const queryClient = useQueryClient()

  const handleCreate = async () => {
    if (!name.trim() || !limit || !window) return
    
    setJsonError("")
    let parsedPolicy = undefined
    let parsedAbuse = undefined

    try {
      if (policy.trim()) parsedPolicy = JSON.parse(policy)
      if (abuse.trim()) parsedAbuse = JSON.parse(abuse)
    } catch (error: any) {
      setJsonError("Invalid JSON format in Policy or Abuse fields.")
      return
    }

    setIsSubmitting(true)

    try {
      const payload = { 
        name, 
        limit: Number(limit), 
        window: Number(window),
        ...(algorithm && { algorithm }),
        ...(parsedPolicy && { policy: parsedPolicy }),
        ...(parsedAbuse && { abuse: parsedAbuse })
      }

      await createRule(projectId, payload)

      queryClient.invalidateQueries({ queryKey: ["rules", projectId] })

      setIsOpen(false)
      resetForm()
    } catch (error: any) {
      console.error("Failed to create rule", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setName("")
    setLimit("")
    setWindow("")
    setAlgorithm("")
    setPolicy("")
    setAbuse("")
    setShowAdvanced(false)
    setJsonError("")
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-4 w-full p-4 bg-zinc-900/40 border-2 border-dashed border-zinc-800 rounded-xl cursor-pointer hover:bg-zinc-800/40 hover:border-zinc-600 transition-all duration-200"
      >
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/30 text-zinc-400 group-hover:text-zinc-200 transition-colors">
          <ShieldPlus size={18} strokeWidth={2} />
        </div>
        <div>
          <h3 className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
            Create new rate limit rule
          </h3>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            
            <div className="flex items-center justify-between p-6 border-b border-zinc-800/60 shrink-0">
              <div>
                <h2 className="text-lg font-semibold text-zinc-100">New Rule</h2>
                <p className="text-xs text-zinc-400 mt-1">Fields marked with * are required.</p>
              </div>
              <button 
                onClick={() => { setIsOpen(false); resetForm(); }}
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex flex-col gap-5 custom-scrollbar">
              
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Rule Name *</label>
                <input
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. login"
                  className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block p-2.5 transition-colors placeholder-zinc-600"
                />
              </div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Request Limit *</label>
                  <input
                    type="number"
                    min="1"
                    value={limit}
                    onChange={(e) => setLimit(e.target.value ? Number(e.target.value) : "")}
                    placeholder="e.g. 100"
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block p-2.5 transition-colors placeholder-zinc-600"
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Window (Seconds) *</label>
                  <input
                    type="number"
                    min="1"
                    value={window}
                    onChange={(e) => setWindow(e.target.value ? Number(e.target.value) : "")}
                    placeholder="e.g. 60"
                    className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block p-2.5 transition-colors placeholder-zinc-600"
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
                      value={algorithm}
                      onChange={(e) => setAlgorithm(e.target.value)}
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
                      <span className="text-zinc-500 text-[10px] uppercase">JSON Format</span>
                    </label>
                    <textarea
                      value={policy}
                      onChange={(e) => setPolicy(e.target.value)}
                      placeholder='{whitelist: ["admin_login_ip"],blacklist: ["blocked_login_ip"]}'
                      rows={3}
                      className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block p-2.5 transition-colors font-mono placeholder-zinc-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5 flex justify-between">
                      <span>Abuse Prevention</span>
                      <span className="text-zinc-500 text-[10px] uppercase">JSON Format</span>
                    </label>
                    <textarea
                      value={abuse}
                      onChange={(e) => setAbuse(e.target.value)}
                      placeholder='{threshold: 2,banTime: 300}'
                      rows={3}
                      className="w-full bg-zinc-900 border border-zinc-800 text-zinc-200 text-sm rounded-lg focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 block p-2.5 transition-colors font-mono placeholder-zinc-600"
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
                onClick={() => { setIsOpen(false); resetForm(); }}
                className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                disabled={!name.trim() || !limit || !window || isSubmitting}
                className="px-4 py-2 text-sm font-medium bg-zinc-100 text-zinc-900 hover:bg-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? "Saving..." : "Create Rule"}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}