import { z } from "zod"

/**
 * Data format for a fakewhats conversation.
 *
 * This file is the single source of truth: the TypeScript types are inferred
 * from these schemas and the public JSON Schema is generated from them.
 * Every field has a `.describe()` so an AI agent reading the types or the
 * JSON Schema knows exactly what to write.
 */

export const MessageStatusSchema = z
  .enum(["pending", "sent", "delivered", "read"])
  .describe(
    "Delivery ticks for outgoing messages: pending = clock, sent = one grey tick, delivered = two grey ticks, read = two blue ticks. Ignored on incoming messages.",
  )

const BaseMessageSchema = z.object({
  id: z.string().optional().describe("Optional stable id. Not rendered."),
  from: z
    .enum(["me", "them"])
    .describe('"me" = outgoing (right side, green bubble). "them" = the contact (left side).'),
  time: z.string().optional().describe('Time shown inside the bubble, e.g. "10:42" or "9:05 PM".'),
  status: MessageStatusSchema.optional(),
  reply: z
    .object({
      author: z.string().describe('Name shown on the quote, e.g. "You" or the contact name.'),
      text: z.string().describe('Quoted text, e.g. "Photo" when quoting an image.'),
      image: z
        .string()
        .optional()
        .describe(
          "Thumbnail of the quoted photo, shown on the right of the quote (with a camera icon before the text).",
        ),
    })
    .optional()
    .describe("Shows a quoted message at the top of the bubble."),
  reactions: z.array(z.string()).optional().describe('Emoji reactions shown under the bubble, e.g. ["❤️", "😂"].'),
  forwarded: z.boolean().optional().describe('Shows the "Forwarded" label.'),
  edited: z.boolean().optional().describe('Shows the "Edited" label next to the time.'),
  starred: z.boolean().optional().describe("Shows a star next to the time."),
  share: z
    .boolean()
    .optional()
    .describe("Shows the round forward/share button next to the bubble (WhatsApp shows it on links and media)."),
})

export const LinkPreviewSchema = z
  .object({
    title: z.string().describe('Bold first line, usually the page title or the domain, e.g. "example.com".'),
    description: z.string().optional().describe("Grey text under the title (up to 2 lines), e.g. the full URL."),
    domain: z.string().optional().describe('Domain shown with a link icon at the bottom, e.g. "example.com".'),
    image: z.string().optional().describe("Optional thumbnail URL shown on top of the card."),
  })
  .describe("Link preview card drawn at the top of the bubble.")

export const TextMessageSchema = BaseMessageSchema.extend({
  type: z.literal("text").optional().describe("Optional. Messages without a type are text."),
  text: z
    .string()
    .describe(
      "Message text. Supports WhatsApp formatting: *bold*, _italic_, ~strike~, `inline code`, ```monospace```, and links. Use \\n for line breaks.",
    ),
  preview: LinkPreviewSchema.optional(),
})

export const ImageMessageSchema = BaseMessageSchema.extend({
  type: z.literal("image"),
  src: z.string().describe("Image URL (absolute URL, /public path, or data URI)."),
  caption: z.string().optional().describe("Text under the image. Same formatting as text messages."),
  aspectRatio: z
    .number()
    .positive()
    .optional()
    .describe("Width / height. Defaults to 4/3. Use 0.75 for portrait photos."),
})

export const AudioMessageSchema = BaseMessageSchema.extend({
  type: z.literal("audio"),
  duration: z.string().describe('Voice note length, e.g. "0:42".'),
  played: z.boolean().optional().describe("If true the mic icon is blue (listened). Defaults to false."),
  progress: z.number().min(0).max(1).optional().describe("Playback position from 0 to 1. Defaults to 0."),
})

export const ButtonsMessageSchema = BaseMessageSchema.extend({
  type: z.literal("buttons"),
  header: z.string().optional().describe("Bold line above the text."),
  text: z.string().describe("Body text. Same formatting as text messages."),
  footer: z.string().optional().describe("Small grey line under the text."),
  buttons: z.array(z.string()).min(1).max(3).describe("Quick reply button labels (1 to 3), rendered under the bubble."),
})

