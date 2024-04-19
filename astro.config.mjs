import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import { defineConfig } from "astro/config"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    mdx(),
    icon(),
    robotsTxt(),
    sitemap(),
  ],
  site: "https://mikelxk.com/",
  build: {
    format: "file",
    build: {
      assets: 'assets'
    }
  },
  markdown: {
    syntaxHighlight: "prism",
  }
})
