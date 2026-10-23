import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function Svg({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  )
}

export const ChevronLeft = (p: IconProps) => (
  <Svg {...p}>
    <path d="M15 4 7 12l8 8" />
  </Svg>
)

export const ArrowLeft = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 12H4M10 6l-6 6 6 6" />
  </Svg>
)

export const Video = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2.5" y="6" width="13" height="12" rx="2.5" />
    <path d="m15.5 10.5 6-3.5v10l-6-3.5" />
  </Svg>
)

export const Phone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11 11 0 0 0 7.2 7.2l1.4-2.1 4.2 1.6V19a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2Z" />
  </Svg>
)

export const DotsVertical = (p: IconProps) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <circle cx="12" cy="5" r="1.9" />
    <circle cx="12" cy="12" r="1.9" />
    <circle cx="12" cy="19" r="1.9" />
  </Svg>
)

export const Plus = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 4v16M4 12h16" />
  </Svg>
)

export const Camera = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h2l1.5-2h6l1.5 2h2A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5Z" />
    <circle cx="12" cy="13" r="3.8" />
  </Svg>
)

export const Mic = (p: IconProps) => (
  <Svg {...p}>
    <rect x="9" y="2.5" width="6" height="12" rx="3" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" />
  </Svg>
)

export const MicFilled = (p: IconProps) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <rect x="8.5" y="2" width="7" height="13" rx="3.5" />
    <path d="M5 11a1 1 0 1 1 2 0 5 5 0 0 0 10 0 1 1 0 1 1 2 0 7 7 0 0 1-6 6.93V21a1 1 0 1 1-2 0v-3.07A7 7 0 0 1 5 11Z" />
  </Svg>
)

export const Send = (p: IconProps) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="M3.4 20.4 21 12 3.4 3.6 3.4 10.2 15 12 3.4 13.8Z" />
  </Svg>
)

export const Smile = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0" />
    <circle cx="9" cy="9.5" r=".6" fill="currentColor" />
    <circle cx="15" cy="9.5" r=".6" fill="currentColor" />
  </Svg>
)

export const Paperclip = (p: IconProps) => (
  <Svg {...p}>
    <path d="m20 11.5-7.8 7.8a5 5 0 0 1-7.1-7.1l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7l-8.5 8.5a1.7 1.7 0 0 1-2.4-2.4l7.8-7.8" />
  </Svg>
)

export const Sticker = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20.5 13V7a3.5 3.5 0 0 0-3.5-3.5H7A3.5 3.5 0 0 0 3.5 7v10A3.5 3.5 0 0 0 7 20.5h6Z" />
    <path d="M13 20.5V16a3 3 0 0 1 3-3h4.5" />
  </Svg>
)

export const Play = (p: IconProps) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5Z" />
  </Svg>
)

export const Reply = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10 6 4 12l6 6M4 12h10a6 6 0 0 1 6 6" />
  </Svg>
)

export const ListIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 6h11M9 12h11M9 18h11" />
    <circle cx="4.5" cy="6" r=".8" fill="currentColor" />
    <circle cx="4.5" cy="12" r=".8" fill="currentColor" />
    <circle cx="4.5" cy="18" r=".8" fill="currentColor" />
  </Svg>
)

export const Forward = (p: IconProps) => (
  <Svg {...p}>
    <path d="m14 6 6 6-6 6M20 12H10a6 6 0 0 0-6 6" />
  </Svg>
)

export const Star = (p: IconProps) => (
  <Svg {...p} fill="currentColor" stroke="none">
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9Z" />
  </Svg>
)

export const Lock = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </Svg>
)

export const Verified = (p: IconProps) => (
  <Svg {...p} stroke="none">
    <path
      fill="#25d366"
      d="m12 1.5 2.6 1.9 3.2-.1 1 3 2.6 1.9-1 3.1 1 3.1-2.6 1.9-1 3-3.2-.1L12 22.5l-2.6-1.9-3.2.1-1-3-2.6-1.9 1-3.1-1-3.1 2.6-1.9 1-3 3.2.1Z"
    />
    <path d="m7.8 12.2 2.8 2.8 5.6-5.6" stroke="#fff" strokeWidth={2.2} fill="none" />
  </Svg>
)

