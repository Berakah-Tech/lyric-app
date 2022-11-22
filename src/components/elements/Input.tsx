import clsx from "clsx";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { TSongFormData, TSongFormDataKey } from "../../types/types";
import InputBox from "./InputBox";

interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: TSongFormDataKey;
  boxClass?: string;
}

const Input = ({
  name,
  label,
  className,
  boxClass,
  ...restProps
}: ITextInputProps) => {
  const { register } = useFormContext<TSongFormData>();
  return (
    <InputBox label={label} name={name} className={boxClass}>
      <input
        id={name}
        className={clsx("input-field", "border-2 border-gray-400", className)}
        {...restProps}
        {...register(name)}
      />
    </InputBox>
  );
};

export default Input;
