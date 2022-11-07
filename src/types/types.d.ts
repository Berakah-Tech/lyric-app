import type { createSongSchema } from "./../validations/songValidations";
import type { z } from "zod";

export type Languages = "English" | "Tamil";

export type Lyrics = {
  chorus: string;
  stanzas: string[];
  bridge?: string;
  chorusOnEveryStanza: boolean;
  language: Languages;
};

export type SongData = {
  name: string;
  author?: string;
  lyrics: Lyrics;
  slug: string;
};

export type Song = {
  languages: Languages[];
  data: SongData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  music?: any;
};

type zSong = z.infer<typeof createSongSchema>;