export const Clock = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.8}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
)

export const Check = (p: IconProps) => (
  <svg width={p.size ?? 16} height={((p.size ?? 16) * 11) / 16} viewBox="0 0 16 11" fill="currentColor" aria-hidden>
    <path d="M11.07.65 4.6 7.3 1.9 4.6.6 5.9l4 4L12.4 1.95Z" />
  </svg>
)

export const DoubleCheck = (p: IconProps) => (
  <svg width={p.size ?? 16} height={((p.size ?? 16) * 11) / 16} viewBox="0 0 16 11" fill="currentColor" aria-hidden>
    <path d="M11.07.65 4.6 7.3 1.9 4.6.6 5.9l4 4L12.4 1.95Z" />
    <path d="M15.07.65 8.6 7.3l-.9-.9-1.3 1.3 2.2 2.2L16.4 1.95Z" />
  </svg>
)

export const Avatar = ({ size = 36 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden>
    <circle cx="20" cy="20" r="20" fill="#dfe5e7" />
    <circle cx="20" cy="15.5" r="7" fill="#fff" />
    <path d="M6.5 34a15 15 0 0 1 27 0 19.9 19.9 0 0 1-27 0Z" fill="#fff" />
  </svg>
)

/* Status bar glyphs */

export const Signal = ({ bars = 4, size = 17 }: { bars?: number; size?: number }) => (
  <svg width={size} height={(size * 11) / 17} viewBox="0 0 17 11" fill="currentColor" aria-hidden>
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} x={i * 4.5} y={8 - i * 2.6} width="3" height={3 + i * 2.6} rx=".8" opacity={i < bars ? 1 : 0.3} />
    ))}
  </svg>
)

export const Wifi = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={(size * 11) / 15} viewBox="0 0 15 11" fill="currentColor" aria-hidden>
    <path d="M7.5 2.3a8.8 8.8 0 0 1 6 2.4l1-1.1A10.3 10.3 0 0 0 7.5.8 10.3 10.3 0 0 0 .5 3.6l1 1.1a8.8 8.8 0 0 1 6-2.4Z" />
    <path d="M7.5 5.4a5.7 5.7 0 0 1 3.9 1.5l1-1.1a7.2 7.2 0 0 0-9.8 0l1 1.1a5.7 5.7 0 0 1 3.9-1.5Z" />
    <path d="M7.5 8.5c.7 0 1.3.3 1.8.7L7.5 11 5.7 9.2c.5-.4 1.1-.7 1.8-.7Z" />
  </svg>
)

export const Battery = ({ level = 0.8, size = 25 }: { level?: number; size?: number }) => (
  <svg width={size} height={(size * 12) / 25} viewBox="0 0 25 12" aria-hidden>
    <rect x=".5" y=".5" width="21" height="11" rx="3.2" fill="none" stroke="currentColor" opacity=".4" />
    <rect x="2" y="2" width={Math.max(0, Math.min(1, level)) * 18} height="8" rx="1.8" fill="currentColor" />
    <path d="M23 4v4a2 2 0 0 0 0-4Z" fill="currentColor" opacity=".4" />
  </svg>
)

/* iOS 26 glyphs */

export const ChevronDown = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
)

export const Moon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
    <path d="M6.2 1.2a.6.6 0 0 1 .6.8 5.6 5.6 0 0 0 7.2 7.2.6.6 0 0 1 .8.6A7 7 0 1 1 6.2 1.2Z" />
  </svg>
)

export const Pin = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="currentColor" aria-hidden>
    <path d="M4.6 2h8.8a.9.9 0 0 1 .6 1.6l-1.6 1.2.9 4.3 2 1.4a.9.9 0 0 1-.5 1.6H9.6l-.4 4.6a.2.2 0 0 1-.4 0l-.4-4.6H3.2a.9.9 0 0 1-.5-1.6l2-1.4.9-4.3L4 3.6A.9.9 0 0 1 4.6 2Z" />
  </svg>
)

