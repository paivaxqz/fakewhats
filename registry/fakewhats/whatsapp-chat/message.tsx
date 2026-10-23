"use client"

import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react"
import { BreakAfterSlashes, FormattedText } from "./format"
import {
  Check,
  Clock,
  DoubleCheck,
  Forward,
  ListIcon,
  MicFilled,
  Play,
  Reply,
  Star,
  Lock,
  LinkIcon,
  ShareArrow,
  TicksIOS,
  CameraFilled,
} from "./icons"
import type {
  AudioMessage,
  BubbleMessage,
  ButtonsMessage,
  ImageMessage,
  LinkPreview,
  ListMessage,
  Message,
  MessageStatus,
  TextMessage,
} from "./schema"
import { cx, useChat } from "./theme"

/* ---------------------------------------------------------------- meta */

function Ticks({ status }: { status?: MessageStatus }) {
  const { variant } = useChat()
  if (!status) return null
  if (variant === "ios" && status !== "pending") {
    return (
      <span className={cx(status === "read" && "text-[var(--wa-tick-read)]")}>
        <TicksIOS double={status !== "sent"} />
      </span>
    )
  }
  if (status === "pending") return <Clock size={13} />
  if (status === "sent") return <Check size={16} />
  return (
    <span className={status === "read" ? "text-[var(--wa-tick-read)]" : undefined}>
      <DoubleCheck size={15} />
    </span>
  )
}

export function MessageMeta({ message, overlay = false }: { message: BubbleMessage; overlay?: boolean }) {
  const { t, variant } = useChat()
  return (
    <span
      className={cx(
        "inline-flex items-center gap-[3px] whitespace-nowrap leading-none",
        variant === "ios" ? "text-[0.726em] tracking-[0.065em]" : "text-[11px]",
        overlay
          ? "text-white/90"
          : message.from === "me"
            ? "text-[var(--wa-meta-out,var(--wa-muted))]"
            : "text-[var(--wa-muted)]",
      )}
    >
      {message.starred && <Star size={10} />}
      {message.edited && <span>{t.edited}</span>}
      {message.time && <span>{message.time}</span>}
      {message.from === "me" && <Ticks status={message.status} />}
    </span>
  )
}

/** Text followed by an invisible copy of the meta, so the real meta never overlaps the last line. */
function TextWithMeta({ text, message }: { text: string; message: BubbleMessage }) {
  const { variant, text: metrics } = useChat()
  const ios = variant === "ios"
  const boxRef = useRef<HTMLDivElement>(null)
  const flowRef = useRef<HTMLSpanElement>(null)
  const markerRef = useRef<HTMLSpanElement>(null)
  const spacerRef = useRef<HTMLSpanElement>(null)
  const [wrapped, setWrapped] = useState(false)

  // After layout:
  // - a bubble with several lines shrinks to its longest line (CSS alone keeps it at full width);
  // - when the time doesn't fit on the last line it gets a line of its own and sits level with
  //   it, instead of dropping below the text.
  useLayoutEffect(() => {
    const box = boxRef.current
    const flow = flowRef.current
    if (!box || !flow) return
    const measure = () => {
      box.style.width = ""
      const range = document.createRange()
      range.selectNodeContents(flow)
      const rects = Array.from(range.getClientRects()).filter((r) => r.width > 0)
      const left = box.getBoundingClientRect().left
      const lines = new Set(rects.map((r) => Math.round(r.top)))
      if (lines.size > 1) box.style.width = `${Math.ceil(Math.max(...rects.map((r) => r.right)) - left)}px`
      const marker = markerRef.current
      const spacer = spacerRef.current
      if (marker && spacer) setWrapped(spacer.offsetTop > marker.offsetTop + 4)
    }
    measure()
    // Re-measure when the row (full chat width) changes, not the bubble we resize ourselves.
    const row = box.closest("[data-wa-row]")
    if (!row) return
    const observer = new ResizeObserver(measure)
    observer.observe(row)
    return () => observer.disconnect()
  }, [text])

  // When the time sits on a line of its own, it hugs the bottom of the bubble instead.
  const drop = wrapped ? (ios ? 0.5 : -2.5) : metrics.timeDrop
  const wrappedPull = ios ? -(metrics.padBottom - 0.5) : -metrics.padBottom
  return (
    <div
      ref={boxRef}
      className="relative whitespace-pre-wrap break-words"
      style={wrapped ? { marginBottom: wrappedPull } : undefined}
    >
      <span ref={flowRef}>
        <FormattedText text={text} />
        <span ref={markerRef} />
        <span
          ref={spacerRef}
          className={cx("invisible inline-block select-none", ios ? "ml-[15px]" : "ml-[12.5px]")}
          aria-hidden
        >
          <MessageMeta message={message} />
        </span>
      </span>
      <span className="absolute right-0" style={{ bottom: -drop }}>
        <MessageMeta message={message} />
      </span>
    </div>
  )
}

