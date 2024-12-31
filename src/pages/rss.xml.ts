import rss from "@astrojs/rss"
import type { APIContext } from "astro"
import { getCollection } from "astro:content"

export async function GET(context: APIContext) {
  const posts = await getCollection("blog")
  return rss({
    title: "Mike's Blog",
    description: "Mike's Recollection on Coding, Design, and Life",
    site: context.site!,
    stylesheet: "/assets/rss-style.xsl",
    items: posts.map(post => ({
      ...post.data,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}`,
    })),
  })
}