export const LinkIcon = (p: IconProps) => (
  <Svg {...p} strokeWidth={2}>
    <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.2 1.2" />
    <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2" />
  </Svg>
)

export const ShareArrow = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="currentColor" aria-hidden>
    <path d="M10.4 2.4a.6.6 0 0 1 .65.1l5.6 5.2a.6.6 0 0 1 0 .9l-5.6 5.2a.6.6 0 0 1-1-.45V10.9c-3.6 0-6 .9-8 3.6a.4.4 0 0 1-.7-.3C2.1 8.9 5 6.1 10.05 5.8V2.95a.6.6 0 0 1 .35-.55Z" />
  </svg>
)

export const PersonFilled = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="currentColor" aria-hidden>
    <circle cx="9" cy="5.6" r="3.6" />
    <path d="M2.2 15.4c0-3.2 3-5.2 6.8-5.2s6.8 2 6.8 5.2c0 .5-.4.8-.9.8H3.1c-.5 0-.9-.3-.9-.8Z" />
  </svg>
)

export const StickerIOS = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.9}>
    <path d="M20.5 12.6V8a4.5 4.5 0 0 0-4.5-4.5H8A4.5 4.5 0 0 0 3.5 8v8A4.5 4.5 0 0 0 8 20.5h4.6c.9 0 1.6-.3 2.2-.9l5.3-5.3c.6-.6.9-1.3.9-2.2Z" />
    <path d="M12.8 20.4c.1-1.8.4-3.6 1.6-4.8s3-1.5 4.8-1.6" />
  </Svg>
)

export const CameraIOS = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.8}>
    <path d="M3 9a2.5 2.5 0 0 1 2.5-2.5h1.6c.6 0 1.1-.3 1.4-.8l.7-1.2c.3-.5.8-.8 1.4-.8h2.8c.6 0 1.1.3 1.4.8l.7 1.2c.3.5.8.8 1.4.8h1.6A2.5 2.5 0 0 1 21 9v8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5Z" />
    <circle cx="12" cy="13" r="3.7" />
  </Svg>
)

export const PhoneOutline = (p: IconProps) => (
  <Svg {...p} strokeWidth={1.7}>
    <path d="M7.4 3.2 9 3a1.2 1.2 0 0 1 1.2.7l1.3 3a1.2 1.2 0 0 1-.3 1.4L9.8 9.3a10.6 10.6 0 0 0 4.9 4.9l1.2-1.4a1.2 1.2 0 0 1 1.4-.3l3 1.3a1.2 1.2 0 0 1 .7 1.2l-.2 1.6a3.4 3.4 0 0 1-3.5 3A15.5 15.5 0 0 1 4.4 6.7a3.4 3.4 0 0 1 3-3.5Z" />
  </Svg>
)

/** iOS signal bars: four bars of growing height, `bars` of them lit. */
export const SignalIOS = ({ bars = 4 }: { bars?: number }) => (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" aria-hidden>
    {[0, 1, 2, 3].map((i) => (
      <rect key={i} x={i * 4.8} y={9 - i * 3} width="3.2" height={3 + i * 3} rx="1" opacity={i < bars ? 1 : 0.35} />
    ))}
  </svg>
)

/** iOS battery with the percentage written inside. */
export const BatteryIOS = ({
  level = 0.8,
  showPercent = true,
  charging = false,
}: {
  level?: number
  showPercent?: boolean
  charging?: boolean
}) => {
  const pct = Math.round(Math.max(0, Math.min(1, level)) * 100)
  return (
    <span className="relative inline-flex items-center">
      <span className="relative flex h-[13px] w-[25px] items-center justify-center overflow-hidden rounded-[4.3px] bg-current/35">
        <span
          className="absolute inset-y-0 left-0"
          // iOS turns the battery red at 20% and below.
          style={{ width: `${pct}%`, background: charging ? "#45b55f" : pct <= 20 ? "#ff453a" : "currentColor" }}
        />
        {showPercent && (
          <span
            className="relative text-[12.5px] font-bold leading-none tracking-[-0.04em] text-[var(--wa-batt-text,#000)] [font-variant-numeric:tabular-nums]"
            style={charging ? { color: "#ffffff" } : pct <= 20 ? { color: "currentColor" } : undefined}
          >
            {pct}
          </span>
        )}
        {charging && (
          <svg width="6" height="9" viewBox="0 0 6 9" className="relative -mr-[1px] ml-[0.5px]" aria-hidden>
            <path d="M3.6 0 0 5h2.4L1.9 9 6 3.6H3.5Z" fill="#ffffff" />
          </svg>
        )}
      </span>
      <span className="ml-[1px] h-[4px] w-[1.5px] rounded-r-full bg-current opacity-40" />
    </span>
  )
}

