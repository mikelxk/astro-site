import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: "https://mikelxk.com",
  build: {
    format: "file",
  },
  markdown: {
    syntaxHighlight: "prism",
  },
})
