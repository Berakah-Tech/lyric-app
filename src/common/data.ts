import type { TSelectOptions } from './../types/types.d';
import { LanguageSchema } from "../validations/zodSchemas";

export const languages = Object.values(LanguageSchema.enum);

export const languageOptions: TSelectOptions = languages.map((language) => ({
  value: language,
  label: language.charAt(0).toUpperCase() + language.slice(1),
}));
