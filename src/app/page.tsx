import Link from "next/link"
import { CodeBlock } from "@/components/code-block"
import { examples, INSTALL_CMD, REPO_URL } from "@/lib/examples"
import { WhatsAppChat } from "@/registry/fakewhats/whatsapp-chat/whatsapp-chat"

const usage = `import { WhatsAppChat } from "@/components/fakewhats/whatsapp-chat"
import conversation from "./conversation.json"

export default function Demo() {
  return (
    <WhatsAppChat
      data={conversation}
      variant="ios"
      theme="dark"
      frame
    />
  )
}`

const aiPrompt = `Use <WhatsAppChat> from components/fakewhats.
Read components/fakewhats/schema.ts for the data format.
Create a mock conversation of a customer ordering pizza
from a bot, with a list menu and quick reply buttons.`

const features: [string, string, string][] = [
  [
    "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    "AI-first data format",
    "Every field has a .describe(). Claude Code, Cursor, and Codex get it right the first time.",
  ],
  [
    "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18.75h6",
    "iOS + Android",
    "Measured pixel by pixel from real screenshots. Light, dark, and phone frame included.",
  ],
  [
    "M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z",
    "You own the code",
    "shadcn CLI drops the files in your project. Edit anything. Zero runtime deps beyond React.",
  ],
  [
    "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z",
    "Everything WhatsApp",
    "Text formatting, ticks, images, audio, replies, reactions, buttons, lists, and link previews.",
  ],
]

function GitHubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

export default function Home() {
  const [support, pizza, sneaker, friends, groupTrip] = examples
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,211,102,0.12),transparent)]" />

        <div className="mx-auto grid max-w-[1200px] items-center gap-8 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1fr_420px] lg:gap-16 lg:pb-24 lg:pt-20">
          {/* Left: copy */}
          <div className="relative z-10">
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
              React + Tailwind + shadcn registry
            </span>

            <h1 className="mt-5 text-[2rem] font-bold leading-[1.15] tracking-tight sm:text-[2.75rem] lg:text-[3.25rem]">
              Fake WhatsApp chats,{" "}
              <span className="bg-gradient-to-r from-[#25d366] to-[#128c7e] bg-clip-text text-transparent">
                from JSON
              </span>
            </h1>

            <p className="mt-4 max-w-[50ch] text-base leading-relaxed text-zinc-400 sm:text-lg">
              Drop-in React components that render pixel-perfect WhatsApp screens for Remotion videos,
              landing pages, and chatbot demos.
            </p>

            <div className="mt-6 overflow-x-auto rounded-lg border border-white/10 bg-white/5">
              <CodeBlock code={INSTALL_CMD} title="terminal" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/playground"
                className="rounded-lg bg-[#25d366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fba5a]"
              >
                Open playground
              </Link>
              <Link
                href="/docs"
                className="rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/10"
              >
                Docs
              </Link>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/10"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Right: phone mocks - hidden on small screens, single on md, pair on lg */}
          <div className="relative z-10 hidden md:flex md:justify-center lg:justify-end">
            <div className="relative">
              <div className="scale-[0.72] origin-top-right">
                <WhatsAppChat data={support.data} variant="ios" theme="dark" frame />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t border-white/5">
        <div className="mx-auto grid max-w-[1200px] gap-6 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-8">
          {features.map(([icon, title, body]) => (
            <div key={title}>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-zinc-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={icon} />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-500">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="border-t border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Every variant, one component
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-zinc-400">
            iOS and Android, light and dark. Try them in the{" "}
            <Link href="/playground" className="text-[#25d366] underline underline-offset-2">
              playground
            </Link>.
          </p>

          {/* Mobile: horizontal scroll. Desktop: flex row */}
          <div className="-mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
            <div className="w-[260px] shrink-0 snap-center sm:w-auto">
              <div className="origin-top scale-[0.62] sm:scale-[0.65]" style={{ height: 550 }}>
                <WhatsAppChat data={pizza.data} variant="ios" frame />
              </div>
            </div>
            <div className="w-[260px] shrink-0 snap-center sm:w-auto">
              <div className="origin-top scale-[0.62] sm:scale-[0.65]" style={{ height: 550 }}>
                <WhatsAppChat data={sneaker.data} variant="android" theme="dark" frame />
              </div>
            </div>
            <div className="w-[260px] shrink-0 snap-center sm:w-auto">
              <div className="origin-top scale-[0.62] sm:scale-[0.65]" style={{ height: 550 }}>
                <WhatsAppChat data={groupTrip.data} variant="ios" theme="dark" frame />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Code ── */}
      <section className="border-t border-white/5">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">One component, one object</h2>
            <p className="mt-2 max-w-[50ch] text-sm text-zinc-400">
              Import the component, pass a typed conversation, pick a variant.
            </p>
            <div className="mt-5">
              <CodeBlock code={usage} title="app/demo.tsx" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">Let your agent write it</h2>
            <p className="mt-2 max-w-[50ch] text-sm text-zinc-400">
              The data format lives in{" "}
              <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-xs text-zinc-300">schema.ts</code>{" "}
              with a{" "}
              <a href="/schema.json" className="text-[#25d366] underline underline-offset-2">
                JSON Schema
              </a>.
            </p>
            <div className="mt-5">
              <CodeBlock code={aiPrompt} title="prompt" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-[1200px] px-4 py-16 text-center sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Start building</h2>
          <p className="mx-auto mt-3 max-w-md text-zinc-400">
            Install the component, drop in your conversation data, and ship pixel-perfect WhatsApp mocks.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/playground"
              className="rounded-lg bg-[#25d366] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fba5a]"
            >
              Try the playground
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-zinc-300 transition hover:bg-white/10"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
