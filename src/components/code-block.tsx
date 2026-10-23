import { CopyButton } from "./copy-button"

export function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-xs text-zinc-400">{title ?? ""}</span>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-zinc-100">
        <code>{code}</code>
      </pre>
    </div>
  )
}
