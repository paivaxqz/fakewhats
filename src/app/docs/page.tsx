import type { Metadata } from "next"
import type { ReactNode } from "react"
import { CodeBlock } from "@/components/code-block"
import { INSTALL_CMD } from "@/lib/examples"
import type { Message } from "@/registry/fakewhats/whatsapp-chat/schema"
import { ChatProvider, MessageList } from "@/registry/fakewhats/whatsapp-chat/whatsapp-chat"

export const metadata: Metadata = { title: "Docs · fakewhats" }

const props: [string, string, string, string][] = [
  ["data", "Conversation", "required", "The conversation. See the data format below."],
  ["variant", '"ios" | "android"', '"ios"', "Look of the app."],
  ["theme", '"light" | "dark"', '"light"', "Color scheme."],
  ["locale", '"en" | "pt" | "es"', '"en"', 'Language of built-in labels ("Message", "Forwarded"...).'],
  ["wallpaper", '"doodle" | "none" | url', '"doodle"', "Chat background: doodle pattern, plain color, or an image URL."],
  ["textSize", '"small" | "medium" | "large"', '"medium"', "WhatsApp's chat font size setting (Settings → Chats)."],
  ["frame", "boolean", "false", "Draws a phone around the chat (390×844 iOS, 396×860 Android)."],
  ["statusBar", "boolean | StatusBarOptions", "= frame", "Phone status bar on top. Options: time, battery (0-1), batteryPercent, signal (0-4), dualSim (0-4), wifi, wifiBars (1-3), network (\"5G\"), focus (moon), notch (iPhone X-14 layout), charging, homeIndicator (iOS), navBar (Android)."],
  ["className / style", "", "", "Applied to the root. Without frame, the chat fills its parent."],
]

const conversationFields: [string, string, string][] = [
  ["contact.name", "string", "Name in the header."],
  ["contact.avatar", "string?", "Image URL. Default silhouette if omitted."],
  ["contact.status", "string?", '"online", "typing...", "last seen today at 10:00"...'],
  ["contact.verified", "boolean?", "Green verified badge."],
  ["contact.story", '"new" | "seen"?', "Status ring around the avatar (green / grey)."],
  ["contact.business", "boolean?", "iOS: single call button with a menu arrow instead of contact/video/call."],
  ["messages", "Message[]", "Oldest first. The list starts scrolled to the bottom."],
  ["pinned", "{ text, total? }?", "Pinned message bar under the header. total = 1 to 3 marks."],
  ["draft", "string?", "Text in the input bar. Shows the send button instead of the mic."],
  ["unreadCount", "number?", "Number next to the back arrow."],
  ["scrollButton", "boolean?", "Round scroll-to-latest button above the input bar."],
]

const commonFields: [string, string, string][] = [
  ["from", '"me" | "them"', "Required on every bubble. me = right/green."],
  ["time", "string?", '"10:42"'],
  ["status", '"pending" | "sent" | "delivered" | "read"', "Ticks, outgoing only."],
  ["reply", "{ author, text }?", "Quoted message on top of the bubble."],
  ["reactions", "string[]?", 'Emoji under the bubble, e.g. ["❤️"].'],
  ["forwarded / edited / starred", "boolean?", "Small labels."],
  ["share", "boolean?", "Round forward button next to the bubble (WhatsApp shows it on links and media)."],
]