/* --------------------------------------------------------------- tails */

function Tail({ side }: { side: "in" | "out" }) {
  const { variant } = useChat()
  const color = side === "in" ? "var(--wa-in)" : "var(--wa-out)"
  if (variant === "ios") {
    return (
      <svg
        width="20"
        height="18"
        viewBox="0 0 20 18"
        className={cx("absolute bottom-0", side === "out" ? "-right-[6px]" : "-left-[6px]")}
        style={side === "in" ? { transform: "scaleX(-1)" } : undefined}
        aria-hidden
      >
        {/* Fills the bubble corner, flares out to a point and leaves the little notch WhatsApp has. */}
        <path d="M14 0C14 8 15.6 14.2 20 18 16.2 18 12.4 16.8 7 14.6 5.6 16.8 3.4 18 0 18V0Z" fill={color} />
      </svg>
    )
  }
  return (
    <svg
      width="7"
      height="10"
      viewBox="0 0 7 10"
      className={cx("absolute top-0", side === "in" ? "-left-[6.5px]" : "-right-[6.5px]")}
      style={side === "out" ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden
    >
      {/* Measured: 6.5×9.5dp, rounded tip, concave lower edge. */}
      <path d="M7 0H1.3C.3 0-.2 1.2.5 2 2.8 4.3 4.9 6.8 7 9.5Z" fill={color} />
    </svg>
  )
}

/* -------------------------------------------------------------- bubble */

export function Bubble({
  message,
  tail = false,
  className,
  style,
  children,
}: {
  message: BubbleMessage
  tail?: boolean
  className?: string
  style?: CSSProperties
  children: ReactNode
}) {
  const { variant } = useChat()
  const side = message.from === "me" ? "out" : "in"
  // The iOS tail keeps the full radius: it draws its own corner.
  const corner = variant === "ios" ? undefined : side === "in" ? "rounded-tl-none" : "rounded-tr-none"
  return (
    <div
      className={cx(
        "relative text-[var(--wa-fg)]",
        variant === "ios"
          ? "rounded-[20px] shadow-[0_0.5px_0.5px_rgba(0,0,0,0.1)]"
          : "rounded-[7.5px] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]",
        side === "in" ? "bg-[var(--wa-in)]" : "bg-[var(--wa-out)]",
        tail && corner,
        className,
      )}
      style={style}
    >
      {tail && <Tail side={side} />}
      {children}
    </div>
  )
}

function Quote({ author, text, image, side }: { author: string; text: string; image?: string; side: "in" | "out" }) {
  const { variant, theme, t } = useChat()
  if (variant === "ios") {
    // iOS 26: a large card inset in the bubble, teal for the contact, purple for yourself.
    const mine = author === t.you
    const color = mine ? (theme === "dark" ? "#a693f7" : "#7c5ce0") : theme === "dark" ? "#42c7b8" : "#0a8f7f"
    return (
      <div
        className={cx(
          "flex min-h-[64px] overflow-hidden rounded-[15px]",
          side === "in" ? "bg-[var(--wa-quote-in)]" : "bg-[var(--wa-quote-out)]",
        )}
      >
        <span className="w-[3.5px] shrink-0" style={{ background: color }} />
        <div className="min-w-0 flex-1 pb-[12.5px] pl-[11.5px] pr-[10px] pt-[11.6px]">
          <div className="mb-[3.6px] truncate text-[0.893em] font-semibold leading-[19px]" style={{ color }}>
            {author}
          </div>
          <div className="flex items-center gap-[5px] text-[0.79em] leading-[1.3] text-[var(--wa-quote-text,var(--wa-muted))]">
            {image && <CameraFilled size={17} />}
            <span className="line-clamp-2">{text}</span>
          </div>
        </div>
        {image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt="" className="w-[52px] shrink-0 object-cover" />
        )}
      </div>
    )
  }
  // Android: card inset in the bubble, green for yourself, purple for the contact.
  const mine = author === t.you
  const color = mine ? "var(--wa-quote-you,#06cf9c)" : "var(--wa-quote-contact,#a690ff)"
  // The bar is saturated; the name is a pale tint of it.
  const nameColor = mine
    ? "var(--wa-quote-you-name,var(--wa-quote-you,#06cf9c))"
    : "var(--wa-quote-contact-name,var(--wa-quote-contact,#a690ff))"
  return (
    <div
      className={cx(
        "flex overflow-hidden rounded-[7px]",
        side === "in" ? "bg-[var(--wa-quote-in)]" : "bg-[var(--wa-quote-out)]",
      )}
    >
      <span className="w-[4.5px] shrink-0" style={{ background: color }} />
      <div className="min-w-0 flex-1 py-[6.75px] pl-[8px] pr-[10px]">
        <div className="truncate text-[11.8px] font-medium leading-[16px]" style={{ color: nameColor }}>
          {author}
        </div>
        <div className="flex items-center gap-[5px] text-[12.45px] leading-[15px] text-[var(--wa-quote-text,var(--wa-muted))]">
          {image && <CameraFilled size={15} />}
          <span className="line-clamp-2">{text}</span>
        </div>
      </div>
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="h-[47px] w-[46px] shrink-0 object-cover" />
      )}
    </div>
  )
}

