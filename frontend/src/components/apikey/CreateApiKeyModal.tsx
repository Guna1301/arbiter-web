import { useState } from "react";
import { Copy, X, Check, Key } from "lucide-react";
import { createApiKey } from "../../services/apikey.api";
interface Props {
  projectId: string;
  onClose: () => void;
  onCreated: () => void;
}

export default function CreateApiKeyModal({
  projectId,
  onClose,
  onCreated
}: Props) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCreate = async () => {
    if (!name.trim()) return;

    setLoading(true);
    try {
      const res = await createApiKey(projectId, name);
      setGeneratedKey(res.apiKey); 
      onCreated();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (generatedKey) {
      navigator.clipboard.writeText(generatedKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-zinc-950 p-6 rounded-2xl w-full max-w-md border border-zinc-800 shadow-2xl relative animate-in zoom-in-95 duration-200">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors p-1 rounded-md hover:bg-zinc-800/50"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300">
            <Key size={18} />
          </div>
          <div>
            <h2 className="text-lg text-zinc-100 font-semibold">Create API Key</h2>
            <p className="text-sm text-zinc-400">Generate a new key for this project</p>
          </div>
        </div>

        {!generatedKey ? (
          <div className="space-y-4">
            <div>
              <label htmlFor="keyName" className="block text-sm font-medium text-zinc-300 mb-1.5">
                Key Name
              </label>
              <input
                id="keyName"
                type="text"
                placeholder="e.g. Production Environment"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 rounded-lg text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                disabled={loading || !name.trim()}
                className="flex-1 bg-zinc-100 hover:bg-white text-zinc-900 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-zinc-900/30 border-t-zinc-900 rounded-full animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Key"
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5 animate-in slide-in-from-bottom-2 fade-in duration-300">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4">
              <p className="text-sm text-zinc-300 mb-3">
                Your API key has been generated successfully. You can copy it now, or view it later from the API Keys table.
              </p>

              <div className="relative group">
                <div className="bg-zinc-950 border border-zinc-800 rounded-md p-3 pr-12">
                  <code className="text-sm text-emerald-400 font-mono break-all whitespace-pre-wrap">
                    {generatedKey}
                  </code>
                </div>
                
                <button
                  onClick={handleCopy}
                  className="absolute top-2 right-2 p-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors bg-zinc-950"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-zinc-100 hover:bg-white text-zinc-900 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}