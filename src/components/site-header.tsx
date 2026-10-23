import Link from "next/link"
import { REPO_URL } from "@/lib/examples"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#25d366] text-sm text-white">fw</span>
          fakewhats
        </Link>
        <nav className="flex items-center gap-5 text-sm text-zinc-600">
          <Link href="/docs" className="hover:text-zinc-900">Docs</Link>
          <Link href="/playground" className="hover:text-zinc-900">Playground</Link>
        </nav>
        <a href={REPO_URL} className="ml-auto text-sm text-zinc-600 hover:text-zinc-900" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
    </header>
  )
}
