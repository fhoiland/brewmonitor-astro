import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../data/site";
import { withBase } from "../utils/paths";

export async function GET(context) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

  const feedSite = context.site ? new URL(import.meta.env.BASE_URL, context.site).toString() : undefined;

  return rss({
    title: `${site.name} RSS`,
    description: site.description,
    site: feedSite,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.pubDate,
      link: withBase(`/blog/${post.slug}/`),
    })),
    customData: "<language>nb-no</language>",
  });
}