function Forwarded() {
  const { t } = useChat()
  return (
    <div className="mb-0.5 flex items-center gap-1 text-[12px] italic text-[var(--wa-muted)]">
      <Forward size={13} />
      {t.forwarded}
    </div>
  )
}

function Extras({ message, skipReply = false }: { message: BubbleMessage; skipReply?: boolean }) {
  const side = message.from === "me" ? "out" : "in"
  return (
    <>
      {message.forwarded && <Forwarded />}
      {message.reply && !skipReply && (
        <Quote author={message.reply.author} text={message.reply.text} image={message.reply.image} side={side} />
      )}
    </>
  )
}

/* ------------------------------------------------------- message kinds */

/** Round forward button WhatsApp draws next to links and media. Centered on its positioned parent. */
export function ShareButton({ inset = 0, side = "in" }: { inset?: number; side?: "in" | "out" }) {
  const offset = `calc(100% + ${9.5 + inset}px)`
  return (
    <span
      className="absolute top-1/2 flex h-[32px] w-[32px] -translate-y-1/2 items-center justify-center rounded-full bg-[var(--wa-share)] text-white"
      style={side === "in" ? { left: offset } : { right: offset }}
    >
      <ShareArrow size={17} />
    </span>
  )
}

export function LinkPreviewCard({
  preview,
  share,
  side = "in",
}: {
  preview: LinkPreview
  share?: boolean
  side?: "in" | "out"
}) {
  const { variant } = useChat()
  const ios = variant === "ios"
  return (
    <div
      className={cx(
        "relative bg-[var(--wa-preview)]",
        ios ? "rounded-[17px] px-[9px] pb-[8px] pt-[10px]" : "rounded-[6px] px-[8px] pb-[8px] pt-[7px]",
      )}
    >
      {preview.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={preview.image}
          alt=""
          className={cx(
            "-mx-[9px] -mt-[10px] mb-[8px] block aspect-[1.91] w-[calc(100%+18px)] max-w-none object-cover",
            ios ? "rounded-t-[17px]" : "rounded-t-[6px]",
          )}
        />
      )}
      <div
        className={cx("truncate font-semibold", ios ? "text-[0.75em] leading-[1.45]" : "text-[14px] leading-[19px]")}
      >
        {preview.title}
      </div>
      {preview.description && (
        <div
          className={cx(
            "mt-[3px] line-clamp-2 text-[var(--wa-muted)] [overflow-wrap:anywhere]",
            ios ? "text-[0.74em] leading-[1.35]" : "text-[13px] leading-[16px]",
          )}
        >
          <BreakAfterSlashes text={preview.description} />
        </div>
      )}
      {preview.domain && (
        <div
          className={cx(
            "flex items-center gap-[7px] opacity-90",
            ios ? "mt-[12px] text-[0.725em] leading-[1.4]" : "mt-[8px] text-[13px] text-[var(--wa-muted)]",
          )}
        >
          <LinkIcon size={ios ? 12 : 13} className="shrink-0 -rotate-45" />
          <span className="truncate">{preview.domain}</span>
        </div>
      )}
      {share && <ShareButton inset={3} side={side} />}
    </div>
  )
}

