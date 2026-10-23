"use client"

import { useId } from "react"

/**
 * An original doodle wallpaper in the style of WhatsApp's default chat
 * background: large thin-line objects packed on a 420×420 tile, with hollow
 * circles, sparkles and pixel steps filling the gaps.
 * Drawn with currentColor, so the color comes from --wa-doodle.
 */

type Doodle = { w: number; h: number; d: string }

// Each object is drawn at its real size (pt), inside a w×h box.
const objects: Record<string, Doodle> = {
  laptop: {
    w: 60,
    h: 42,
    d: "M7 0h46a3 3 0 0 1 3 3v31H4V3a3 3 0 0 1 3-3ZM8 4h44v26H8ZM13 24l8-7 6 5 9-10 7 4M0 36h60l-3 5a1.5 1.5 0 0 1-1.4 1H4.4A1.5 1.5 0 0 1 3 41ZM25 36v1.5h10V36",
  },
  basket: {
    w: 46,
    h: 34,
    d: "M10 12 18 1M36 12 28 1M3 12h40a3 3 0 0 1 0 6H3a3 3 0 0 1 0-6ZM3 18l3 15h34l3-15M15 18v15M23 18v15M31 18v15M5 25.5h36",
  },
  phone: {
    w: 26,
    h: 46,
    d: "M5 0h16a5 5 0 0 1 5 5v36a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5ZM10 4h6M10 41h6M13 28c-5-3.5-7-6-7-8.5a3.5 3.5 0 0 1 7-1 3.5 3.5 0 0 1 7 1c0 2.5-2 5-7 8.5Z",
  },
  scooter: {
    w: 56,
    h: 36,
    d: "M8 35a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM8 30.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM48 35a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM48 30.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM15 28h17l6-6h10M48 28 40 3h-7M10 20h15a3 3 0 0 0 0-6H12M25 20c5 0 8 2 9 7",
  },
  burger: {
    w: 42,
    h: 34,
    d: "M2 14a19 12 0 0 1 38 0ZM14 7l2 1M21 5l2 1M28 8l2 1M1 18q3-3 6 0t6 0 6 0 6 0 6 0 6 0 6 0M5 20h32a3 3 0 0 1 0 6H5a3 3 0 0 1 0-6ZM2 28h38v1a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z",
  },
  rocket: {
    w: 30,
    h: 50,
    d: "M15 0c8 7 10 18 9 30H6C5 18 7 7 15 0ZM15 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM6 24 0 34v6l7-4M24 24l6 10v6l-7-4M10 34q5 16 5 16t5-16",
  },
  plant: {
    w: 34,
    h: 46,
    d: "M6 30h22l-3 16H9ZM5.5 26h23a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 4 29.5v-2A1.5 1.5 0 0 1 5.5 26ZM17 26V12M17 18C9 18 4 13 4 6c7 0 13 4 13 12ZM17 14c0-8 5-12 13-12 0 8-5 12-13 12Z",
  },
  gamepad: {
    w: 54,
    h: 32,
    d: "M14 0h26a14 14 0 0 1 13.5 17L51 27a6 6 0 0 1-10 2.5L36 24H18l-5 5.5A6 6 0 0 1 3 27L.5 17A14 14 0 0 1 14 0ZM14 8v10M9 13h10M38 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM43 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM33 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM38 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  },
  coffee: {
    w: 30,
    h: 44,
    d: "M2 8h26V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2ZM8 3l2-3h10l2 3M3 8l3 36h18l3-36M4.5 18h21l-1 12h-19Z",
  },
  camera: {
    w: 48,
    h: 36,
    d: "M5 6h38a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5ZM14 6l3-6h14l3 6M24 30a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM24 26a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM39 11h5v3h-5Z",
  },
  sneaker: {
    w: 54,
    h: 28,
    d: "M2 22c0-6 2-14 8-20l5 6c4 2 10 3 14 2l8 4c8 3 15 2 20 6a5 5 0 0 1 2 6H4a2 2 0 0 1-2-2ZM2 24h52M16 9l3-3M20 11l3-3M24 12l3-3",
  },
  icecream: {
    w: 26,
    h: 46,
    d: "M4 20l9 26 9-26M6 24l12 8M20 24 8 32M4 20a9 9 0 1 1 18 0ZM13 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
  },
  planet: {
    w: 44,
    h: 30,
    d: "M22 26a11 11 0 1 0 0-22 11 11 0 0 0 0 22ZM6 20C-3 24 2 27 12 25c10-2 22-7 28-12 5-4 2-6-6-4",
  },
  headphones: {
    w: 40,
    h: 40,
    d: "M5 26v-6a15 15 0 0 1 30 0v6M5 24h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3ZM35 24h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3Z",
  },
  bag: {
    w: 34,
    h: 40,
    d: "M3 12h28l2 28H1ZM11 16V8a6 6 0 0 1 12 0v8",
  },
  plane: {
    w: 42,
    h: 30,
    d: "M0 13 42 0 30 30 19 19ZM19 19 42 0M19 19v10l5-5",
  },
}

// The pattern repeats every TILE pt. It is wider than a phone so the repetition is not visible.
const TILE = 420

// Small objects scattered between the big ones, like the real pattern's tags, locks and bottles.
const smalls: Record<string, Doodle> = {
  lock: {
    w: 16,
    h: 20,
    d: "M3 9h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2ZM4.5 9V6a3.5 3.5 0 0 1 7 0v3M8 13v3",
  },
  tag: { w: 22, h: 22, d: "M2 3v8l10 10 9-9L11 2H3a1 1 0 0 0-1 1ZM7 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" },
  heart: { w: 22, h: 20, d: "M11 19S1 13 1 6.5A5 5 0 0 1 11 4a5 5 0 0 1 10 2.5C21 13 11 19 11 19Z" },
  star: { w: 22, h: 21, d: "m11 1 3 6.3 7 1-5 4.8 1.2 6.9L11 16.8 4.8 20l1.2-6.9-5-4.8 7-1Z" },
  bottle: { w: 14, h: 26, d: "M5 1h4v5l3 4v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10l3-4ZM2 15h10" },
  coin: {
    w: 22,
    h: 22,
    d: "M11 21a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM14 8c-.6-1.2-1.7-1.8-3-1.8-1.7 0-3 .9-3 2.3 0 3.3 6 1.6 6 4.8 0 1.4-1.3 2.3-3 2.3-1.5 0-2.7-.6-3.2-1.8M11 4.5v1.7M11 15.8v1.7",
  },
  note: { w: 20, h: 22, d: "M7 17V3l12-2v14M7 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" },
  cloud: { w: 28, h: 18, d: "M7 17a6 6 0 0 1-.6-12A8 8 0 0 1 21.5 7 5 5 0 0 1 21 17Z" },
  bulb: {
    w: 16,
    h: 24,
    d: "M5 19h6M6 23h4M8 1a7 7 0 0 0-4.3 12.5c.8.7 1.3 1.6 1.3 2.6h6c0-1 .5-1.9 1.3-2.6A7 7 0 0 0 8 1Z",
  },
  pin: { w: 18, h: 24, d: "M9 23s8-7 8-13.5a8 8 0 0 0-16 0C1 16 9 23 9 23ZM9 12.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" },
  chat: { w: 24, h: 20, d: "M2 2h20v13H8l-6 4ZM6 7h12M6 11h8" },
  mail: { w: 24, h: 16, d: "M1 1h22v14H1ZM1 2l11 8 11-8" },
  key: { w: 24, h: 12, d: "M6 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM11 6h12M20 6v4M16.5 6v3" },
  clock: { w: 22, h: 22, d: "M11 21a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM11 5.5V11l4 2.5" },
  dice: {
    w: 20,
    h: 20,
    d: "M3 1h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2ZM6 6h.01M14 6h.01M10 10h.01M6 14h.01M14 14h.01",
  },
  cupcake: {
    w: 20,
    h: 24,
    d: "M3 12h14l-2 11H5ZM2 12c0-4 3-5 5-5 0-3 2-5 3-6 1 1 3 3 3 6 2 0 5 1 5 5ZM7 12l1 11M13 12l-1 11",
  },
  pie: { w: 24, h: 24, d: "M11 3a10 10 0 1 0 10 10H11ZM14 1v9h9a9 9 0 0 0-9-9Z" },
  bolt: { w: 14, h: 24, d: "M9 1 1 14h6l-2 9 8-13H7Z" },
}

const SPARKLE = "M7 0c.8 4.5 2.5 6.2 7 7-4.5.8-6.2 2.5-7 7-.8-4.5-2.5-6.2-7-7 4.5-.8 6.2-2.5 7-7Z"
const STEPS = "M0 10h5v5H0ZM5 5h5v5H5ZM10 0h5v5h-5Z"

type Box = { x: number; y: number; w: number; h: number }
type Placed = { d: string; x: number; y: number; w: number; h: number; r: number; s: number }
type Filler = { kind: "circle" | "sparkle" | "steps"; x: number; y: number; r: number }

const OFFSETS = [-TILE, 0, TILE]

/**
 * Deterministic layout (same on server and client), all on a torus so the tile repeats
 * seamlessly: big objects (each used twice, at different angles and sizes), then small
 * objects, then hollow circles, sparkles and pixel steps, each kept clear of what is
 * already there. Tuned so ~15% of the area is line work, as in WhatsApp's own pattern.
 */
function scatter() {
  const boxes: Box[] = []
  let seed = 11
  const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646
  const clear = (x: number, y: number, w: number, h: number, pad: number) =>
    !boxes.some((b) =>
      OFFSETS.some((ox) =>
        OFFSETS.some(
          (oy) =>
            x < b.x + ox + b.w + pad && x + w + pad > b.x + ox && y < b.y + oy + b.h + pad && y + h + pad > b.y + oy,
        ),
      ),
    )

  const place = (pool: Doodle[], count: number, minScale: number, maxScale: number, pad: number, tilt: number) => {
    const out: Placed[] = []
    for (let i = 0; i < 20000 && out.length < count; i++) {
      const shape = pool[out.length % pool.length]
      const scale = minScale + rand() * (maxScale - minScale)
      const w = shape.w * scale
      const h = shape.h * scale
      const x = rand() * TILE
      const y = rand() * TILE
      if (!clear(x, y, w, h, pad)) continue
      boxes.push({ x, y, w, h })
      out.push({ d: shape.d, x, y, w, h, r: (rand() - 0.5) * 2 * tilt, s: scale })
    }
    return out
  }

  const bigPool = Object.values(objects)
  const big = place([...bigPool, ...bigPool], bigPool.length * 2, 0.85, 1.1, 5, 22)
  const small = place(Object.values(smalls), 100, 1.2, 1.55, 4, 25)

  const fill: Filler[] = []
  for (let i = 0; i < 20000 && fill.length < 280; i++) {
    const roll = rand()
    const kind = roll < 0.1 ? "sparkle" : roll < 0.2 ? "steps" : "circle"
    const r = kind === "circle" ? 2.2 + rand() * 2.8 : 7.5
    const x = rand() * TILE
    const y = rand() * TILE
    if (!clear(x - r, y - r, 2 * r, 2 * r, 3.5)) continue
    // Keep circles apart from each other so they spread evenly instead of clumping.
    const near = fill.some((f) =>
      OFFSETS.some((ox) => OFFSETS.some((oy) => Math.hypot(f.x + ox - x, f.y + oy - y) < f.r + r + 8)),
    )
    if (near) continue
    boxes.push({ x: x - r, y: y - r, w: 2 * r, h: 2 * r })
    fill.push({ kind, x, y, r })
  }
  return { shapes: [...big, ...small], fill }
}

const { shapes: SHAPES, fill: FILLERS } = scatter()

/** Copies of an item shifted by ±TILE wherever it crosses the tile edge, so the seam is invisible. */
function wraps(x: number, y: number, w: number, h: number) {
  const out: Array<[number, number]> = []
  for (const ox of OFFSETS)
    for (const oy of OFFSETS) {
      const nx = x + ox
      const ny = y + oy
      if (nx < TILE && nx + w > 0 && ny < TILE && ny + h > 0) out.push([nx, ny])
    }
  return out
}

export function DoodleWallpaper() {
  const id = useId().replace(/:/g, "")
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full text-[var(--wa-doodle)]" aria-hidden>
      <defs>
        <pattern id={`wa-doodle-${id}`} width={TILE} height={TILE} patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            {SHAPES.flatMap((o, i) =>
              wraps(o.x, o.y, o.w, o.h).map(([x, y], j) => (
                <path
                  key={`s${i}-${j}`}
                  vectorEffect="non-scaling-stroke"
                  d={o.d}
                  transform={`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${o.r.toFixed(1)} ${(o.w / 2).toFixed(1)} ${(o.h / 2).toFixed(1)}) scale(${o.s.toFixed(2)})`}
                />
              )),
            )}
            {FILLERS.flatMap((f, i) =>
              wraps(f.x - 8, f.y - 8, 16, 16).map(([x, y], j) =>
                f.kind === "circle" ? (
                  <circle key={`f${i}-${j}`} cx={(x + 8).toFixed(1)} cy={(y + 8).toFixed(1)} r={f.r.toFixed(1)} />
                ) : (
                  <path
                    key={`f${i}-${j}`}
                    d={f.kind === "sparkle" ? SPARKLE : STEPS}
                    transform={`translate(${(x + 1).toFixed(1)} ${(y + 1).toFixed(1)})`}
                  />
                ),
              ),
            )}
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#wa-doodle-${id})`} />
    </svg>
  )
}
