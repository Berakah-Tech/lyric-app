import { z } from "zod";

export const createSongSchema = z.object({
  languages: z.string().array(),
  data: z
    .object({
      name: z.string(),
      author: z.string(),
      lyrics: z
        .object({
          chorus: z.string(),
          stanzas: z.string().array(),
          bridge: z.string(),
          chorusOnEveryStanza: z.boolean(),
          language: z.string(),
        })
        .deepPartial()
        .optional(),
      slug: z.string(),
    })
    .array(),
  music: z.object({}),
});
