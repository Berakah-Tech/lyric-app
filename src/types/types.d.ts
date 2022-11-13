import type {
  BookSchema,
  LanguageSchema,
  LyricsSchema,
  SongDataSchema,
  SongSchema,
} from "../validations/zodSchemas";
import type { z } from "zod";

export type Language = z.infer<typeof LanguageSchema>;

export type Lyrics = z.infer<typeof LyricsSchema>;

export type SongData = z.infer<typeof SongDataSchema>;

export type Song = z.input<typeof SongSchema>;

export type Book = z.input<typeof BookSchema>;
