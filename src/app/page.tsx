import Link from "next/link"
import { CodeBlock } from "@/components/code-block"
import { CopyButton } from "@/components/copy-button"
import { examples, INSTALL_CMD, REPO_URL } from "@/lib/examples"
import { WhatsAppChat } from "@/registry/fakewhats/whatsapp-chat/whatsapp-chat"

const snippet = `import "fakewhats/styles.css"
import { WhatsAppChat } from "fakewhats"
import data from "./conversation.json"

<WhatsAppChat data={data} variant="ios" theme="dark" frame />`

const aiSnippet = `Mock WhatsApp screens use WhatsAppChat from "fakewhats".
Import "fakewhats/styles.css" once.
Fill the data prop. The type is Conversation.
JSON can use "$schema": "https://fakewhats.vercel.app/schema.json".`

export default function Home() {
  const [support, pizza, sneaker, , groupTrip] = examples

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(37,211,102,0.08),transparent)]" />

        <div className="mx-auto max-w-5xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#25d366]">React package</p>

            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Pixel-perfect WhatsApp mocks from a single JSON object
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Drop-in React component for Remotion videos, landing pages, and chatbot demos.
              iOS and Android. Light and dark. Designed so AI agents get the data format right the first time.
            </p>

            {/* Install command */}
            <div className="mt-8 flex items-center gap-3 overflow-x-auto rounded-lg border border-white/8 bg-zinc-900 px-4 py-3">
              <span className="shrink-0 select-none text-zinc-600">$</span>
              <code className="shrink-0 whitespace-nowrap font-mono text-sm text-zinc-300">{INSTALL_CMD}</code>
              <CopyButton text={INSTALL_CMD} className="ml-auto shrink-0" />
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/playground"
                className="inline-flex items-center justify-center rounded-lg bg-[#25d366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fba5a] active:scale-[0.98]"
              >
                Open playground
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-white active:scale-[0.98]"
              >
                Read the docs
              </Link>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-white active:scale-[0.98]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Demo phones ── */}
      <section className="border-t border-white/5 bg-zinc-900/30">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <h2 className="text-center text-lg font-semibold text-white sm:text-2xl">
            iOS and Android. Light and dark.
          </h2>
          <p className="mx-auto mt-2 max-w-md text-center text-sm text-zinc-500">
            Swipe to explore different examples. Try them in the{" "}
            <Link href="/playground" className="text-[#25d366] underline underline-offset-2 hover:text-[#1fba5a]">
              playground
            </Link>.
          </p>

          <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 scrollbar-none sm:mx-0 sm:justify-center sm:gap-6 sm:overflow-visible sm:px-0">
            {[
              { data: support.data, variant: "ios" as const, theme: "dark" as const },
              { data: pizza.data, variant: "ios" as const, theme: "light" as const },
              { data: sneaker.data, variant: "android" as const, theme: "dark" as const },
              { data: groupTrip.data, variant: "ios" as const, theme: "dark" as const },
            ].map((props, i) => (
              <div key={i} className="w-[240px] shrink-0 snap-center sm:w-auto">
                <div className="origin-top scale-[0.55] sm:scale-[0.6]" style={{ height: 500 }}>
                  <WhatsAppChat {...props} frame />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="border-t border-white/5">
        <div className="mx-auto grid max-w-5xl gap-px bg-white/5 px-0 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "AI-native data format",
              desc: "Every Zod field has .describe(). Claude, Cursor, and Codex produce valid conversations without examples.",
            },
            {
              title: "iOS + Android",
              desc: "Pixel-matched from real screenshots. Both platforms, both themes, with optional phone frame.",
            },
            {
              title: "npm i fakewhats",
              desc: "Types ship with the package, and the CSS is one import. The shadcn registry is still there if you want the source in the repo.",
            },
            {
              title: "Full message types",
              desc: "Text, images, audio, replies, reactions, buttons, list menus, and link previews.",
            },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-zinc-950 px-5 py-6 sm:px-6">
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Code examples ── */}
      <section className="border-t border-white/5">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 className="text-lg font-semibold text-white">One component, one object</h2>
            <p className="mt-1.5 text-sm text-zinc-500">
              Import, pass data, pick a variant.
            </p>
            <div className="mt-4">
              <CodeBlock code={snippet} title="page.tsx" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-white">Let your AI agent write it</h2>
            <p className="mt-1.5 text-sm text-zinc-500">
              Point the agent at{" "}
              <code className="rounded bg-white/5 px-1.5 py-0.5 font-mono text-xs text-zinc-400">schema.ts</code>{" "}
              or the published{" "}
              <a href="/schema.json" className="text-[#25d366] underline underline-offset-2">JSON Schema</a>.
            </p>
            <div className="mt-4">
              <CodeBlock code={aiSnippet} title="prompt" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-lg font-semibold text-white sm:text-2xl">Ready to build?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
            Install the component, write your conversation JSON, and ship.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/playground"
              className="inline-flex items-center justify-center rounded-lg bg-[#25d366] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fba5a] active:scale-[0.98]"
            >
              Try the playground
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 px-6 py-2.5 text-sm font-medium text-zinc-300 transition hover:border-white/20 hover:text-white active:scale-[0.98]"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
