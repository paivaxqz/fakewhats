"use client"

import { useState } from "react"

export function CopyButton({ text, label = "Copy", className = "" }: { text: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
      className={`rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-400 transition hover:bg-white/10 hover:text-zinc-200 ${className}`}
    >
      {copied ? "Copied!" : label}
    </button>
  )
}
