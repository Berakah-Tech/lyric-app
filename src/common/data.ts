import { LanguageSchema } from "../validations/zodSchemas";
import { generateOptionsFromArray } from "./utils";
import { TimeSignature } from "tonal";

export const languages = Object.values(LanguageSchema.enum);

export const languageOptions = generateOptionsFromArray(languages, {
  capitalize: true,
});

export const tones = [
  "C",
  "C#",
  "Db",
  "D",
  "D#",
  "Eb",
  "E",
  "F",
  "F#",
  "Gb",
  "G",
  "G#",
  "Ab",
  "A",
  "A#",
  "Bb",
  "B",
];

export const toneOptions = generateOptionsFromArray(tones, {
  capitalize: true,
});

export const timeSignatureOptions = generateOptionsFromArray(
  TimeSignature.names()
);
