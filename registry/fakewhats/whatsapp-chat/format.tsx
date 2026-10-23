import { Fragment, type ReactNode } from "react"

/**
 * Renders WhatsApp-style formatting:
 * *bold*  _italic_  ~strike~  `inline code`  ```monospace```  and bare links.
 */

const BLOCK = /```([\s\S]+?)```/g
const LINK = /(https?:\/\/[^\s]+|www\.[^\s]+)/g
// A marker must touch a non-space character on the inside, like WhatsApp does.
const INLINE = /(^|[^\w])([*_~`])(?!\s)([^\n]*?[^\s\\])\2(?![\w])/

const tags: Record<string, (children: ReactNode, key: number) => ReactNode> = {
  "*": (c, k) => (
    <strong key={k} className="font-semibold">
      {c}
    </strong>
  ),
  _: (c, k) => <em key={k}>{c}</em>,
  "~": (c, k) => <s key={k}>{c}</s>,
  "`": (c, k) => (
    <code key={k} className="rounded bg-[var(--wa-divider)] px-1 font-mono text-[0.92em]">
      {c}
    </code>
  ),
}

/** Lets long URLs wrap after each "/" like WhatsApp does. */
export function BreakAfterSlashes({ text }: { text: string }) {
  return (
    <>
      {text.split(/(?<=\/)/).map((piece, j) => (
        <Fragment key={j}>
          {j > 0 && <wbr />}
          {piece}
        </Fragment>
      ))}
    </>
  )
}

function links(text: string, keyBase: string): ReactNode[] {
  return text.split(LINK).map((part, i) =>
    i % 2 === 1 ? (
      <span key={`${keyBase}-l${i}`} className="text-[var(--wa-link)] underline decoration-1 underline-offset-[3px]">
        <BreakAfterSlashes text={part} />
      </span>
    ) : (
      <Fragment key={`${keyBase}-t${i}`}>{part}</Fragment>
    ),
  )
}

function inline(text: string, keyBase = "f"): ReactNode[] {
  const out: ReactNode[] = []
  let rest = text
  let n = 0
  while (rest) {
    const m = INLINE.exec(rest)
    if (!m) {
      out.push(...links(rest, `${keyBase}${n}`))
      break
    }
    const [whole, before, marker, inner] = m
    out.push(...links(rest.slice(0, m.index) + before, `${keyBase}${n}`))
    const children = marker === "`" ? inner : inline(inner, `${keyBase}${n}i`)
    out.push(tags[marker](children, n))
    rest = rest.slice(m.index + whole.length)
    n++
  }
  return out
}

export function FormattedText({ text }: { text: string }) {
  const parts: ReactNode[] = []
  let last = 0
  let i = 0
  for (const m of text.matchAll(BLOCK)) {
    parts.push(<Fragment key={`p${i}`}>{inline(text.slice(last, m.index), `p${i}`)}</Fragment>)
    parts.push(
      <code key={`b${i}`} className="font-mono text-[0.92em]">
        {m[1]}
      </code>,
    )
    last = (m.index ?? 0) + m[0].length
    i++
  }
  parts.push(<Fragment key="end">{inline(text.slice(last), "e")}</Fragment>)
  return <>{parts}</>
}
