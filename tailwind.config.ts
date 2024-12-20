import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
} satisfies Config
