import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import type { APIContext } from "astro"

export async function GET(context: APIContext) {
  const posts = await getCollection("blog")
  return rss({
    title: "Mike's Blog",
    description: "Mike's Recollection on Coding, Design, and Life",
    site: context.site!,
    stylesheet: "/assets/pretty-feed-v3.xsl",
    items: posts.map(post => ({
      ...post.data,
      pubDate: post.data.publishDate,
      link: `/blog/${post.id}`,
    })),
  })
}
