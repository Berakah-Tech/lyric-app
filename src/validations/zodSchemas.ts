import { z } from "zod";

export const LanguageSchema = z.enum(["english", "tamil"]);

export const LyricsSchema = z.object({
  chorus: z.string(),
  bridge: z.string(),
  stanzas: z
    .object({
      stanza: z.string().min(1),
    })
    .array(),
  chorusAfterEveryStanza: z.boolean(),
});

export const MusicSchema = z
  .object({
    mode: z.string(),
    tone: z.string(),
    timeSignature: z.string(),
  })
  .partial();

export const SongSchema = z.object({
  name: z.string().min(1),
  author: z.string().optional(),
  slug: z.string().optional(),
  language: LanguageSchema,
  lyrics: LyricsSchema,
  category: z.string(),
  music: MusicSchema.optional(),
});

export const BookSchema = z.object({
  name: z.string(),
  thumbnail: z.string().url().optional(),
  lanuguage: LanguageSchema,
  slug: z.string().optional(),
});

export const SongsOnBooksSchema = z.object({
  // song: SongSchema.optional(),
  // book: BookSchema.optional(),
  songId: z.string(),
  bookId: z.string(),
  songNumber: z.number().positive(),
});
