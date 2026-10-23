import { CopyButton } from "./copy-button"

export function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/8 bg-zinc-900">
      {title && (
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-2">
          <span className="font-mono text-xs text-zinc-500">{title}</span>
          <CopyButton text={code} />
        </div>
      )}
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-zinc-300">
        <code>{code}</code>
      </pre>
    </div>
  )
}
