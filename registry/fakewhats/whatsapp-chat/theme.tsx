"use client"

import { createContext, useContext, useSyncExternalStore, type CSSProperties } from "react"

export type Variant = "ios" | "android"
export type Theme = "light" | "dark"
export type Locale = "en" | "pt" | "es"

/**
 * Colors are exposed as CSS variables (--wa-*) on the chat root, so you can
 * override any of them with `style` or a class without touching the code.
 */
const palettes: Record<Variant, Record<Theme, Record<string, string>>> = {
  android: {
    light: {
      "--wa-bg": "#efeae2",
      "--wa-header": "#ffffff",
      "--wa-header-fg": "#111b21",
      "--wa-header-muted": "#667781",
      "--wa-icon": "#54656f",
      "--wa-in": "#ffffff",
      "--wa-out": "#d9fdd3",
      "--wa-fg": "#111b21",
      "--wa-muted": "#667781",
      "--wa-link": "#027eb5",
      "--wa-accent": "#008069",
      "--wa-tick-read": "#53bdeb",
      "--wa-composer": "#efeae2",
      "--wa-input": "#ffffff",
      "--wa-pill": "#ffffff",
      "--wa-system": "#ffeecd",
      "--wa-system-fg": "#54656f",
      "--wa-quote-in": "#f5f6f6",
      "--wa-quote-out": "#d1f4cc",
      "--wa-divider": "rgba(11,20,26,0.1)",
      "--wa-sheet": "#ffffff",
      "--wa-statusbar": "#ffffff",
      "--wa-preview": "#f5f6f6",
      "--wa-share": "rgba(11,20,26,0.3)",
      "--wa-unread-bg": "rgba(255,255,255,0.7)",
      "--wa-unread-fg": "#54656f",
      "--wa-pin-box": "#e9edef",
      "--wa-pin-icon": "#667781",
      "--wa-avatar-bg": "#dfe5e7",
      "--wa-avatar-fg": "#ffffff",
      "--wa-doodle": "#ded4c6",
    },
    // Measured from a WhatsApp for Android screenshot (dark mode, default wallpaper).
    dark: {
      "--wa-bg": "#0b1014",
      "--wa-header": "#0b1014",
      "--wa-header-fg": "#f2f5f7",
      "--wa-header-muted": "#8c9599",
      "--wa-icon": "#f2f5f7",
      "--wa-in": "#1f272a",
      "--wa-out": "#134d37",
      "--wa-fg": "#f4fbfb",
      "--wa-muted": "#98a0a3",
      "--wa-meta-out": "#91bdac",
      "--wa-link": "#53bdeb",
      "--wa-accent": "#21c063",
      "--wa-tick-read": "#53bdeb",
      "--wa-composer": "#0b1014",
      "--wa-input": "#1f272a",
      "--wa-input-fg": "#939b9e",
      "--wa-input-icon": "#90989b",
      "--wa-mic-bg": "#21c063",
      "--wa-mic-fg": "#001403",
      "--wa-pill": "#1f272a",
      "--wa-system": "#1f272a",
      "--wa-system-fg": "#ffd279",
      "--wa-quote-in": "#1c2329",
      "--wa-quote-out": "#0f3b2b",
      "--wa-quote-text": "#90979d",
      "--wa-quote-you": "#23be62",
      "--wa-quote-contact": "#a690ff",
      "--wa-quote-you-name": "#b5e4cd",
      "--wa-quote-contact-name": "#d6d5f6",
      "--wa-divider": "rgba(233,237,239,0.08)",
      "--wa-sheet": "#1f272a",
      "--wa-statusbar": "#0b1014",
      "--wa-navbar": "#000000",
      "--wa-navbar-icon": "#b4b4b4",
      "--wa-preview": "#1c2329",
      "--wa-share": "rgba(233,237,239,0.25)",
      "--wa-unread-bg": "#1f272a",
      "--wa-unread-fg": "#e9edef",
      "--wa-pin-box": "#1f272a",
      "--wa-pin-icon": "#8696a0",
      "--wa-avatar-bg": "#0b2643",
      "--wa-avatar-fg": "#52a7ff",
      "--wa-doodle": "#22272b",
    },
  },
  // Matches WhatsApp for iOS 26 (glass header buttons, pill bubbles).
  ios: {
    // Measured from a WhatsApp for iOS 26 screenshot (light mode, default wallpaper).
    light: {
      "--wa-bg": "#f4f1eb",
      "--wa-header": "rgba(243,241,236,0.85)",
      "--wa-header-fg": "#000000",
      "--wa-header-muted": "#8a8a8e",
      "--wa-icon": "#000000",
      "--wa-glass": "#f7f5f4",
      "--wa-glass-strong": "#f7f7f7",
      "--wa-glass-edge": "#ffffff",
      "--wa-glass-ring": "rgba(0,0,0,0.05)",
      "--wa-in": "#ffffff",
      "--wa-out": "#d9fbd2",
      "--wa-fg": "#000000",
      "--wa-muted": "#5f5f5f",
      "--wa-meta-out": "#466441",
      "--wa-link": "#000000",
      "--wa-accent": "#1daa62",
      "--wa-tick-read": "#34b7f1",
      "--wa-composer": "#f4f1eb",
      "--wa-input": "#ffffff",
      "--wa-input-edge": "#cfcbca",
      "--wa-mic-bg": "#1daa62",
      "--wa-mic-fg": "#ffffff",
      "--wa-pill": "#fdfdfd",
      "--wa-date-fg": "#000000",
      "--wa-system": "#fff5c4",
      "--wa-system-fg": "#5b5b5b",
      "--wa-quote-in": "#f2f2f2",
      "--wa-quote-out": "#c9efc1",
      "--wa-divider": "rgba(0,0,0,0.1)",
      "--wa-sheet": "#ffffff",
      "--wa-statusbar": "transparent",
      "--wa-preview": "#f2f2f2",
      "--wa-share": "rgba(0,0,0,0.22)",
      "--wa-unread-bg": "rgba(255,255,255,0.6)",
      "--wa-unread-fg": "#3c3c43",
      "--wa-unread-line": "rgba(0,0,0,0.08)",
      "--wa-scroll-btn": "#ffffff",
      "--wa-quote-text": "rgba(0,0,0,0.55)",
      "--wa-pin-box": "#e5e5ea",
      "--wa-pin-icon": "#8e8e93",
      "--wa-avatar-bg": "#cee5fb",
      "--wa-avatar-fg": "#0261c7",
      "--wa-batt-text": "#ffffff",
      "--wa-doodle": "#e4e0d7",
      "--wa-button": "#1daa62",
    },
    dark: {
      "--wa-bg": "#0a0a0a",
      "--wa-header": "rgba(17,17,17,0.8)",
      "--wa-header-fg": "#ffffff",
      "--wa-header-muted": "#9a9a9e",
      "--wa-icon": "#ffffff",
      "--wa-glass": "#1e1e1e",
      "--wa-glass-strong": "#1e1e1e",
      "--wa-glass-edge": "rgba(255,255,255,0.06)",
      "--wa-glass-ring": "rgba(255,255,255,0.15)",
      "--wa-in": "#242626",
      "--wa-out": "#144d37",
      "--wa-fg": "#f3f3f3",
      "--wa-muted": "rgba(255,255,255,0.6)",
      "--wa-link": "#f3f3f3",
      "--wa-accent": "#21c063",
      "--wa-tick-read": "#53bdeb",
      "--wa-composer": "#101010",
      "--wa-input": "#282828",
      "--wa-input-edge": "#3d3e3e",
      "--wa-mic-bg": "#ffffff",
      "--wa-mic-fg": "#000000",
      "--wa-pill": "#242626",
      "--wa-system": "#242626",
      "--wa-system-fg": "#ffd279",
      "--wa-quote-in": "#1c1e1e",
      "--wa-quote-out": "#0f3d2c",
      "--wa-divider": "rgba(255,255,255,0.1)",
      "--wa-sheet": "#1c1c1e",
      "--wa-statusbar": "transparent",
      "--wa-preview": "#1f1f1f",
      "--wa-share": "#767779",
      "--wa-unread-bg": "rgba(0,0,0,0.5)",
      "--wa-unread-fg": "#d7d7d7",
      "--wa-unread-line": "rgba(255,255,255,0.14)",
      "--wa-quote-text": "rgba(255,255,255,0.7)",
      "--wa-pin-box": "#2b2a29",
      "--wa-pin-icon": "#a3a3a3",
      "--wa-avatar-bg": "#092743",
      "--wa-avatar-fg": "#4c88bc",
      "--wa-story-seen": "#4f5151",
      "--wa-story-new": "#21c063",
      "--wa-button": "#21c063",
      "--wa-doodle": "#222222",
    },
  },
}

