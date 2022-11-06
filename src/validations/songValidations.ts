import { z } from "zod";

export const createSongSchema = z.object({
  data: z.object({
    name: z.string(),
    author: z.string(),
    lyrics: z
      .object({
        chorus: z.string(),
        stanzas: z.string().array(),
        bridge: z.string(),
        chorusOnEveryStanza: z.boolean(),
        language: z.string().array(),
      })
      .deepPartial()
      .optional(),
    slug: z.string(),
  }),
  music: z.object({}),
  languages: z.string().array(),
});
