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
    body_length: z.number().optional().default(0),
    has_scripts: z.boolean().optional().default(false),
    has_references: z.boolean().optional().default(false),
    has_examples: z.boolean().optional().default(false),
    related_files: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { skills };
