// Use this File to Define your Content Collections and set their Schema


// 1. Import Utilities from astro:content
import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

// 2. Define a Type and Schema for each collection
// const webDevelopmentCollection = defineCollection({
//   loader: glob({pattern: '**/*.mdx', base: './src/content/web-development'}),
//   schema: z.object({
//     isDraft: z.boolean().optional().default(false),
//     title: z.string(),
//     image: z.object({
//       src: z.string(),
//       alt: z.string(),
//     }),
//     author: z.string().default("Fumez"),
//     publishDate: z.date(),
//     updatedDate: z.string().transform((str) => new Date(str)),
//     description: z.string(),
//     tags: z.array(z.string()),

//   }),
// });

const philosophyCollection = defineCollection({
  loader: glob({pattern: '**/*.mdx', base:'./src/content/philosophy/'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str))
  }),
});

// 3. Export a single `collections` object to register your collections
export const collections = {
  'philosophy': philosophyCollection,
};
