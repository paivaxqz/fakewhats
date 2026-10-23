"use client"

import type { ReactNode } from "react"
import {
  BatteryIOS,
  CameraIOS,
  ChevronDown,
  ChevronLeft,
  ContactCard,
  ArrowBackAndroid,
  CallAndroid,
  CaretDown,
  DotsAndroid,
  StickerSmile,
  PaperclipAndroid,
  CameraAndroid,
  NavRecents,
  NavHome,
  NavBack,
  BatteryAndroid,
  MicFilled,
  Moon,
  PersonFilled,
  PhoneOutline,
  Pin,
  Plus,
  Send,
  Signal,
  SignalIOS,
  StickerIOS,
  Verified,
  VideoIOS,
  WifiIOS,
  SignalDualIOS,
} from "./icons"
import type { Contact, ListMessage } from "./schema"
import { DoodleWallpaper } from "./wallpaper"
import { cx, useChat } from "./theme"

/* -------------------------------------------------------------- avatar */

export function ContactAvatar({ contact, size }: { contact: Contact; size: number }) {
  if (!contact.avatar) {
    return (
      <span
        className="flex shrink-0 items-center justify-center rounded-full bg-[var(--wa-avatar-bg)] text-[var(--wa-avatar-fg)]"
        style={{ width: size, height: size }}
      >
        <PersonFilled size={Math.round(size * 0.42)} />
      </span>
    )
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={contact.avatar}
      alt=""
      width={size}
      height={size}
      className="shrink-0 rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  )
}

/** iOS header avatar: 40pt, or 37pt inside a 2pt status ring when `contact.story` is set. */
function StoryAvatar({ contact }: { contact: Contact }) {
  if (!contact.story) return <ContactAvatar contact={contact} size={40} />
  const ring = contact.story === "new" ? "var(--wa-story-new,#21c063)" : "var(--wa-story-seen,#8e8e93)"
  return (
    <span
      className="flex h-[45px] w-[45px] items-center justify-center rounded-full"
      style={{ boxShadow: `inset 0 0 0 2px ${ring}` }}
    >
      <ContactAvatar contact={contact} size={37} />
    </span>
  )
}

/* -------------------------------------------------------------- header */

/** Round "liquid glass" button used by the iOS header. */
function Glass({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span
      className={cx(
        "flex h-[43px] shrink-0 items-center justify-center rounded-full text-[var(--wa-icon)]",
        "shadow-[inset_0_1px_0_var(--wa-glass-edge),0_0_0_1px_var(--wa-glass-ring,rgba(0,0,0,0.3)),0_6px_16px_rgba(0,0,0,0.12)]",
        className,
      )}
    >
      {children}
    </span>
  )
}

export function ChatHeader({ contact, unreadCount }: { contact: Contact; unreadCount?: number }) {
  const { variant } = useChat()

  if (variant === "ios") {
    return (
      <div className="flex h-[49px] shrink-0 items-start gap-[8px] px-[16px] pt-[4.5px] @min-[410px]:px-[20px]">
        <Glass className={cx("bg-[var(--wa-glass)]", unreadCount ? "pl-[1px] pr-[5.5px]" : "w-[43px]")}>
          <ChevronLeft
            size={unreadCount ? 24 : 28}
            strokeWidth={2.3}
            className={unreadCount ? "-ml-[1.2px]" : "-ml-[2px]"}
          />
          {unreadCount ? <span className="-ml-[3.5px] text-[16.5px]">{unreadCount}</span> : null}
        </Glass>
        <span className={cx("shrink-0", contact.story ? "-ml-[2px] -mt-[0.5px]" : "pt-[2px]")}>
          <StoryAvatar contact={contact} />
        </span>
        <div
          className={cx(
            "flex min-w-0 flex-1 flex-col justify-center self-stretch pb-[2px] leading-tight",
            contact.story && "-ml-[3px]",
          )}
        >
          <div className="flex items-center gap-1">
            <span className="truncate text-[15.5px] font-semibold text-[var(--wa-header-fg)]">{contact.name}</span>
            {contact.verified && <Verified size={15} className="shrink-0" />}
          </div>
          {contact.status && (
            // Clipped without an ellipsis, like WhatsApp.
            <div className="overflow-hidden whitespace-nowrap text-[12px] text-[var(--wa-header-muted)]">
              {contact.status}
            </div>
          )}
        </div>
        {contact.business ? (
          <Glass className="w-[51px] gap-[1px] bg-[var(--wa-glass-strong)] pl-[3px]">
            <PhoneOutline size={22} />
            <ChevronDown size={12} strokeWidth={2.6} />
          </Glass>
        ) : (
          <Glass className="ml-[3px] w-[153px] bg-[var(--wa-glass-strong)]">
            <span className="flex w-[51px] justify-center pr-[4px]">
              <ContactCard size={28.5} />
            </span>
            <span className="flex w-[51px] justify-center pl-[2px]">
              <VideoIOS size={29.5} />
            </span>
            <span className="flex w-[51px] justify-center">
              <PhoneOutline size={27} />
            </span>
          </Glass>
        )}
      </div>
    )
  }

  // Android (measured, dp): back arrow at 15, 34dp avatar at 46.5, name at 91.5;
  // call button with a menu caret and the overflow dots on the right.
  return (
    <div className="flex h-[56px] shrink-0 items-center bg-[var(--wa-header)] pl-[11.5px] pr-[12px] text-[var(--wa-header-fg)]">
      <ArrowBackAndroid size={21} />
      <span className="ml-[14px]">
        <ContactAvatar contact={contact} size={34} />
      </span>
      <div className="ml-[11.5px] min-w-0 flex-1 leading-tight">
        <div className="flex items-center gap-1">
          <span className="truncate text-[15px]">{contact.name}</span>
          {contact.verified && <Verified size={15} className="shrink-0" />}
        </div>
        {contact.status && <div className="truncate text-[13px] text-[var(--wa-header-muted)]">{contact.status}</div>}
      </div>
      <span className="flex items-center">
        <CallAndroid size={20} />
        <span className="ml-[9px]">
          <CaretDown size={8} />
        </span>
      </span>
      <span className="ml-[13px]">
        <DotsAndroid size={24} />
      </span>
    </div>
  )
}

/* ---------------------------------------------------------- pinned bar */

export function PinnedBar({ text, total = 1 }: { text: string; total?: number }) {
  const { variant } = useChat()
  const marks = Math.max(1, Math.min(3, total))
  const ios = variant === "ios"
  return (
    <div
      className={cx(
        "relative flex shrink-0 items-center",
        ios
          ? "pb-[9px] pl-[16.5px] pr-4 pt-[20px] @min-[410px]:pl-[20px]"
          : "border-t border-[var(--wa-divider)] bg-[var(--wa-header)] px-4 py-[7px]",
      )}
    >
      {marks > 1 && (
        <span className={cx("absolute flex flex-col", ios ? "left-[10.5px] gap-[2.5px]" : "left-[6px] gap-[3px]")}>
          {Array.from({ length: marks }, (_, i) => (
            <span
              key={i}
              className={cx("rounded-full bg-[var(--wa-header-fg)]", ios ? "h-[9px] w-[2.75px]" : "h-[7.5px] w-[2px]")}
              style={{ opacity: i === marks - 1 ? 1 : 0.35 }}
            />
          ))}
        </span>
      )}
      <span
        className={cx(
          "flex shrink-0 items-center justify-center bg-[var(--wa-pin-box)] text-[var(--wa-pin-icon)]",
          ios
            ? "h-[30px] w-[30px] rounded-[8px] @min-[410px]:h-[32px] @min-[410px]:w-[32px]"
            : "h-[30px] w-[30px] rounded-[6px]",
        )}
      >
        <Pin size={17} />
      </span>
      <span
        className={cx(
          "min-w-0 flex-1 truncate text-[var(--wa-header-fg)]",
          ios ? "ml-[13px] text-[14.5px]" : "ml-3 text-[14.5px]",
        )}
      >
        {text}
      </span>
    </div>
  )
}

/* ------------------------------------------------------------ composer */

/** `safeArea` adds the iPhone home-indicator space under the input (on when the status bar is shown). */
export function ChatComposer({ draft, safeArea = false }: { draft?: string; safeArea?: boolean }) {
  const { variant, t, wallpaper } = useChat()
  const text = draft ? (
    <span className="truncate text-[var(--wa-fg)]">{draft}</span>
  ) : (
    <span className="truncate text-[var(--wa-muted)]">{t.placeholder}</span>
  )

  if (variant === "ios") {
    return (
      <div
        className={cx(
          "flex shrink-0 items-center bg-[var(--wa-composer)] pr-[8.75px] pt-[8px] text-[var(--wa-icon)]",
          safeArea ? "pb-[41px]" : "pb-[8px]",
        )}
      >
        <span className="ml-[11px] flex w-[24px] justify-center">
          <Plus size={30} strokeWidth={1.5} />
        </span>
        <div className="ml-[12px] flex h-[30px] min-w-0 flex-1 items-center rounded-full bg-[var(--wa-input)] pl-[12px] pr-[8.5px] text-[17px] shadow-[inset_0_1px_0_var(--wa-input-edge,transparent)]">
          <div className="min-w-0 flex-1 truncate">{draft ? text : null}</div>
          <StickerIOS size={23} />
        </div>
        {draft ? (
          <span className="ml-[12px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[var(--wa-accent)] text-white">
            <Send size={16} />
          </span>
        ) : (
          <>
            <span className="ml-[17.25px] flex w-[26px] justify-center">
              <CameraIOS size={28} />
            </span>
            <span className="ml-[11.25px] flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[var(--wa-mic-bg)] text-[var(--wa-mic-fg)]">
              <MicFilled size={18} />
            </span>
          </>
        )}
      </div>
    )
  }

  // Android (measured, dp): a 44dp pill from 6 to 300 and a 44dp mic circle, over the wallpaper.
  return (
    <div className="relative flex shrink-0 items-center bg-[var(--wa-composer)] pb-[4px] pl-[6px] pr-[8px] pt-[4px]">
      {wallpaper === "doodle" && <DoodleWallpaper />}
      <div className="relative flex h-[44px] min-w-0 flex-1 items-center rounded-full bg-[var(--wa-input)] pl-[11px] pr-[9px] text-[var(--wa-input-icon,var(--wa-muted))]">
        <StickerSmile size={23} />
        <div
          className={cx(
            "ml-[10px] min-w-0 flex-1 truncate text-[16px]",
            draft ? "text-[var(--wa-fg)]" : "text-[var(--wa-input-fg,var(--wa-muted))]",
          )}
        >
          {draft || t.placeholder}
        </div>
        <PaperclipAndroid size={21} />
        {!draft && (
          <span className="ml-[23px]">
            <CameraAndroid size={23} />
          </span>
        )}
      </div>
      <span className="relative ml-[8px] flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[var(--wa-mic-bg,var(--wa-accent))] text-[var(--wa-mic-fg,#fff)]">
        {draft ? <Send size={20} /> : <MicFilled size={20} />}
      </span>
    </div>
  )
}

/* ---------------------------------------------------------- status bar */

export type StatusBarOptions = {
  /** Clock text. Default "9:41". */
  time?: string
  /** Battery level from 0 to 1. Default 0.8. */
  battery?: number
  /** iOS: write the percentage inside the battery. Default true. */
  batteryPercent?: boolean
  /** Signal bars from 0 to 4. Default 4. */
  signal?: number
  /** Show the wifi icon. Default true (hidden when `network` is set). */
  wifi?: boolean
  /** Cellular label shown instead of wifi, e.g. "5G" or "LTE". */
  network?: string
  /** iOS: moon icon next to the clock (Focus / Do Not Disturb). Default false. */
  focus?: boolean
  /** iOS: wifi strength from 1 to 3 arcs. Default 3. */
  wifiBars?: number
  /** iOS: dual-SIM signal icon (bars on top, dots below). Set to the second line's strength, 0 to 4. */
  dualSim?: number
  /** iOS: notch phone layout (iPhone X to 14): 44pt tall bar with the clock further left. Default: Dynamic Island. */
  notch?: boolean
  /** iOS: charging battery (green with a bolt). Default false. */
  charging?: boolean
  /** iOS: the home indicator bar at the bottom of the screen. Default true. */
  homeIndicator?: boolean
  /** Android: the 3-button navigation bar at the bottom of the screen. Default true. */
  navBar?: boolean
}

export function StatusBar({
  time = "9:41",
  battery = 0.8,
  batteryPercent = true,
  signal = 4,
  wifi = true,
  network,
  focus = false,
  wifiBars = 3,
  dualSim,
  notch = false,
  charging = false,
}: StatusBarOptions) {
  const { variant } = useChat()
  if (variant === "ios") {
    return (
      <div
        className={cx(
          "relative flex shrink-0 items-center justify-between bg-[var(--wa-statusbar)] text-[var(--wa-header-fg)]",
          notch ? "h-[44px] pr-[17px] pt-[6px] @max-[409px]:pr-[27px]" : "h-[54px] pl-[42px] pr-[30px] pt-[5px]",
        )}
      >
        {/* Notch phones: on the 414pt models (iPhone 11/XR) the clock is centered in the left
            "ear"; on 390pt models (iPhone 12–14) it starts 42pt in, like Dynamic Island phones. */}
        <span
          className={cx(
            "flex items-center gap-[5px]",
            notch && "w-[103px] justify-center @max-[409px]:w-auto @max-[409px]:justify-start @max-[409px]:pl-[42px]",
          )}
        >
          <span className="text-[15.5px] font-[560] tracking-[0.025em]">{time}</span>
          {focus && <Moon size={15} />}
        </span>
        <span className="flex items-center gap-[7px]">
          {dualSim === undefined ? <SignalIOS bars={signal} /> : <SignalDualIOS bars={signal} bars2={dualSim} />}
          {network ? (
            <span className="text-[13.5px] font-semibold">{network}</span>
          ) : (
            wifi && <WifiIOS bars={wifiBars} />
          )}
          <BatteryIOS level={battery} showPercent={batteryPercent} charging={charging} />
        </span>
      </div>
    )
  }
  // Android (Samsung One UI, measured): 27dp tall, clock at 20dp, battery % then a small battery.
  return (
    <div className="flex h-[27px] shrink-0 items-center justify-between bg-[var(--wa-statusbar)] pl-[20px] pr-[19.5px] pt-[9px] text-[13.5px] text-[var(--wa-header-fg)]">
      <span>{time}</span>
      <span className="flex items-center gap-[5px]">
        {network ? <span className="text-[11px] font-medium">{network}</span> : wifi && <WifiIOS bars={wifiBars} />}
        <Signal bars={signal} size={14} />
        <span>{Math.round(battery * 100)}%</span>
        <BatteryAndroid level={battery} charging={charging} />
      </span>
    </div>
  )
}

/** Android 3-button navigation bar (Samsung style). */
export function NavBar() {
  return (
    <div className="flex h-[43.5px] shrink-0 items-center justify-between bg-[var(--wa-navbar,#000)] px-[73px] text-[var(--wa-navbar-icon,#b4b4b4)]">
      <NavRecents />
      <NavHome />
      <NavBack />
    </div>
  )
}

/* --------------------------------------------------------------- frame */

export function PhoneFrame({ children }: { children: ReactNode }) {
  const { variant } = useChat()
  const ios = variant === "ios"
  return (
    <div
      className={cx(
        "relative shrink-0 bg-[#1b1b1d] p-[11px] shadow-[0_0_0_2px_#3a3a3c,0_30px_60px_-20px_rgba(0,0,0,0.45)]",
        ios ? "rounded-[58px]" : "rounded-[44px]",
      )}
    >
      <div
        className={cx(
          "relative flex flex-col overflow-hidden",
          ios ? "h-[844px] w-[390px] rounded-[47px]" : "h-[860px] w-[396px] rounded-[34px]",
        )}
      >
        {children}
        {ios ? (
          <>
            <span className="pointer-events-none absolute left-1/2 top-[11px] h-[34px] w-[122px] -translate-x-1/2 rounded-full bg-black" />
          </>
        ) : (
          <span className="pointer-events-none absolute left-1/2 top-[9px] h-[13px] w-[13px] -translate-x-1/2 rounded-full bg-black" />
        )}
      </div>
    </div>
  )
}

/** iPhone home indicator: 134×5pt, 148pt wide on 414pt+ phones, 8pt above the bottom edge. */
export function HomeIndicator() {
  const { theme } = useChat()
  return (
    <span
      className={cx(
        "pointer-events-none absolute bottom-[8px] left-1/2 z-10 h-[5px] w-[134px] -translate-x-1/2 rounded-full @min-[410px]:w-[148px]",
        theme === "dark" ? "bg-white" : "bg-black",
      )}
    />
  )
}

/** Round "scroll to latest" button WhatsApp shows above the input when the chat isn't at the bottom. */
export function ScrollDownButton() {
  return (
    <span className="pointer-events-none absolute bottom-[25.5px] right-[10px] z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[var(--wa-scroll-btn,#252525)] text-[var(--wa-icon)] shadow-[inset_0_1px_0_var(--wa-glass-edge)]">
      <ChevronDown size={18} strokeWidth={2.4} />
    </span>
  )
}

/* ---------------------------------------------------------- list sheet */

/** The options sheet of a list message, drawn open over the chat. */
export function ListSheet({ message }: { message: ListMessage }) {
  const { variant } = useChat()
  return (
    <div className="absolute inset-0 z-20 flex flex-col justify-end bg-black/40">
      <div className="max-h-[75%] overflow-hidden rounded-t-[18px] bg-[var(--wa-sheet)] text-[var(--wa-fg)]">
        <div className="relative flex items-center justify-center border-b border-[var(--wa-divider)] px-4 py-3.5">
          <span className="absolute left-4 text-[22px] leading-none text-[var(--wa-muted)]">×</span>
          <span className={cx("text-[16px]", variant === "ios" ? "font-semibold" : "font-medium")}>
            {message.buttonLabel}
          </span>
        </div>
        <div className="max-h-[520px] overflow-hidden pb-6">
          {(message.sections ?? []).map((section, si) => (
            <div key={si}>
              {section.title && (
                <div className="px-5 pb-1 pt-4 text-[13px] font-medium text-[var(--wa-accent)]">{section.title}</div>
              )}
              {section.rows.map((row, ri) => {
                const selected = row.title === message.selected
                return (
                  <div key={ri} className="flex items-center gap-3 px-5 py-2.5">
                    <div className="min-w-0 flex-1">
                      <div className="text-[15.5px]">{row.title}</div>
                      {row.description && <div className="text-[13px] text-[var(--wa-muted)]">{row.description}</div>}
                    </div>
                    <span
                      className={cx(
                        "flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full border-2",
                        selected ? "border-[var(--wa-accent)]" : "border-[var(--wa-muted)]",
                      )}
                    >
                      {selected && <span className="h-[10px] w-[10px] rounded-full bg-[var(--wa-accent)]" />}
                    </span>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
        {message.selected && (
          <div className="absolute bottom-6 right-5">
            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[var(--wa-accent)] text-white shadow-lg">
              <Send size={22} />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
