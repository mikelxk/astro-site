import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), robotsTxt(), sitemap()],
  site: "https://mikelxk.com",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  build: {
    format: "file",
  },
  markdown: {
    syntaxHighlight: "prism",
  },
})
