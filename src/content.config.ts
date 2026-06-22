import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Yazdıklarım — deneme, öykü, anı (markdown)
const yazdiklarim = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/yazdiklarim' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tur: z.string().optional(), // deneme / öykü / anı
    description: z.string().optional(),
  }),
});

// Ida'nın Güncesi — tarihli kısa girdiler
const ida = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ida' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    foto: z.string().optional(),
  }),
});

export const collections = { yazdiklarim, ida };
