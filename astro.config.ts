import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"
import robotsTxt from "astro-robots-txt"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    icon(),
    robotsTxt(),
    sitemap(),
  ],
  site: "https://mikelxk.com/",
  build: {
    format: "file",
  },
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: 'solarized-light',
        dark: 'solarized-dark',
      },
      wrap: true,
    },
  },
})
