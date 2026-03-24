import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { ArrowLeft, Shield, Key } from "lucide-react"
import RulesTab from "../../components/RulesTab"
import ApiKeysTab from "../../components/ApiKeysTab"

export default function ProjectDetails() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<"rules" | "apikeys">("rules")

  if (!projectId) return null

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 w-full animate-in fade-in duration-300">
      
      <button 
        onClick={() => navigate('/dashboard/projects')}
        className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-200 transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        Projects
      </button>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-100 flex items-center gap-3">
          Project Settings
        </h1>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Manage your API keys and configure rate limiting rules to protect your endpoints.
        </p>
      </div>

      <div className="flex items-center gap-6 border-b border-zinc-800 mb-8">
        <button
          onClick={() => setActiveTab("rules")}
          className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
            activeTab === "rules"
              ? "border-zinc-200 text-zinc-200"
              : "border-transparent text-zinc-500 hover:text-zinc-300"
          } flex items-center gap-2`}
        >
          <Shield size={16} />
          Rate Limits
        </button>
        <button
          onClick={() => setActiveTab("apikeys")}
          className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
            activeTab === "apikeys"
              ? "border-zinc-200 text-zinc-200"
              : "border-transparent text-zinc-500 hover:text-zinc-300"
          } flex items-center gap-2`}
        >
          <Key size={16} />
          API Keys
        </button>
      </div>

      <div className="animate-in slide-in-from-bottom-2 fade-in duration-300">
        {activeTab === "rules" ? (
          <RulesTab projectId={projectId} />
        ) : (
          <ApiKeysTab projectId={projectId} />
        )}
      </div>

    </div>
  )
}