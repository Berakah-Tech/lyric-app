import clsx from "clsx";
import { useEffect } from "react";
import type { FieldValues, Path, PathValue } from "react-hook-form";
import { useFormContext, useWatch } from "react-hook-form";
import { getSlug } from "../../common/utils";
import InputBox from "./InputBox";

type TSlugInputProps<T> = {
  name: Path<T>;
  slugFrom: Path<T>;
  label?: string;
  boxClass?: string;
  className?: string;
};

const SlugInput = <T extends FieldValues>({
  name,
  label,
  boxClass,
  slugFrom,
  className,
}: TSlugInputProps<T>) => {
  const { control, register, setValue } = useFormContext<T>();

  const value = useWatch({ control, name: slugFrom });
  const slug = getSlug(value);

  useEffect(() => {
    setValue(name, slug as PathValue<T, Path<T>>);
  }, [slug, setValue, name]);

  return (
    <InputBox name={name} label={label} className={boxClass}>
      <input
        {...register(name)}
        className={clsx("input-field", className)}
        readOnly
      />
    </InputBox>
  );
};

export default SlugInput;