const fonts: Record<Variant, string> = {
  // SF Pro on Apple devices. Elsewhere set --wa-font-fallback (e.g. to Inter) for the closest look.
  ios: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", var(--wa-font-fallback, "Inter"), "Helvetica Neue", Helvetica, Arial, sans-serif',
  // Roboto on Android. Elsewhere set --wa-font-fallback-android (the site loads Roboto).
  android: 'Roboto, var(--wa-font-fallback-android, "Roboto Flex"), "Segoe UI", "Helvetica Neue", Arial, sans-serif',
}

const nonAppleText = { "--wa-text-weight": 340 } as CSSProperties
const noSubscribe = () => () => {}

export type Wallpaper = "doodle" | "none" | (string & {})

/**
 * iOS 26 tints its glass header from what is behind it, so a chat with a plain
 * background has a lighter, warmer header than one over the doodle wallpaper.
 */
const plainOverrides: Partial<Record<Variant, Partial<Record<Theme, Record<string, string>>>>> = {
  ios: {
    dark: {
      "--wa-bg": "#171717",
      "--wa-header": "linear-gradient(180deg, #262525 0%, #24221f 55%, #201e1e 100%)",
      "--wa-glass": "#393939",
      "--wa-glass-strong": "#45403e",
      "--wa-glass-edge": "rgba(255,255,255,0.09)",
      "--wa-glass-ring": "rgba(0,0,0,0.55)",
      "--wa-in": "#242625",
      "--wa-composer": "#1b1b1b",
      "--wa-input": "#323232",
      "--wa-input-edge": "#373737",
      "--wa-pin-box": "#333333",
      "--wa-muted": "rgba(255,255,255,0.5)",
    },
  },
}

