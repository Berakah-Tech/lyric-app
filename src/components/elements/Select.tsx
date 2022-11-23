import { useId } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ReactSelect from "react-select";
import type { TSongFormDataKey } from "../../types/types";
import InputBox from "./InputBox";

type TSelectInputProps = {
  label?: string;
  name: TSongFormDataKey;
  boxClass?: string;
  defaultValue: string;
  options: { value: string; label: string }[];
};

const Select = ({
  name,
  label,
  boxClass,
  defaultValue,
  options,
}: TSelectInputProps) => {
  const { control } = useFormContext();

  const uniqueID = useId();

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
