import friends from "@/examples/friends.json"
import groupTrip from "@/examples/group-trip.json"
import pizzaMenu from "@/examples/pizza-menu.json"
import sneakerStore from "@/examples/sneaker-store.json"
import supportBot from "@/examples/support-bot.json"
import { ConversationSchema, type Conversation } from "@/registry/fakewhats/whatsapp-chat/schema"

export type Example = {
  id: string
  label: string
  data: Conversation
  /** The file as written, for the playground editor (parsing reorders keys). */
  json: unknown
}

export const examples: Example[] = [
  { id: "support-bot", label: "AI support bot", data: ConversationSchema.parse(supportBot), json: supportBot },
  { id: "pizza-menu", label: "Pizza menu (open list)", data: ConversationSchema.parse(pizzaMenu), json: pizzaMenu },
  { id: "sneaker-store", label: "Store with photo + voice note", data: ConversationSchema.parse(sneakerStore), json: sneakerStore },
  { id: "friends", label: "Friends chat", data: ConversationSchema.parse(friends), json: friends },
  { id: "group-trip", label: "Link preview + pinned + unread", data: ConversationSchema.parse(groupTrip), json: groupTrip },
]

export const SITE_URL = "https://fakewhats.vercel.app"
export const REPO_URL = "https://github.com/paivaxqz/fakewhats"
export const INSTALL_CMD = `npx shadcn@latest add ${SITE_URL}/r/whatsapp-chat.json`