/** iOS 26 header: contact card with stacked layers on top. */
export const ContactCard = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden>
    <rect x="3.5" y="7" width="17" height="14" rx="2.5" />
    <path d="M6 4.6h12M8 2.4h8" strokeLinecap="round" />
    <circle cx="12" cy="12.4" r="2.6" />
    <path d="M7.2 19.5c.6-2.3 2.6-3.6 4.8-3.6s4.2 1.3 4.8 3.6" strokeLinecap="round" />
  </svg>
)

export const VideoIOS = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="1.5" y="5.5" width="15" height="13" rx="3" />
    <path d="M16.5 10.2 22 6.8v10.4l-5.5-3.4Z" />
  </svg>
)

/** iOS 26 thin slanted ticks. */
export const TicksIOS = ({ double = true }: { double?: boolean }) => (
  <svg
    width="17"
    height="11"
    viewBox="0 0 17 11"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="m1 6.2 2.8 3.1L10.2 1.2" />
    {double && <path d="M8.3 9.3 15.6 1.2" />}
  </svg>
)

/** iOS dual-SIM signal: growing bars for the first line, square dots below for the second. */
export const SignalDualIOS = ({ bars = 4, bars2 = 4 }: { bars?: number; bars2?: number }) => (
  <svg width="17" height="13" viewBox="0 0 16.5 13" fill="currentColor" aria-hidden>
    {[3.9, 5, 6.4, 8].map((h, i) => (
      <g key={i} opacity={1}>
        <rect x={i * 4.5} y={8 - h} width="3" height={h} rx="1" opacity={i < bars ? 1 : 0.3} />
        <rect x={i * 4.5} y="9.75" width="3" height="3.25" rx="0.9" opacity={i < bars2 ? 1 : 0.3} />
      </g>
    ))}
  </svg>
)

/** iOS wifi: a closed fan of two thick bands and a wedge, `bars` (1 to 3) of them lit. */
export const WifiIOS = ({ bars = 3 }: { bars?: number }) => (
  <svg width="16" height="12.6" viewBox="0 0 16 12.6" aria-hidden>
    <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
      <path d="M1.5 3.93A10.6 10.6 0 0 1 14.5 3.93" opacity={bars >= 3 ? 1 : 0.3} />
      <path d="M4.08 7.24A6.4 6.4 0 0 1 11.92 7.24" opacity={bars >= 2 ? 1 : 0.3} />
    </g>
    <path
      d="M8 12.3 5.59 9.63A3.6 3.6 0 0 1 10.41 9.63Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinejoin="round"
      opacity={bars >= 1 ? 1 : 0.3}
    />
  </svg>
)

export const CameraFilled = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path
      d="M9.2 3.5h5.6c.6 0 1.1.3 1.4.8l1 1.7H20a2.5 2.5 0 0 1 2.5 2.5v9.5A2.5 2.5 0 0 1 20 20.5H4A2.5 2.5 0 0 1 1.5 18V8.5A2.5 2.5 0 0 1 4 6h2.8l1-1.7c.3-.5.8-.8 1.4-.8ZM12 17.3a4.3 4.3 0 1 0 0-8.6 4.3 4.3 0 0 0 0 8.6Zm0-2.3a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
      fillRule="evenodd"
    />
  </svg>
)

/* Android (Material) glyphs */

