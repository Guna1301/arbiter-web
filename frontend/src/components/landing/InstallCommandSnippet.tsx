import { CheckCircle2, Copy, Terminal } from "lucide-react";
import { useState } from "react";

export default function InstallCommandSnippet() {
  const [copied, setCopied] = useState(false);

  const copyInstallCmd = () => {
    navigator.clipboard.writeText("npm install arbiter-sdk");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-full px-5 py-3.5 w-full sm:w-auto group">
      <Terminal size={18} className="text-zinc-600 mr-3" />
      <code className="text-sm text-zinc-300 font-mono mr-8">npm install arbiter-sdk</code>
      <button onClick={copyInstallCmd} className="text-zinc-500 hover:text-zinc-200 transition-colors ml-auto" aria-label="Copy command">
        {copied ? <CheckCircle2 size={18} className="text-green-500" /> : <Copy size={18} />}
      </button>
    </div>
  )
}