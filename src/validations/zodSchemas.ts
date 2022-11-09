import { z } from "zod";

export const LanguageSchema = z.enum(["English", "Tamil"]);

export const LyricsSchema = z.object({
  chorus: z.string(),
  stanzas: z.string().array().nonempty(),
  bridge: z.string(),
  chorusOnEveryStanza: z.boolean(),
});

export const SongDataSchema = z.object({
  name: z.string(),
  language: LanguageSchema,
  lyrics: LyricsSchema,
  author: z.string().optional(),
  slug: z.string().optional(),
});

export const MusicSchema = z
  .object({
    scale: z.string(),
    rythm: z.string(),
    chords: z.string().array(),
  })
  .partial();

export const SongSchema = z.object({
  languages: LanguageSchema.array(),
  data: SongDataSchema.array(),
  music: MusicSchema.default({}),
});

export const BookSchema = z.object({
  name: z.string(),
  thumbnail: z.string().url().optional(),
  lanuguage: LanguageSchema,
  slug: z.string(),
});

export const SongsOnBooksSchema = z.object({
  // song: SongSchema.optional(),
  // book: BookSchema.optional(),
  songId: z.string(),
  bookId: z.string(),
  songNumber: z.number().positive(),
});
