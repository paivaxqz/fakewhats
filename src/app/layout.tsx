import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import { SiteHeader } from "@/components/site-header"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })
// Fallback for the iOS mock on machines without Apple's SF Pro (Windows, Linux):
// Inter has almost the same widths as SF Pro.
const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--wa-font-fallback",
  weight: "100 900",
})
// Roboto for the Android mock on machines that don't have it.
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
      <body className="flex min-h-full flex-col bg-white text-zinc-900">
        <SiteHeader />
        {children}
        <footer className="mt-auto border-t border-zinc-200 py-6 text-center text-xs text-zinc-500">
          MIT · Not affiliated with WhatsApp or Meta. For mockups and demos only. Don&apos;t use it to deceive people.
        </footer>
      </body>
    </html>
  )
}