function TextBody({ message, text }: { message: TextMessage; text: string }) {
  const { variant, text: metrics } = useChat()
  const ios = variant === "ios"
  return (
    <>
      {message.reply && (
        <div className={ios ? "p-[3.5px] pb-0" : "p-[3px] pb-0"}>
          <Quote
            author={message.reply.author}
            text={message.reply.text}
            image={message.reply.image}
            side={message.from === "me" ? "out" : "in"}
          />
        </div>
      )}
      {message.preview && (
        <div className="p-[3px] pb-0">
          <LinkPreviewCard
            preview={message.preview}
            share={message.share}
            side={message.from === "me" ? "out" : "in"}
          />
        </div>
      )}
      <div
        className={ios ? "px-[12px]" : "pl-[9px] pr-[7px]"}
        style={{
          paddingTop: message.preview || message.reply ? (ios ? 5 : 3) : metrics.padTop,
          paddingBottom: metrics.padBottom,
        }}
      >
        <Extras message={message} skipReply />
        <TextWithMeta text={text} message={message} />
      </div>
    </>
  )
}

function ImageBody({ message }: { message: ImageMessage }) {
  const { variant } = useChat()
  return (
    <div className="w-[260px] max-w-full p-[3px]">
      {(message.forwarded || message.reply) && (
        <div className="px-[6px] pt-[3px]">
          <Extras message={message} />
        </div>
      )}
      <div className={cx("relative overflow-hidden", variant === "ios" ? "rounded-[15px]" : "rounded-[6px]")}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={message.src}
          alt={message.caption ?? ""}
          className="block w-full object-cover"
          style={{ aspectRatio: message.aspectRatio ?? 4 / 3 }}
        />
        {!message.caption && (
          <span className="absolute bottom-0 right-0 rounded-tl-lg bg-gradient-to-t from-black/50 to-transparent px-2 pb-[5px] pt-3">
            <MessageMeta message={message} overlay />
          </span>
        )}
      </div>
      {message.caption && (
        <div className="px-[6px] pb-[3px] pt-[5px]">
          <TextWithMeta text={message.caption} message={message} />
        </div>
      )}
    </div>
  )
}

function waveform(seed: string, count = 34) {
  let h = 2166136261
  for (const ch of seed) h = Math.imul(h ^ ch.charCodeAt(0), 16777619)
  return Array.from({ length: count }, (_, i) => {
    h = Math.imul(h ^ (i + 1), 16777619)
    const r = ((h >>> 0) % 1000) / 1000
    return 0.2 + 0.8 * Math.abs(Math.sin(i * 0.45 + r * 2)) * (0.45 + r * 0.55)
  })
}