export const ListMessageSchema = BaseMessageSchema.extend({
  type: z.literal("list"),
  header: z.string().optional().describe("Bold line above the text."),
  text: z.string().describe("Body text. Same formatting as text messages."),
  footer: z.string().optional().describe("Small grey line under the text."),
  buttonLabel: z.string().describe('Label of the button that opens the list, e.g. "See menu".'),
  sections: z
    .array(
      z.object({
        title: z.string().optional(),
        rows: z.array(
          z.object({
            title: z.string(),
            description: z.string().optional(),
          }),
        ),
      }),
    )
    .optional()
    .describe("List options. Only rendered when `open` is true."),
  open: z
    .boolean()
    .optional()
    .describe("If true, renders the options sheet open over the chat (only one list should be open)."),
  selected: z.string().optional().describe("Title of the row shown as selected when the sheet is open."),
})

export const DateMessageSchema = z.object({
  type: z.literal("date"),
  text: z.string().describe('Day separator pill, e.g. "Today", "Yesterday", "12 March 2026".'),
})

export const SystemMessageSchema = z.object({
  type: z.literal("system"),
  text: z
    .string()
    .describe('Centered yellow notice, e.g. the encryption notice or "This chat is with a business account."'),
})

export const UnreadMessageSchema = z.object({
  type: z.literal("unread"),
  text: z.string().describe('Full-width banner, e.g. "6 unread messages".'),
})

export const MessageSchema = z.union([
  TextMessageSchema,
  ImageMessageSchema,
  AudioMessageSchema,
  ButtonsMessageSchema,
  ListMessageSchema,
  DateMessageSchema,
  SystemMessageSchema,
  UnreadMessageSchema,
])

export const ContactSchema = z.object({
  name: z.string().describe("Contact or business name shown in the header."),
  avatar: z.string().optional().describe("Avatar image URL. If omitted, a default silhouette is shown."),
  status: z
    .string()
    .optional()
    .describe('Subtitle under the name, e.g. "online", "typing...", "last seen today at 10:00".'),
  verified: z.boolean().optional().describe("Shows the green verified badge next to the name."),
  story: z
    .enum(["new", "seen"])
    .optional()
    .describe('Status (story) ring around the avatar: "new" = green ring, "seen" = grey ring.'),
  business: z
    .boolean()
    .optional()
    .describe(
      "Business chat header: iOS shows a single call button with a menu arrow instead of the contact/video/call buttons.",
    ),
})

export const ConversationSchema = z
  .object({
    $schema: z.string().optional().describe("Optional JSON Schema URL, for editor autocomplete."),
    contact: ContactSchema,
    messages: z.array(MessageSchema).describe("Messages from top (oldest) to bottom (newest)."),
    pinned: z
      .object({
        text: z.string().describe("Text of the pinned message."),
        total: z
          .number()
          .int()
          .min(1)
          .max(3)
          .optional()
          .describe("How many messages are pinned (1 to 3). Draws that many marks on the left. Default 1."),
      })
      .optional()
      .describe("Pinned message bar under the header."),
    draft: z.string().optional().describe("Text typed in the input bar. When set, the send button replaces the mic."),
    scrollButton: z
      .boolean()
      .optional()
      .describe('Shows the round "scroll to latest message" button above the input bar.'),
    unreadCount: z.number().int().min(0).optional().describe("Unread number shown next to the back arrow."),
  })
  .describe("A fake WhatsApp conversation rendered by <WhatsAppChat data={...} />.")

export type MessageStatus = z.infer<typeof MessageStatusSchema>
export type TextMessage = z.infer<typeof TextMessageSchema>
export type ImageMessage = z.infer<typeof ImageMessageSchema>
export type AudioMessage = z.infer<typeof AudioMessageSchema>
export type ButtonsMessage = z.infer<typeof ButtonsMessageSchema>
export type ListMessage = z.infer<typeof ListMessageSchema>
export type DateMessage = z.infer<typeof DateMessageSchema>
export type SystemMessage = z.infer<typeof SystemMessageSchema>
export type UnreadMessage = z.infer<typeof UnreadMessageSchema>
export type LinkPreview = z.infer<typeof LinkPreviewSchema>
export type Message = z.infer<typeof MessageSchema>
export type BubbleMessage = Exclude<Message, DateMessage | SystemMessage | UnreadMessage>
export type Contact = z.infer<typeof ContactSchema>
export type Conversation = z.infer<typeof ConversationSchema>
