import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const skills = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/skills' }),
  schema: z.object({
    name: z.string(),
    description_en: z.string(),
    description_tr: z.string().optional(),
    category: z.string(),
    repo: z.string(),
    stars: z.number(),
    url: z.string(),
    path: z.string(),
    is_collection: z.boolean().optional().default(false),
  }),
});

export const collections = { skills };
