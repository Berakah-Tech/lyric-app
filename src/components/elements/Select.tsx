import { useId } from "react";
import type { FieldValues, Path, PathValue } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";
import ReactSelect from "react-select";
import type { TSelectOptions } from "../../types/types";
import InputBox from "./InputBox";

type TSelectInputProps<T> = {
  label?: string;
  name: Path<T>;
  boxClass?: string;
  defaultValue?: PathValue<T, Path<T>>;
  options: TSelectOptions;
};

const Select = <T extends FieldValues>({
  name,
  label,
  boxClass,
  defaultValue,
  options,
}: TSelectInputProps<T>) => {
  const { control } = useFormContext<T>();

  const uniqueID = useId();

  return (
    <InputBox name={name} label={label} className={boxClass}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange, value, name } }) => (
          <ReactSelect
            instanceId={uniqueID}
            options={options}
            value={options.find((option) => option.value === value)}
            onChange={(option) => onChange(option?.value)}
            name={name}
          />
        )}
      />
    </InputBox>
  );
};

export default Select;
