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
      className={`rounded-md border border-white/10 px-2 py-0.5 text-xs text-zinc-500 transition hover:border-white/20 hover:text-zinc-300 ${className}`}
    >
      {copied ? "Copied" : label}
    </button>
  )
}
