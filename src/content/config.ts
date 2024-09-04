import { z, defineCollection } from "astro:content";

const eventCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    start_date: z.string(),
    end_date: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  events: eventCollection,
};
