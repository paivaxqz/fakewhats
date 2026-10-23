import { defineConfig } from "tsup"

export default defineConfig({
  entry: { index: "registry/fakewhats/index.ts" },
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  tsconfig: "tsconfig.lib.json",
  external: ["react", "react-dom", "zod"],
  outDir: "dist",
})
