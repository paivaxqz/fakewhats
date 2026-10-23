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

function Segmented<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T
  options: readonly T[]
  onChange: (v: T) => void
}) {
  return (
    <div className="inline-flex rounded-lg border border-white/10 bg-white/5 p-0.5">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`rounded-md px-2.5 py-1 text-xs font-medium ${
            value === o ? "bg-white/15 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
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

  const parsed = useMemo(() => parse(text), [text])
  // Keep showing the last valid conversation while the JSON is being edited.
  const [lastGood, setLastGood] = useState<Conversation>(examples[0].data)
  if (parsed.ok && parsed.data !== lastGood) setLastGood(parsed.data)

  const jsx = `<WhatsAppChat
  variant="${variant}"
  theme="${theme}"${locale !== "en" ? `\n  locale="${locale}"` : ""}${wallpaper !== "doodle" ? `\n  wallpaper="${wallpaper}"` : ""}${textSize !== "medium" ? `\n  textSize="${textSize}"` : ""}${frame ? "\n  frame" : ""}
  data={${text.trim().split("\n").join("\n  ")}}
/>`

  return (
    <main className="mx-auto grid w-full max-w-7xl flex-1 gap-6 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_auto]">
      <div className="flex min-h-[70vh] flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={exampleId}
            onChange={(e) => {
              const ex = examples.find((x) => x.id === e.target.value)!
              setExampleId(ex.id)
              setText(JSON.stringify(ex.json, null, 2))
            }}
            className="rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-sm text-zinc-200"
          >
            {examples.map((ex) => (
              <option key={ex.id} value={ex.id}>
                {ex.label}
              </option>
            ))}
          </select>
          <Segmented value={variant} options={["ios", "android"] as const} onChange={setVariant} />
          <Segmented value={theme} options={["light", "dark"] as const} onChange={setTheme} />
          <Segmented value={locale} options={["en", "pt", "es"] as const} onChange={setLocale} />
          <Segmented value={wallpaper} options={["doodle", "none"] as const} onChange={setWallpaper} />
          <Segmented value={textSize} options={["small", "medium", "large"] as const} onChange={setTextSize} />
          <label className="flex items-center gap-1.5 text-xs font-medium text-zinc-400">
            <input type="checkbox" checked={frame} onChange={(e) => setFrame(e.target.checked)} />
            frame
          </label>
          <div className="ml-auto flex gap-2">
            <CopyButton text={text} label="Copy JSON" />
            <CopyButton text={jsx} label="Copy JSX" />
          </div>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck={false}
          className="min-h-[60vh] flex-1 resize-none rounded-xl border border-white/10 bg-white/5 p-4 font-mono text-[12.5px] leading-relaxed text-zinc-100 outline-none focus:ring-2 focus:ring-[#25d366]/50"
        />
        <div
          className={`rounded-lg px-3 py-2 font-mono text-xs whitespace-pre-wrap ${
            parsed.ok ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
          }`}
        >
          {parsed.ok ? "✓ Valid conversation" : parsed.error}
        </div>
      </div>
      <div className="flex justify-center lg:sticky lg:top-20 lg:self-start">
        {frame ? (
          <div className="origin-top scale-[0.85] [margin-bottom:-130px]">
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
          <div className="h-[720px] w-[390px] overflow-hidden rounded-xl border border-white/10">
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