export function themeStyle(variant: Variant, theme: Theme, wallpaper: Wallpaper = "doodle"): CSSProperties {
  return {
    ...palettes[variant][theme],
    ...(wallpaper === "none" ? plainOverrides[variant]?.[theme] : undefined),
    fontFamily: fonts[variant],
  } as CSSProperties
}

const strings = {
  en: {
    placeholder: "Message",
    forwarded: "Forwarded",
    edited: "Edited",
    you: "You",
  },
  pt: {
    placeholder: "Mensagem",
    forwarded: "Encaminhada",
    edited: "Editada",
    you: "Você",
  },
  es: {
    placeholder: "Mensaje",
    forwarded: "Reenviado",
    edited: "Editado",
    you: "Tú",
  },
} satisfies Record<Locale, Record<string, string>>

export type Strings = (typeof strings)["en"]

/** WhatsApp's own "Chat font size" setting (Settings → Chats). */
export type TextSize = "small" | "medium" | "large"

export type TextMetrics = {
  /** Message text size and line height, px. */
  size: number
  line: number
  /** iOS bubble padding above and below the text, px. */
  padTop: number
  padBottom: number
  /** How far the time drops below the last line (iOS), px. */
  timeDrop: number
}

// iOS values measured on WhatsApp for iOS 26 screenshots ("small" and the default "medium").
const textMetrics: Record<Variant, Record<TextSize, TextMetrics>> = {
  ios: {
    small: { size: 15.8, line: 21, padTop: 6.5, padBottom: 7.5, timeDrop: 8 },
    medium: { size: 16.8, line: 22, padTop: 7, padBottom: 9, timeDrop: 8.5 },
    large: { size: 19, line: 24.5, padTop: 8, padBottom: 10, timeDrop: 9.5 },
  },
  android: {
    // Roboto sized so widths *and* heights match WhatsApp on a Samsung phone (font test against a screenshot).
    small: { size: 13, line: 18.5, padTop: 4.5, padBottom: 4, timeDrop: 4.5 },
    medium: { size: 14.3, line: 20, padTop: 4.5, padBottom: 4, timeDrop: 4.5 },
    large: { size: 16, line: 22.5, padTop: 5, padBottom: 4.5, timeDrop: 5 },
  },
}

type ChatContextValue = {
  variant: Variant
  theme: Theme
  wallpaper: Wallpaper
  text: TextMetrics
  t: Strings
}

const ChatContext = createContext<ChatContextValue>({
  variant: "ios",
  theme: "light",
  wallpaper: "doodle",
  text: textMetrics.ios.medium,
  t: strings.en,
})

/**
 * Provides variant/theme/locale to the pieces inside and renders the root
 * element that carries the --wa-* color variables.
 */
export function ChatProvider({
  variant = "ios",
  theme = "light",
  locale = "en",
  wallpaper = "doodle",
  textSize = "medium",
  className,
  style,
  children,
}: {
  variant?: Variant
  theme?: Theme
  locale?: Locale
  /** "doodle" (default), "none" for a plain color, or an image URL. */
  wallpaper?: Wallpaper
  /** WhatsApp's chat font size setting. Default "medium". */
  textSize?: TextSize
  className?: string
  style?: CSSProperties
  children: React.ReactNode
}) {
  // Off Apple devices the iOS look falls back to another font, which Windows and Android
  // render heavier than SF Pro; message text is drawn a little lighter to compensate.
  const appleFont = useSyncExternalStore(
    noSubscribe,
    () => /Mac|iPhone|iPad|iPod/.test(navigator.userAgent),
    () => true,
  )

  return (
    <ChatContext.Provider
      value={{ variant, theme, wallpaper, text: textMetrics[variant][textSize], t: strings[locale] }}
    >
      <div
        className={className}
        style={{
          ...themeStyle(variant, theme, wallpaper),
          ...(appleFont || variant !== "ios" ? null : nonAppleText),
          ...style,
        }}
      >
        {children}
      </div>
    </ChatContext.Provider>
  )
}

export function useChat() {
  return useContext(ChatContext)
}

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}
