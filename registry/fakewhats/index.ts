"use client"

export {
  WhatsAppChat,
  ChatProvider,
  useChat,
  themeStyle,
  MessageList,
  ChatHeader,
  MessageRow,
  Bubble,
  ChatComposer,
  StatusBar,
  PhoneFrame,
  ListSheet,
  FormattedText,
} from "./whatsapp-chat/whatsapp-chat"

export { ConversationSchema } from "./whatsapp-chat/schema"

export type {
  Conversation,
  Contact,
  Message,
  MessageStatus,
  TextMessage,
  ImageMessage,
  AudioMessage,
  ButtonsMessage,
  ListMessage,
} from "./whatsapp-chat/schema"

export type { Variant, Theme, Locale, Wallpaper, TextSize, StatusBarOptions } from "./whatsapp-chat/whatsapp-chat"
