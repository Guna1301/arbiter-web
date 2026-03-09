import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

type Props = {
  language?: string
  code: string
}

export default function CodeBlock({ language = "javascript", code }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 z-10 text-xs bg-zinc-700 text-zinc-300 px-2 py-1 rounded hover:bg-zinc-600 hover:text-white transition-colors"
      >
        {copied ? "Copied" : "Copy"}
      </button>

      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          borderRadius: "8px",
          padding: "20px",
          paddingTop: "44px",
          fontSize: "14px",
          margin: 0,
          background: "#161b22",
          border: "1px solid #30363d",
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}