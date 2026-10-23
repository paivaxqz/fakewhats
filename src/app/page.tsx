import Link from "next/link"
import { CodeBlock } from "@/components/code-block"
import { examples, INSTALL_CMD } from "@/lib/examples"
import { WhatsAppChat } from "@/registry/fakewhats/whatsapp-chat/whatsapp-chat"

const usage = `import { WhatsAppChat } from "@/components/fakewhats/whatsapp-chat"

export default function Demo() {
  return (
    <WhatsAppChat
      variant="android"   // "ios" | "android"
      theme="dark"        // "light" | "dark"
      frame               // draw the phone around it
      data={{
        contact: { name: "Ana", status: "online" },
        messages: [
          { from: "them", text: "Did you see the game?", time: "20:01" },
          { from: "me", text: "*UNREAL* ending 😱", time: "20:02", status: "read" },
        ],
      }}
    />
  )
}`

const aiPrompt = `Use the WhatsAppChat component in components/fakewhats.
Read components/fakewhats/schema.ts for the data format.
Create a mock conversation of a customer ordering a pizza
from a bot, with a list menu and quick reply buttons.`

const features = [
  ["iOS + Android", "Two faithful looks, light and dark, with optional phone frame and status bar."],
  ["Just data", "The whole chat is one typed object. Easy for you, easier for your AI agent."],
  ["Everything WhatsApp", "Text formatting, ticks, images, voice notes, replies, reactions, buttons and lists."],
  ["You own the code", "Installed with the shadcn CLI. The files land in your project: edit anything."],
]

export default function Home() {
  const [support, pizza, , friends] = examples
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 lg:grid-cols-[1fr_auto]">
        <div className="max-w-xl">
          <span className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600">
            React · Tailwind · shadcn registry
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Fake WhatsApp chats,
            <br />
            <span className="text-[#1da851]">from a JSON.</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Drop-in React components that render pixel-close WhatsApp screens for landing pages, pitch decks,
            bot demos and tests. Describe the conversation as data, or let your AI write it.
          </p>
          <div className="mt-8 max-w-xl">
            <CodeBlock code={INSTALL_CMD} title="terminal" />
          </div>
          <div className="mt-6 flex gap-3">
            <Link
              href="/playground"
              className="rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-700"
            >
              Open the playground
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium hover:bg-zinc-50"
            >
              Read the docs
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-6">
          <div className="origin-top scale-[0.62] [margin-bottom:-330px] sm:scale-75 sm:[margin-bottom:-220px]">
            <WhatsAppChat data={support.data} variant="ios" frame />
          </div>
          <div className="hidden origin-top scale-75 [margin-bottom:-220px] xl:block">
            <WhatsAppChat data={friends.data} variant="android" theme="dark" frame />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(([title, body]) => (
            <div key={title}>
              <h3 className="font-medium">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Use it</h2>
          <p className="mt-2 text-zinc-600">One component, one object. Every field is typed and documented.</p>
          <div className="mt-6">
            <CodeBlock code={usage} title="app/demo.tsx" />
          </div>
          <h2 className="mt-12 text-2xl font-semibold tracking-tight">Or ask your AI</h2>
          <p className="mt-2 text-zinc-600">
            The data format lives in <code className="font-mono text-sm">schema.ts</code> with a description on
            every field, plus a{" "}
            <a href="/schema.json" className="underline">
              JSON Schema
            </a>
            . Agents like Claude Code or Cursor get it right the first time.
          </p>
          <div className="mt-6">
            <CodeBlock code={aiPrompt} title="prompt" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="origin-top scale-[0.8] [margin-bottom:-170px]">
            <WhatsAppChat data={pizza.data} variant="android" frame />
          </div>
        </div>
      </section>
    </main>
  )
}