export const ArrowBackAndroid = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2Z" />
  </svg>
)

export const CallAndroid = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M6.6 3.5h-2a1.5 1.5 0 0 0-1.5 1.6A16.5 16.5 0 0 0 18.9 20.9a1.5 1.5 0 0 0 1.6-1.5v-2.2a1.3 1.3 0 0 0-1-1.3l-3.2-.8a1.3 1.3 0 0 0-1.3.4l-1.4 1.6a12.3 12.3 0 0 1-5.6-5.6l1.6-1.4a1.3 1.3 0 0 0 .4-1.3l-.8-3.2a1.3 1.3 0 0 0-1.3-1Z" />
  </svg>
)

export const CaretDown = ({ size = 8 }: { size?: number }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 10 6" fill="currentColor" aria-hidden>
    <path d="M0 0h10L5 6Z" />
  </svg>
)

export const DotsAndroid = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <circle cx="12" cy="5.5" r="1.9" />
    <circle cx="12" cy="12" r="1.9" />
    <circle cx="12" cy="18.5" r="1.9" />
  </svg>
)

/** WhatsApp Android composer: smiley sticker (emoji + stickers button). */
export const StickerSmile = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M21 12.5A9 9 0 1 0 12.5 21c1 0 1.6-.3 2.3-1l5.2-5.2c.7-.7 1-1.3 1-2.3Z" />
    <path d="M13 21c.1-1.9.4-3.4 1.6-4.6S17.3 14.9 21 14.8" />
    <path d="M8 14.2c.9 1.2 2.4 1.9 4 1.7" />
    <circle cx="9" cy="9.8" r=".9" fill="currentColor" stroke="none" />
    <circle cx="15" cy="9.8" r=".9" fill="currentColor" stroke="none" />
  </svg>
)

export const PaperclipAndroid = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinecap="round"
    aria-hidden
  >
    <path d="M15.5 6.5v10a3.5 3.5 0 0 1-7 0V5a2.3 2.3 0 0 1 4.6 0v10.5a1.1 1.1 0 0 1-2.2 0V7" />
  </svg>
)

export const CameraAndroid = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.9}
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h3l1.6-2.2h5.8L16.5 7h3A1.5 1.5 0 0 1 21 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5Z" />
    <circle cx="12" cy="13.3" r="3.6" />
  </svg>
)

/** Samsung-style 3-button navigation bar glyphs. */
export const NavRecents = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
    <rect x="0.5" y="0" width="1.6" height="14" rx=".8" />
    <rect x="6.2" y="0" width="1.6" height="14" rx=".8" />
    <rect x="11.9" y="0" width="1.6" height="14" rx=".8" />
  </svg>
)
export const NavHome = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden>
    <rect x="1" y="1" width="14" height="14" rx="5" />
  </svg>
)
export const NavBack = () => (
  <svg
    width="9"
    height="16"
    viewBox="0 0 9 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M8 1 1 8l7 7" />
  </svg>
)

/** Samsung battery: small vertical pill after the percentage. */
export const BatteryAndroid = ({ level = 0.8, charging = false }: { level?: number; charging?: boolean }) => {
  // Samsung One UI: a solid rounded block (7.5×10.5dp) with a small cap; the empty part is dimmed.
  const pct = Math.max(0, Math.min(1, level))
  const top = 1.6 + 10.4 * (1 - pct)
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" aria-hidden>
      <defs>
        <clipPath id="wa-batt-android">
          <rect x=".25" y="1.6" width="7.5" height="10.4" rx="1.7" />
        </clipPath>
      </defs>
      <rect x="2.25" y="0" width="3.5" height="2" rx=".7" fill="currentColor" opacity={pct >= 0.98 ? 1 : 0.35} />
      <rect x=".25" y="1.6" width="7.5" height="10.4" rx="1.7" fill="currentColor" opacity=".35" />
      <rect
        x="0"
        y={top}
        width="8"
        height={12 - top}
        clipPath="url(#wa-batt-android)"
        fill={charging ? "#21c063" : "currentColor"}
      />
    </svg>
  )
}