function AudioBody({ message }: { message: AudioMessage }) {
  const bars = waveform(`${message.id ?? ""}${message.duration}${message.time ?? ""}`)
  const progress = message.progress ?? 0
  const micColor = message.played ? "var(--wa-tick-read)" : "var(--wa-accent)"
  return (
    <div className="w-[270px] max-w-full px-[9px] pb-[6px] pt-[8px]">
      <Extras message={message} />
      <div className="flex items-center gap-2.5">
        <div className="relative shrink-0">
          <Play size={26} className="text-[var(--wa-icon)]" />
        </div>
        <div className="relative flex h-7 flex-1 items-center gap-[2px]">
          {bars.map((v, i) => (
            <span
              key={i}
              className="w-[3px] shrink-0 rounded-full"
              style={{
                height: `${Math.round(v * 24)}px`,
                background: i / bars.length < progress ? "var(--wa-tick-read)" : "var(--wa-muted)",
                opacity: i / bars.length < progress ? 1 : 0.55,
              }}
            />
          ))}
          <span
            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full"
            style={{ left: `calc(${progress * 100}% - 6px)`, background: micColor }}
          />
        </div>
        <MicFilled size={18} style={{ color: micColor }} />
      </div>
      <div className="mt-0.5 flex items-center justify-between pl-[36px]">
        <span className="text-[11px] text-[var(--wa-muted)]">{message.duration}</span>
        <MessageMeta message={message} />
      </div>
    </div>
  )
}

function InteractiveText({ message }: { message: ButtonsMessage | ListMessage }) {
  return (
    <div className="px-[9px] pb-[6px] pt-[6px]">
      <Extras message={message} />
      {message.header && <div className="mb-0.5 font-semibold">{message.header}</div>}
      {message.footer ? (
        <>
          <div className="whitespace-pre-wrap break-words">
            <FormattedText text={message.text} />
          </div>
          <div className="mt-1 text-[12.5px] text-[var(--wa-muted)]">
            <TextWithMeta text={message.footer} message={message} />
          </div>
        </>
      ) : (
        <TextWithMeta text={message.text} message={message} />
      )}
    </div>
  )
}

function ButtonsBody({ message, tail }: { message: ButtonsMessage; tail: boolean }) {
  return (
    <div className="flex min-w-[220px] flex-col gap-[2px]">
      <Bubble message={message} tail={tail}>
        <InteractiveText message={message} />
      </Bubble>
      {message.buttons.map((label, i) => (
        <Bubble key={i} message={message}>
          <div className="flex items-center justify-center gap-1.5 px-3 py-[9px] text-[14px] font-medium text-[var(--wa-button,var(--wa-link))]">
            <Reply size={15} />
            {label}
          </div>
        </Bubble>
      ))}
    </div>
  )
}

function ListBody({ message, tail }: { message: ListMessage; tail: boolean }) {
  return (
    <Bubble message={message} tail={tail} className="min-w-[220px]">
      <InteractiveText message={message} />
      <div className="flex items-center justify-center gap-1.5 border-t border-[var(--wa-divider)] px-3 py-[9px] text-[14px] font-medium text-[var(--wa-button,var(--wa-link))]">
        <ListIcon size={16} />
        {message.buttonLabel}
      </div>
    </Bubble>
  )
}

/* ----------------------------------------------------- centered notices */

export function DateSeparator({ text }: { text: string }) {
  const { variant } = useChat()
  if (variant === "ios") {
    // iOS 26: wide white pill, bold black text, no uppercase.
    return (
      <div className="my-[12px] flex justify-center">
        <span className="flex h-[18.5px] items-center rounded-full bg-[var(--wa-pill)] px-[36px] text-[13px] font-semibold text-[var(--wa-date-fg,var(--wa-fg))]">
          {text}
        </span>
      </div>
    )
  }
  return (
    <div className="my-2 flex justify-center">
      <span className="rounded-[8px] bg-[var(--wa-pill)] px-3 py-[5px] text-[12px] font-medium uppercase tracking-wide text-[var(--wa-muted)] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]">
        {text}
      </span>
    </div>
  )
}

export function SystemNotice({ text }: { text: string }) {
  return (
    <div className="my-2 flex justify-center px-6">
      <span className="rounded-[8px] bg-[var(--wa-system)] px-3 py-[6px] text-center text-[12px] leading-[1.35] text-[var(--wa-system-fg)] shadow-[0_1px_0.5px_rgba(11,20,26,0.13)]">
        {/encrypt|criptograf|cifrad/i.test(text) && <Lock size={11} className="mr-1 inline -translate-y-px" />}
        {text}
      </span>
    </div>
  )
}

