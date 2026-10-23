# fakewhats

Fake WhatsApp chat screens for React, rendered from a typed JSON conversation.
iOS and Android, light and dark, with an optional phone frame.

Made for landing pages, pitch decks, chatbot demos and tests, and designed so an
AI agent (Claude Code, Cursor, Codex...) can write the conversation for you.

**[Playground](https://fakewhats.vercel.app/playground) · [Docs](https://fakewhats.vercel.app/docs)**

## Install

Requires React 19. zod is a peer dependency.

```bash
npm i fakewhats
```

```tsx
import "fakewhats/styles.css"
import { WhatsAppChat } from "fakewhats"

export default function Demo() {
  return (
    <WhatsAppChat
      variant="ios"
      locale="pt"
      frame
      data={{
        contact: { name: "Lia", status: "online" },
        messages: [
          { type: "date", text: "Hoje" },
          { from: "them", text: "chegou?", time: "20:41" },
          { from: "me", text: "to no ponto", time: "20:42", status: "read" },
        ],
      }}
    />
  )
}
```

The CSS file already contains the component styles. The app's Tailwind does not need to scan this package.

To copy the source into the repo instead, use the shadcn registry. That path needs Tailwind CSS v4.

```bash
npx shadcn@latest add https://fakewhats.vercel.app/r/whatsapp-chat.json
```

## Use

`WhatsAppChat` reads a `Conversation`. Import the type and `ConversationSchema` from `"fakewhats"` when you want the editor or a parser to check the JSON.

### Props

| Prop        | Type                                        | Default   |
| ----------- | ------------------------------------------- | --------- |
| `data`      | `Conversation`                              | required  |
| `variant`   | `"ios" \| "android"`                        | `"ios"`   |
| `theme`     | `"light" \| "dark"`                         | `"light"` |
| `locale`    | `"en" \| "pt" \| "es"`                      | `"en"`    |
| `wallpaper` | `"doodle" \| "none" \| url`                  | `"doodle"`|
| `textSize`  | `"small" \| "medium" \| "large"`             | `"medium"`|
| `frame`     | `boolean`                                   | `false`   |
| `statusBar` | `boolean \| StatusBarOptions`                | `= frame` |

`StatusBarOptions`: `time`, `battery` (0 to 1), `batteryPercent`, `signal` (0 to 4),
`dualSim` (second line, 0 to 4), `wifi`, `wifiBars` (1 to 3), `network` (e.g. `"5G"`,
replaces wifi), `focus` (iOS moon icon), `notch` (iPhone X to 14 layout), `charging`
(green battery with a bolt), `homeIndicator` (iOS bottom bar, default on), `navBar`
(Android 3-button navigation bar, default on).

`textSize` is WhatsApp's own chat font size setting (Settings → Chats → Font size).

Without `frame`, the chat fills its parent: give the parent a size.

The conversation can also have `pinned: { text, total? }` (pinned message bar),
`draft` (text in the input), `unreadCount` (number next to the back arrow) and
`scrollButton` (the round "scroll to latest" button above the input).
The contact can have `story: "new" | "seen"` (status ring around the avatar) and
`business: true` (iOS business header with a single call button).

### Messages

Every bubble has `from: "me" | "them"` and optional `time`, `status`
(`pending` / `sent` / `delivered` / `read`), `reply`, `reactions`,
`forwarded`, `edited`, `starred`, `share` (round forward button next to the bubble).

| `type`              | Fields                                                         |
| ------------------- | -------------------------------------------------------------- |
| `"text"` (default)  | `text`, with `*bold*` `_italic_` `~strike~` `` `code` `` and links; `preview?` link card |
| `"image"`           | `src`, `caption?`, `aspectRatio?`                              |
| `"audio"`           | `duration`, `played?`, `progress?`                             |
| `"buttons"`         | `text`, `header?`, `footer?`, `buttons` (1 to 3)               |
| `"list"`            | `text`, `buttonLabel`, `sections`, `open?`, `selected?`        |
| `"date"`            | `text`: day separator                                          |
| `"system"`          | `text`: yellow notice                                          |
| `"unread"`          | `text`: full-width "N unread messages" bar, the chat opens scrolled to it |

Full reference: [`schema.ts`](registry/fakewhats/whatsapp-chat/schema.ts) (zod, a
description on every field) or the generated [JSON Schema](https://fakewhats.vercel.app/schema.json).
Ready-made conversations live in [`examples/`](examples).

## Using it with AI

Tell your agent where the format is. For example in `AGENTS.md` / `CLAUDE.md`:

```md
Mock WhatsApp screens use WhatsAppChat from "fakewhats".
Import "fakewhats/styles.css" once.
Fill the data prop. The type is Conversation.
JSON files can use "$schema": "https://fakewhats.vercel.app/schema.json".
```

JSON files can start with `"$schema": "https://fakewhats.vercel.app/schema.json"`
for autocomplete and validation in the editor.

## Composing

`WhatsAppChat` is built from exported pieces: `ChatProvider`, `ChatHeader`,
`MessageList`, `MessageRow`, `Bubble`, `ChatComposer`, `StatusBar`,
`PhoneFrame`, `ListSheet`. Colors are CSS variables (`--wa-bg`, `--wa-in`,
`--wa-out`, `--wa-accent`...) you can override with `style`.

The iOS look matches WhatsApp for iOS 26 and uses Apple's SF Pro font. On
Windows/Linux, set `--wa-font-fallback` to a font family (the site uses Inter
which has almost the same widths as SF Pro).

## Develop

```bash
npm install
npm run dev        # site, docs and playground on http://localhost:3000
npm run build      # regenerates public/schema.json and public/r/*.json, then builds
```

The component source is in `registry/fakewhats/whatsapp-chat/`. `registry.json`
lists the files the shadcn CLI installs.

## Disclaimer

fakewhats is not affiliated with, endorsed by or connected to WhatsApp or Meta.
It is meant for mockups, demos and testing. Do not use it to impersonate people
or businesses, or to fake conversations to deceive anyone.

## License

[MIT](LICENSE)
