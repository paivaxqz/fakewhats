"use client"

import { useMemo, useState } from "react"
import { CopyButton } from "@/components/copy-button"
import type { Example } from "@/lib/examples"
import { ConversationSchema, type Conversation } from "@/registry/fakewhats/whatsapp-chat/schema"
import {
  WhatsAppChat,
  type Locale,
  type TextSize,
  type Theme,
  type Variant,
} from "@/registry/fakewhats/whatsapp-chat/whatsapp-chat"

type Parsed = { ok: true; data: Conversation } | { ok: false; error: string }

function parse(text: string): Parsed {
  let json: unknown
  try {
    json = JSON.parse(text)
  } catch (e) {
    return { ok: false, error: `Invalid JSON: ${(e as Error).message}` }
  }
  const result = ConversationSchema.safeParse(json)
  if (result.success) return { ok: true, data: result.data }
  return {
    ok: false,
    error: result.error.issues
      .slice(0, 5)
      .map((i) => `${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("\n"),
  }
}

function Pill<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T
  options: readonly T[]
  onChange: (v: T) => void
}) {
  return (
    <div className="inline-flex rounded-md border border-white/8 bg-zinc-900 p-0.5">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`rounded px-2 py-1 text-xs font-medium transition ${
            value === o ? "bg-white/10 text-white" : "text-zinc-600 hover:text-zinc-400"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  )
}

export function Playground({ examples }: { examples: Example[] }) {
  const [exampleId, setExampleId] = useState(examples[0].id)
  const [text, setText] = useState(() => JSON.stringify(examples[0].json, null, 2))
  const [variant, setVariant] = useState<Variant>("ios")
  const [theme, setTheme] = useState<Theme>("light")
  const [locale, setLocale] = useState<Locale>("en")
  const [frame, setFrame] = useState(true)
  const [wallpaper, setWallpaper] = useState<"doodle" | "none">("doodle")
  const [textSize, setTextSize] = useState<TextSize>("medium")
  const [showPreview, setShowPreview] = useState(false)

  const parsed = useMemo(() => parse(text), [text])
  const [lastGood, setLastGood] = useState<Conversation>(examples[0].data)
  if (parsed.ok && parsed.data !== lastGood) setLastGood(parsed.data)

  const jsx = `<WhatsAppChat
  variant="${variant}"
  theme="${theme}"${locale !== "en" ? `\n  locale="${locale}"` : ""}${wallpaper !== "doodle" ? `\n  wallpaper="${wallpaper}"` : ""}${textSize !== "medium" ? `\n  textSize="${textSize}"` : ""}${frame ? "\n  frame" : ""}
  data={${text.trim().split("\n").join("\n  ")}}
/>`

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:py-6">
      {/* Editor panel */}
      <div className="flex min-h-0 flex-1 flex-col gap-3">
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={exampleId}
            onChange={(e) => {
              const ex = examples.find((x) => x.id === e.target.value)!
              setExampleId(ex.id)
              setText(JSON.stringify(ex.json, null, 2))
            }}
            className="rounded-md border border-white/8 bg-zinc-900 px-2 py-1.5 text-sm text-zinc-300"
          >
            {examples.map((ex) => (
              <option key={ex.id} value={ex.id}>{ex.label}</option>
            ))}
          </select>

          <Pill value={variant} options={["ios", "android"] as const} onChange={setVariant} />
          <Pill value={theme} options={["light", "dark"] as const} onChange={setTheme} />

          {/* Advanced controls - hidden on small screens to save space */}
          <div className="hidden items-center gap-2 sm:flex">
            <Pill value={locale} options={["en", "pt", "es"] as const} onChange={setLocale} />
            <Pill value={wallpaper} options={["doodle", "none"] as const} onChange={setWallpaper} />
            <Pill value={textSize} options={["small", "medium", "large"] as const} onChange={setTextSize} />
          </div>

          <label className="flex items-center gap-1.5 text-xs text-zinc-500">
            <input type="checkbox" checked={frame} onChange={(e) => setFrame(e.target.checked)} />
            frame
          </label>

          <div className="ml-auto flex gap-2">
            <CopyButton text={text} label="JSON" />
            <CopyButton text={jsx} label="JSX" />
          </div>
        </div>

        {/* Mobile: toggle between editor and preview */}
        <div className="flex gap-1 rounded-md border border-white/8 bg-zinc-900 p-0.5 lg:hidden">
          <button
            type="button"
            onClick={() => setShowPreview(false)}
            className={`flex-1 rounded px-3 py-1.5 text-xs font-medium transition ${
              !showPreview ? "bg-white/10 text-white" : "text-zinc-600"
            }`}
          >
            Editor
          </button>
          <button
            type="button"
            onClick={() => setShowPreview(true)}
            className={`flex-1 rounded px-3 py-1.5 text-xs font-medium transition ${
              showPreview ? "bg-white/10 text-white" : "text-zinc-600"
            }`}
          >
            Preview
          </button>
        </div>

        {/* Editor textarea */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck={false}
          className={`min-h-[50vh] flex-1 resize-none rounded-lg border border-white/8 bg-zinc-900 p-4 font-mono text-[12px] leading-relaxed text-zinc-300 outline-none focus:border-[#25d366]/30 lg:block ${
            showPreview ? "hidden" : ""
          }`}
        />

        {/* Validation */}
        <div
          className={`rounded-md px-3 py-2 font-mono text-xs ${
            parsed.ok
              ? "bg-emerald-500/5 text-emerald-500"
              : "bg-red-500/5 text-red-400"
          } ${showPreview ? "hidden lg:block" : ""}`}
        >
          {parsed.ok ? "Valid" : parsed.error}
        </div>
      </div>

      {/* Preview panel */}
      <div className={`flex justify-center lg:sticky lg:top-20 lg:block lg:self-start ${
        showPreview ? "" : "hidden lg:flex"
      }`}>
        {frame ? (
          <div className="origin-top scale-[0.75] sm:scale-[0.85]" style={{ marginBottom: -120 }}>
            <WhatsAppChat
              data={lastGood}
              variant={variant}
              theme={theme}
              locale={locale}
              wallpaper={wallpaper}
              textSize={textSize}
              frame
            />
          </div>
        ) : (
          <div className="h-[600px] w-[375px] overflow-hidden rounded-lg border border-white/8 sm:h-[720px] sm:w-[390px]">
            <WhatsAppChat
              data={lastGood}
              variant={variant}
              theme={theme}
              locale={locale}
              wallpaper={wallpaper}
              textSize={textSize}
            />
          </div>
        )}
      </div>
    </main>
  )
}
