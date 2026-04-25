import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    excerpt: z.string().optional(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default("Bryggelogg"),
    coverImage: z.string().optional(),
    image: z.string().optional(),
    imageCaption: z.string().optional(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
