import type {
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
