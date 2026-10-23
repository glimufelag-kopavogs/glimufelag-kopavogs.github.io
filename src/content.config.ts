import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const frettir = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/frettir' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    hofundur: z.string().optional(),
    flokkur: z.string().optional(),
    upprunaleg_slod: z.string().optional(),
    yfirfara_personuvernd: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { frettir };
