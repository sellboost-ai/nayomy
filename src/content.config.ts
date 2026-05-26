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
    body_tr: z.string().optional(),
  }),
});

const mcp = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mcp' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    description_tr: z.string().optional(),
    category: z.string(),
    repo: z.string(),
    stars: z.number(),
    url: z.string(),
    body_length: z.number().optional().default(0),
    license: z.string().optional(),
    language: z.string().optional(),
    npm_id: z.string().optional(),
    pypi_id: z.string().optional(),
    docker_image: z.string().optional(),
    homepage: z.string().optional(),
    body_tr: z.string().optional(),
  }),
});

const cursorRules = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cursor-rules' }),
  schema: z.object({
    name: z.string(),
    clean_name: z.string().optional(),
    description: z.string(),
    description_tr: z.string().optional(),
    category: z.string(),
    repo: z.string(),
    stars: z.number().optional().default(0),
    path: z.string().optional().default(''),
    url: z.string(),
    body_length: z.number().optional().default(0),
    file_extension: z.string().optional(),
    body_tr: z.string().optional(),
  }),
});

const toolModel = z.object({
  name: z.string(),
  description: z.string().optional(),
  description_tr: z.string().optional(),
  context: z.string().optional(),
  price_input: z.number().optional(),
  price_output: z.number().optional(),
});

const toolPricingTier = z.object({
  name: z.string(),
  name_tr: z.string().optional(),
  price: z.string(),
  highlights: z.array(z.string()).optional().default([]),
  highlights_tr: z.array(z.string()).optional().default([]),
});

const toolEcosystem = z.object({
  type: z.string(),
  label: z.string(),
  label_tr: z.string().optional(),
  url: z.string(),
  count: z.number().optional(),
  note: z.string().optional(),
  note_tr: z.string().optional(),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    tagline_tr: z.string().optional(),
    maker: z.string(),
    maker_url: z.string().optional(),
    website: z.string(),
    category: z.string(),
    category_tr: z.string().optional(),
    type: z.enum(['chat', 'code', 'visual', 'audio', 'video', 'search']),
    launched: z.string(),
    pricing_tier: z.enum(['free', 'free-paid', 'paid']),
    price_min: z.number().optional().default(0),
    price_max: z.number().optional(),
    color: z.string().optional(),
    models: z.array(toolModel).optional().default([]),
    pricing: z.array(toolPricingTier).optional().default([]),
    capabilities: z.array(z.string()).optional().default([]),
    capabilities_tr: z.array(z.string()).optional().default([]),
    strengths: z.array(z.string()).optional().default([]),
    strengths_tr: z.array(z.string()).optional().default([]),
    weaknesses: z.array(z.string()).optional().default([]),
    weaknesses_tr: z.array(z.string()).optional().default([]),
    ecosystem: z.array(toolEcosystem).optional().default([]),
    alternatives: z.array(z.string()).optional().default([]),
    sources: z.array(z.string()).optional().default([]),
    body_tr: z.string().optional(),
  }),
});

export const collections = { skills, mcp, 'cursor-rules': cursorRules, tools };
