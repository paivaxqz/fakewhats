// Generates public/schema.json (the JSON Schema of a conversation) from the zod schemas.
import { writeFileSync } from "node:fs"
import { z } from "zod"
import { ConversationSchema } from "../registry/fakewhats/whatsapp-chat/schema.ts"

const schema = {
  $id: "https://fakewhats.vercel.app/schema.json",
  title: "fakewhats Conversation",
  ...z.toJSONSchema(ConversationSchema, { io: "input" }),
}

writeFileSync(new URL("../public/schema.json", import.meta.url), JSON.stringify(schema, null, 2) + "\n")
console.log("public/schema.json written")
