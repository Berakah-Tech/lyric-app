import clsx from "clsx";
import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { getSlug } from "../../common/utils";
import type { TSongFormData, TSongFormDataKey } from "../../types/types";
import InputBox from "./InputBox";

type TSlugInputProps = {
  name: TSongFormDataKey;
  slugFrom: TSongFormDataKey;
  label?: string;
  boxClass?: string;
  className?: string;
};

const SlugInput = ({
  name,
  label,
  boxClass,
  slugFrom,
  className,
}: TSlugInputProps) => {
  const { control, register, setValue } = useFormContext<TSongFormData>();

  const value = useWatch({ control, name: slugFrom });
  const slug = getSlug(value);

  useEffect(() => {
    setValue(name, slug);
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
