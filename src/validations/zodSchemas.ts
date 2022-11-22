import { z } from "zod";

export const LanguageSchema = z.enum(["english", "tamil"]);

export const LyricsSchema = z.object({
  chorus: z.string(),
  stanzas: z.string().array().nonempty(),
  bridge: z.string(),
  chorusOnEveryStanza: z.boolean(),
});

export const MusicSchema = z
  .object({
    scale: z.string(),
    rythm: z.string(),
    chords: z.string().array(),
  })
  .partial();

export const SongSchema = z.object({
  language: LanguageSchema,
  name: z.string(),
  lyrics: LyricsSchema,
  slug: z.string().optional(),
  author: z.string().optional(),
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
