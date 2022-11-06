import { z } from "zod";

export const createSongSchema = z.object({
  name: z.string(),
  author: z.string(),
  lyrics: z.object({}),
  music: z.object({}),
  language: z.string(),
});
