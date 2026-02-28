import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const blog = defineCollection({
  // The ID is a slug generated from the path of the file relative to `base`
  loader: glob({ pattern: "**/*.mdx", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    name: z.string(),
  }),
})

export const collections = { blog }
