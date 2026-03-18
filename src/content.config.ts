import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const share = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/share" }),
  schema: z.object({
    id: z.string(),
    ogImage: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { share };