/** Full-width "N unread messages" bar. Marked with data-unread so the list can scroll to it. */
export function UnreadBanner({ text }: { text: string }) {
  const { variant } = useChat()
  return (
    <div
      data-unread
      className={cx(
        "flex items-center justify-center bg-[var(--wa-unread-bg)] text-[var(--wa-unread-fg)]",
        variant === "ios"
          ? // As the last row it sits flush on the input bar, as WhatsApp shows it.
            "h-[33px] border-t-[0.5px] border-[var(--wa-unread-line,transparent)] text-[14.5px] font-semibold last:-mb-[10px]"
          : "my-2 h-[28px] text-[13px] font-medium uppercase",
      )}
    >
      {text}
    </div>
  )
}

/* ----------------------------------------------------------------- row */

function Reactions({ reactions, side }: { reactions: string[]; side: "in" | "out" }) {
  return (
    <div
      className={cx(
        "absolute -bottom-[18px] z-10 flex items-center gap-0.5 rounded-full border-2 border-[var(--wa-bg)] bg-[var(--wa-pill)] px-1.5 py-[1px] text-[13px] leading-[18px] shadow-sm",
        side === "in" ? "left-2" : "right-2",
      )}
    >
      {reactions.slice(0, 3).map((r, i) => (
        <span key={i}>{r}</span>
      ))}
      {reactions.length > 1 && <span className="ml-0.5 text-[11px] text-[var(--wa-muted)]">{reactions.length}</span>}
    </div>
  )
}

/**
 * One message, positioned on its side. `first`/`last` say where it sits in a
 * run of consecutive messages from the same sender (tails and spacing depend on it).
 */
export function MessageRow({
  message,
  first = true,
  last = true,
}: {
  message: Message
  first?: boolean
  last?: boolean
}) {
  const { variant, text: metrics } = useChat()

  if (message.type === "date") return <DateSeparator text={message.text} />
  if (message.type === "system") return <SystemNotice text={message.text} />
  if (message.type === "unread") return <UnreadBanner text={message.text} />

  const side = message.from === "me" ? "out" : "in"
  const ios = variant === "ios"
  const tail = ios ? last : first
  const hasReactions = !!message.reactions?.length
  const hasPreview = message.type !== "image" && message.type !== "audio" && "preview" in message && !!message.preview

  let body: ReactNode
  switch (message.type) {
    case "image":
      body = (
        <Bubble message={message} tail={tail}>
          <ImageBody message={message} />
        </Bubble>
      )
      break
    case "audio":
      body = (
        <Bubble message={message} tail={tail}>
          <AudioBody message={message} />
        </Bubble>
      )
      break
    case "buttons":
      body = <ButtonsBody message={message} tail={tail} />
      break
    case "list":
      body = <ListBody message={message} tail={tail} />
      break
    default:
      body = (
        <Bubble message={message} tail={tail}>
          <TextBody message={message} text={message.text} />
        </Bubble>
      )
  }

  return (
    <div
      data-wa-row
      className={cx(
        "flex",
        side === "in" ? "justify-start" : "justify-end",
        ios ? (first ? "mt-[13.5px]" : "mt-[4.5px]") : first ? "mt-[10px]" : "mt-[2.5px]",
        hasReactions && "mb-[18px]",
        ios ? "px-[16.5px]" : "px-[16px]",
      )}
    >
      <div
        // iOS bubbles are at most the screen width minus 108pt (the row already has 2×16.5pt padding).
        className={cx("relative", ios ? "max-w-[calc(100%-75px)] tracking-[-0.025em]" : "max-w-[calc(100%-37px)]")}
        style={{ fontSize: metrics.size, lineHeight: `${metrics.line}px`, fontWeight: "var(--wa-text-weight, 400)" }}
      >
        {body}
        {message.share && !hasPreview && <ShareButton side={side} />}
        {hasReactions && <Reactions reactions={message.reactions!} side={side} />}
      </div>
    </div>
  )
}
