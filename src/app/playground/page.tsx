import type { Metadata } from "next"
import { examples } from "@/lib/examples"
import { Playground } from "./playground"

export const metadata: Metadata = { title: "Playground · fakewhats" }

export default function PlaygroundPage() {
  return <Playground examples={examples} />
}
