import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://mikelxk.com",
  build: {
    format: "file",
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
