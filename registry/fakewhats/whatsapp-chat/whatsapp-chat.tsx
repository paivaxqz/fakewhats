"use client"

import { useLayoutEffect, useRef, useState, type CSSProperties } from "react"
import {
  ChatComposer,
  ChatHeader,
  HomeIndicator,
  ListSheet,
  NavBar,
  PhoneFrame,
  PinnedBar,
  ScrollDownButton,
  StatusBar,
  type StatusBarOptions,
} from "./chrome"
import { MessageRow } from "./message"
import type { Conversation, ListMessage, Message } from "./schema"
import {
  ChatProvider,
  cx,
  useChat,
  type Locale,
  type Theme,
  type Variant,
  type TextSize,
  type Wallpaper,
} from "./theme"
import { DoodleWallpaper } from "./wallpaper"

export type WhatsAppChatProps = {
  /** The conversation to render. See `Conversation` in ./schema. */
  data: Conversation
  /** Look of the app. Default "ios". */
  variant?: Variant
  /** Color scheme. Default "light". */
  theme?: Theme
  /** Language of the built-in labels ("Message", "Forwarded"...). Default "en". */
  locale?: Locale
  /** Chat background: "doodle" (default), "none" for a plain color, or an image URL. */
  wallpaper?: Wallpaper
  /** WhatsApp's chat font size setting (Settings → Chats → Font size). Default "medium". */
  textSize?: TextSize
  /** Draw a phone around the chat (fixed size: 390×844 on iOS, 396×860 on Android). Default false. */
  frame?: boolean
  /** Show the phone status bar. `true` or options. Default: shown when `frame` is on. */
  statusBar?: boolean | StatusBarOptions
  className?: string
  style?: CSSProperties
}

function sender(m: Message) {
  return m.type === "date" || m.type === "system" || m.type === "unread" ? null : m.from
}

/**
 * The scrollable list of messages, grouped into runs by sender. Starts scrolled to the bottom.
 * `topInset` is the height of a header drawn over the list (iOS), so content can scroll under it.
 */
