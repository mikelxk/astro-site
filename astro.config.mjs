import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import compress from "astro-compress";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), robotsTxt(), compress(), sitemap()],
  site: "https://mikelxk.com",
  build: {
    format: "file"
  },
  markdown: {
    syntaxHighlight: "prism"
  }
});