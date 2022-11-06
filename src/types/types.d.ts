import type { createSongSchema } from "./../validations/songValidations";
import type { z } from "zod";

export type Languages = "English" | "Tamil";

type Song = z.infer<typeof createSongSchema> & { language: Languages };