export function MessageList({ messages, topInset = 0 }: { messages: Message[]; topInset?: number }) {
  const { variant, wallpaper } = useChat()
  const ref = useRef<HTMLDivElement>(null)

  // Like WhatsApp, open the chat at the "unread messages" banner when there is one.
  useLayoutEffect(() => {
    const list = ref.current
    const banner = list?.querySelector<HTMLElement>("[data-unread]")
    if (!list || !banner) return
    list.scrollTop += banner.getBoundingClientRect().top - list.getBoundingClientRect().top - topInset
  }, [messages, topInset])

  return (
    <div className="relative flex min-h-0 flex-1 flex-col bg-[var(--wa-bg)]">
      {wallpaper === "doodle" ? (
        <DoodleWallpaper />
      ) : wallpaper !== "none" ? (
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${JSON.stringify(wallpaper)})` }}
        />
      ) : null}
      <div ref={ref} className="relative flex min-h-0 flex-1 flex-col-reverse overflow-y-auto [scrollbar-width:none]">
        <div className={cx(variant === "ios" ? "pb-[10px] pt-2" : "pb-[4px] pt-1")} style={{ marginTop: topInset }}>
          {messages.map((m, i) => {
            const from = sender(m)
            const first = from === null || sender(messages[i - 1] ?? m) !== from || i === 0
            const last = from === null || i === messages.length - 1 || sender(messages[i + 1]) !== from
            return <MessageRow key={("id" in m && m.id) || i} message={m} first={first} last={last} />
          })}
        </div>
      </div>
    </div>
  )
}

function ChatScreen({
  data,
  statusBar,
  framed,
}: {
  data: Conversation
  statusBar?: StatusBarOptions | null
  framed?: boolean
}) {
  const { variant, wallpaper } = useChat()
  const openList = data.messages.find((m): m is ListMessage => m.type === "list" && !!m.open)
  const pinned = data.pinned && <PinnedBar text={data.pinned.text} total={data.pinned.total} />

  // The iOS header floats over the messages; measure it so the list knows how much is covered.
  const topRef = useRef<HTMLDivElement>(null)
  const [topInset, setTopInset] = useState(0)
  useLayoutEffect(() => {
    const el = topRef.current
    if (!el) return
    const update = () => setTopInset(el.offsetHeight)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    // @container lets the iOS header use 20pt margins on wide (414pt+) phones, like iOS does.
    <div className="@container relative flex h-full min-h-0 flex-col">
      {variant === "ios" ? (
        // iOS 26: status bar, header and pinned bar are one frosted-glass layer and
        // the messages scroll underneath it, tinting it with whatever is behind.
        <div className="relative flex min-h-0 flex-1 flex-col">
          <MessageList messages={data.messages} topInset={topInset} />
          {data.scrollButton && <ScrollDownButton />}
          <div
            ref={topRef}
            className={cx(
              "absolute inset-x-0 top-0 z-10 [background:var(--wa-header)] [backdrop-filter:blur(24px)_saturate(1.4)]",
              wallpaper === "none" && "border-b-[0.5px] border-[var(--wa-divider)]",
            )}
          >
            {statusBar && <StatusBar {...statusBar} />}
            <ChatHeader contact={data.contact} unreadCount={data.unreadCount} />
            {pinned || <div className="h-[10px]" />}
          </div>
        </div>
      ) : (
        <>
          {statusBar && <StatusBar {...statusBar} />}
          <ChatHeader contact={data.contact} unreadCount={data.unreadCount} />
          {pinned}
          <MessageList messages={data.messages} />
        </>
      )}
      <ChatComposer draft={data.draft} safeArea={framed || !!statusBar} />
      {variant === "ios" && (framed || !!statusBar) && statusBar?.homeIndicator !== false && <HomeIndicator />}
      {variant === "android" && !!statusBar && statusBar.navBar !== false && <NavBar />}
      {openList && <ListSheet message={openList} />}
    </div>
  )
}

/**
 * A static, fake WhatsApp chat screen.
 *
 * ```tsx
 * <WhatsAppChat
 *   variant="android"
 *   theme="dark"
 *   frame
 *   data={{
 *     contact: { name: "Ana", status: "online" },
 *     messages: [
 *       { from: "them", text: "Hi! 👋", time: "10:41" },
 *       { from: "me", text: "Hey *Ana*", time: "10:42", status: "read" },
 *     ],
 *   }}
 * />
 * ```
 */
export function WhatsAppChat({
  data,
  variant = "ios",
  theme = "light",
  locale = "en",
  wallpaper = "doodle",
  textSize = "medium",
  frame = false,
  statusBar,
  className,
  style,
}: WhatsAppChatProps) {
  const showStatusBar = statusBar ?? frame
  const statusBarOptions = showStatusBar ? (showStatusBar === true ? {} : showStatusBar) : null

  return (
    <ChatProvider
      variant={variant}
      theme={theme}
      locale={locale}
      wallpaper={wallpaper}
      textSize={textSize}
      className={cx(frame ? "inline-block" : "h-full w-full overflow-hidden", className)}
      style={style}
    >
      {frame ? (
        <PhoneFrame>
          <ChatScreen data={data} statusBar={statusBarOptions} framed />
        </PhoneFrame>
      ) : (
        <ChatScreen data={data} statusBar={statusBarOptions} />
      )}
    </ChatProvider>
  )
}

/* Building blocks, for composing your own screen. */
export { ChatProvider, useChat, themeStyle } from "./theme"
export {
  ChatHeader,
  ChatComposer,
  StatusBar,
  PhoneFrame,
  ListSheet,
  ContactAvatar,
  PinnedBar,
  ScrollDownButton,
  HomeIndicator,
} from "./chrome"
export { MessageRow, Bubble, MessageMeta, DateSeparator, SystemNotice, UnreadBanner, LinkPreviewCard } from "./message"
export { FormattedText } from "./format"
export type { StatusBarOptions } from "./chrome"
export type { Variant, Theme, Locale, Wallpaper, TextSize } from "./theme"
export { DoodleWallpaper } from "./wallpaper"
export type * from "./schema"
