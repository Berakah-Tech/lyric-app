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

export const generateSelectOptions = (
  data: Record<string, string>[],
  field: { value: string; label: string }
) => {
  const options = data.map((data: Record<string, string>) => ({
    value: data[field.value],
    label: data[field.label],
  }));

  // TODO: create a better type check
  return options as TSelectOptions;
};
