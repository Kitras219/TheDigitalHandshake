import { defineCollection, z } from 'astro:content';

// Definiujemy strukturę (schemat) dla naszych wpisów w kolekcji "hobby"
const hobbyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

// Eksportujemy kolekcje, aby Astro o nich wiedziało
export const collections = {
  'hobby': hobbyCollection,
};
