import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--wa-font-fallback",
  weight: "100 900",
})
const roboto = localFont({
  src: "../../node_modules/@fontsource-variable/roboto/files/roboto-latin-wght-normal.woff2",
  variable: "--wa-font-fallback-android",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "fakewhats: fake WhatsApp chat mocks for React",
  description:
    "Copy-paste React components that render a fake WhatsApp chat from typed JSON. iOS and Android, light and dark. Built for AI agents to edit.",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${roboto.variable} h-full antialiased`}>
      <body className="flex min-h-[100dvh] flex-col bg-zinc-950 text-zinc-100">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <footer className="border-t border-white/5 py-8 text-center text-xs text-zinc-600">
          MIT License. Not affiliated with WhatsApp or Meta.
        </footer>
      </body>
    </html>
  )
}
