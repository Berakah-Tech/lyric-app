import type {
  BookSchema,
  LanguageSchema,
  LyricsSchema,
  SongDataSchema,
  SongSchema,
} from "../validations/zodSchemas";
import type { z } from "zod";
import type { NextPage } from "next";
import type { ReactNode, ReactElement } from "react";

export type Language = z.infer<typeof LanguageSchema>;

export type Lyrics = z.infer<typeof LyricsSchema>;

export type SongData = z.infer<typeof SongDataSchema>;

export type Song = z.input<typeof SongSchema>;

export type Book = z.input<typeof BookSchema>;

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
