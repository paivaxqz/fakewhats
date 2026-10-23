# Agents

Mock WhatsApp screens use `WhatsAppChat`.

In an app that installed the package:

- `import "fakewhats/styles.css"` once.
- `import { WhatsAppChat, type Conversation } from "fakewhats"`.
- Fill the `data` prop. Every field is described on `ConversationSchema`.
- A JSON file can start with `"$schema": "https://fakewhats.vercel.app/schema.json"`.

In this repository the same component lives at `registry/fakewhats/whatsapp-chat/whatsapp-chat.tsx`. The field docs are in `registry/fakewhats/whatsapp-chat/schema.ts`.
