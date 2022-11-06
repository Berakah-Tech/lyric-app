import type { createSongSchema } from "./../validations/songValidations";
import type { z } from "zod";

export type Languages = "English" | "Tamil";

type Lyrics = {
  chorus: string;
  stanzas: string[];
  bridge?: string;
  chorusOnEveryStanza: boolean;
  language: string;
};

type Song = {
  name: string;
  id: string;
  language: Languages[];
  lyrics: Lyrics[];
};
