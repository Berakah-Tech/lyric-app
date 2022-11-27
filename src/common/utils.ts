import slugify from "slugify";
import type { TSelectOptions } from "../types/types";

export const getSlug = (str: string | undefined): string => {
  if (!str) return "";

  const formattedString = str
    .replace(/[$&+,:;=?@#|'<>.^*()%!~`-]/g, "")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();

  return slugify(formattedString);
};

export function generateOptionsFromObject<
  T extends Record<string, unknown>,
  KeyField extends keyof T,
  LabelField extends keyof T
>(
  data: T[],
  field: { valueKey: KeyField; labelKey: LabelField }
): TSelectOptions {
  return data.map((entry) => ({
    label: String(entry[field.labelKey]),
    value: String(entry[field.valueKey]),
  }));
}

export function generateOptionsFromArray(
  data: string[],
  { capitalize } = { capitalize: false }
): TSelectOptions {
  const options = data.map((entry) => ({
    label: capitalize ? entry.charAt(0).toUpperCase() + entry.slice(1) : entry,
    value: entry,
  }));
  return options;
}
