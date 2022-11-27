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

export function generateSelectOptions<
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
