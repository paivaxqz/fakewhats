import { copyFileSync, mkdirSync } from "node:fs"

mkdirSync("dist", { recursive: true })
copyFileSync("public/schema.json", "dist/schema.json")