const kinds: { type: string; note: string; messages: Message[] }[] = [
  {
    type: "text (default)",
    note: "No `type` needed. Supports *bold*, _italic_, ~strike~, `code`, ```mono``` and links.",
    messages: [
      { from: "them", text: "Hello *world* _this_ is ~fake~ `real`", time: "10:00" },
      { from: "me", text: "https://example.com 👀", time: "10:01", status: "read", reactions: ["🔥"] },
    ],
  },
  {
    type: "text + preview",
    note: "Add `preview: { title, description?, domain?, image? }` for a link card, and `share: true` for the forward button.",
    messages: [
      {
        from: "them",
        text: "https://example.com/article",
        time: "12:09",
        share: true,
        preview: { title: "example.com", description: "https://example.com/article", domain: "example.com" },
      },
    ],
  },
  {
    type: "image",
    note: "`src`, optional `caption` and `aspectRatio` (width / height, default 4/3).",
    messages: [{ type: "image", from: "them", src: "/examples/pizza.svg", caption: "Tonight's special 🍕", time: "19:30" }],
  },
  {
    type: "audio",
    note: "`duration`, optional `played` (blue mic) and `progress` (0 to 1).",
    messages: [{ type: "audio", from: "me", duration: "0:42", progress: 0.4, played: true, time: "09:12", status: "read" }],
  },
  {
    type: "buttons",
    note: "`text`, optional `header` / `footer`, and 1 to 3 `buttons`.",
    messages: [
      {
        type: "buttons",
        from: "them",
        text: "How can I help you?",
        footer: "Pick an option",
        buttons: ["Track order", "Talk to a human"],
        time: "10:02",
      },
    ],
  },
  {
    type: "list",
    note: "`text`, `buttonLabel`, `sections`. Set `open: true` (and `selected`) to draw the sheet open.",
    messages: [
      { type: "list", from: "them", text: "Choose a size", buttonLabel: "See options", time: "10:05", sections: [] },
    ],
  },
  {
    type: "date / system / unread",
    note: "Centered pills `{ type: \"date\", text }` and `{ type: \"system\", text }`, and the full-width `{ type: \"unread\", text }` bar (the chat opens scrolled to it).",
    messages: [
      { type: "date", text: "Today" },
      { type: "system", text: "Messages are end-to-end encrypted." },
      { type: "unread", text: "6 unread messages" },
    ],
  },
]

const composable = `import {
  ChatProvider, ChatHeader, MessageList, ChatComposer,
} from "@/components/fakewhats/whatsapp-chat"

// ChatProvider renders the root element with the color variables.
<ChatProvider variant="android" theme="light" className="flex h-[600px] flex-col">
  <ChatHeader contact={{ name: "Ana", status: "online" }} />
  <MessageList messages={[{ from: "them", text: "Custom layout!" }]} />
  <ChatComposer draft="Hi" />
</ChatProvider>`

const cssVars = `<WhatsAppChat
  data={data}
  style={{ "--wa-out": "#e1f3ff", "--wa-accent": "#0a7cff" } as React.CSSProperties}
/>`

