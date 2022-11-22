import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import ReactSelect from "react-select";
import { languageOptions } from "../../common/data";
import type { TSongFormDataKey } from "../../types/types";
import { LanguageSchema } from "../../validations/zodSchemas";
import InputBox from "./InputBox";

type TSelectInputProps = {
  label?: string;
  name: TSongFormDataKey;
  boxClass?: string;
};

const Select = ({ name, label, boxClass }: TSelectInputProps) => {
  const { control } = useFormContext();
  const defaultValue = LanguageSchema.enum.english;
  return (
    <InputBox name={name} label={label} className={boxClass}>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { onChange, value, ref, name } }) => (
          <ReactSelect
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //   @ts-ignore
            inputRef={ref}
            options={languageOptions}
            value={languageOptions.find((option) => option.value === value)}
            onChange={(option) => onChange(option?.value)}
            name={name}
          />
        )}
      />
    </InputBox>
  );
};

export default Select;
