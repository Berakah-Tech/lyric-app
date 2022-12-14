import type {
  BookSchema,
  LanguageSchema,
  LyricsSchema,
  SongSchema,
} from "../validations/zodSchemas";
import type { z } from "zod";
import type { NextPage } from "next";
import type { ReactNode, ReactElement } from "react";

export type TLanguage = z.infer<typeof LanguageSchema>;

export type TLyrics = z.infer<typeof LyricsSchema>;

export type TSong = z.input<typeof SongSchema>;

export type TBook = z.input<typeof BookSchema>;

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