const aiSnippet = `// In your prompt or AGENTS.md / CLAUDE.md:
Mock WhatsApp screens use <WhatsAppChat> from components/fakewhats.
The data format (with a description on every field) is in
components/fakewhats/schema.ts. JSON files can use
"$schema": "https://fakewhats.vercel.app/schema.json".`

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/10 py-10 first:border-0 first:pt-0">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white">{title}</h2>
      {children}
    </section>
  )
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/5 text-xs uppercase tracking-wide text-zinc-500">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-4 py-2.5 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t border-white/5 align-top">
              {r.map((c, i) => (
                <td key={i} className={`px-4 py-2.5 ${i < 2 ? "font-mono text-[12.5px] text-zinc-300" : "text-zinc-400"}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const toc = [
  ["install", "Installation"],
  ["usage", "Usage"],
  ["props", "Props"],
  ["data", "Data format"],
  ["messages", "Message types"],
  ["ai", "Using with AI"],
  ["compose", "Composing"],
  ["theming", "Theming"],
]

export default function DocsPage() {
  return (
    <main className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[180px_minmax(0,1fr)]">
      <aside className="hidden lg:block">
        <nav className="sticky top-20 flex flex-col gap-2 text-sm text-zinc-500">
          {toc.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="hover:text-white">
              {label}
            </a>
          ))}
        </nav>
      </aside>
      <div>
        <Section id="install" title="Installation">
          <p className="mb-4 text-zinc-400">
            Requires React 19 and Tailwind CSS v4. The shadcn CLI copies the files into{" "}
            <code className="font-mono text-sm text-zinc-300">components/fakewhats/</code> and installs{" "}
            <code className="font-mono text-sm text-zinc-300">zod</code>.
          </p>
          <CodeBlock code={INSTALL_CMD} title="terminal" />
        </Section>

        <Section id="usage" title="Usage">
          <CodeBlock
            title="app/page.tsx"
            code={`import { WhatsAppChat } from "@/components/fakewhats/whatsapp-chat"
import conversation from "./conversation.json"

export default function Page() {
  return <WhatsAppChat data={conversation} variant="ios" frame />
}`}
          />
          <p className="mt-4 text-sm text-zinc-400">
            Importing a <code className="font-mono">.json</code> file? TypeScript widens string literals, so validate
            it with <code className="font-mono">ConversationSchema.parse(json)</code> (also gives friendly errors) or
            cast it with <code className="font-mono">as Conversation</code>.
          </p>
        </Section>

        <Section id="props" title="Props">
          <Table head={["Prop", "Type", "Default", "Description"]} rows={props} />
        </Section>

        <Section id="data" title="Data format">
          <Table head={["Field", "Type", "Description"]} rows={conversationFields} />
          <h3 className="mb-3 mt-8 font-medium">Fields shared by every bubble</h3>
          <Table head={["Field", "Type", "Description"]} rows={commonFields} />
        </Section>

        <Section id="messages" title="Message types">
          <div className="grid gap-6">
            {kinds.map((k) => (
              <div key={k.type} className="grid items-start gap-4 rounded-xl border border-white/10 p-4 md:grid-cols-2">
                <div className="min-w-0">
                  <h3 className="font-mono text-sm font-semibold">{k.type}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{k.note}</p>
                  <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-950 p-3 font-mono text-[11.5px] text-zinc-100">
                    {JSON.stringify(k.messages, null, 2)}
                  </pre>
                </div>
                <ChatProvider
                  variant="android"
                  className="flex min-h-[120px] overflow-hidden rounded-lg border border-white/10"
                >
                  <MessageList messages={k.messages} />
                </ChatProvider>
              </div>
            ))}
          </div>
        </Section>

        <Section id="ai" title="Using with AI">
          <p className="mb-4 text-zinc-400">
            The whole format is described in <code className="font-mono text-sm">schema.ts</code> (zod, with a{" "}
            <code className="font-mono text-sm">.describe()</code> on every field). The same thing is published as a{" "}
            <a href="/schema.json" className="underline">
              JSON Schema
            </a>
            . Point your agent at it:
          </p>
          <CodeBlock code={aiSnippet} title="AGENTS.md" />
        </Section>

        <Section id="compose" title="Composing">
          <p className="mb-4 text-zinc-400">
            <code className="font-mono text-sm">WhatsAppChat</code> is built from exported pieces. Use them to build your
            own layout: <code className="font-mono text-sm">ChatHeader</code>,{" "}
            <code className="font-mono text-sm">MessageList</code>, <code className="font-mono text-sm">MessageRow</code>,{" "}
            <code className="font-mono text-sm">Bubble</code>, <code className="font-mono text-sm">ChatComposer</code>,{" "}
            <code className="font-mono text-sm">StatusBar</code>, <code className="font-mono text-sm">PhoneFrame</code>,{" "}
            <code className="font-mono text-sm">ListSheet</code>.
          </p>
          <CodeBlock code={composable} title="custom.tsx" />
        </Section>

        <Section id="theming" title="Theming">
          <p className="mb-4 text-zinc-400">
            Every color is a CSS variable on the root (<code className="font-mono text-sm">--wa-bg</code>,{" "}
            <code className="font-mono text-sm">--wa-in</code>, <code className="font-mono text-sm">--wa-out</code>,{" "}
            <code className="font-mono text-sm">--wa-accent</code>...). Override them with{" "}
            <code className="font-mono text-sm">style</code>, or edit{" "}
            <code className="font-mono text-sm">theme.tsx</code>: it&apos;s your code now.
          </p>
          <CodeBlock code={cssVars} title="custom colors" />
        </Section>
      </div>
    </main>
  )
}
