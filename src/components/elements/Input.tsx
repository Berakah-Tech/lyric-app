import clsx from "clsx";
import React from "react";
import { type Path, useFormContext, type FieldValues } from "react-hook-form";
import InputBox from "./InputBox";

interface IInputProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: Path<T>;
  boxClass?: string;
}

const Input = <T extends FieldValues>({
  name,
  label,
  className,
  boxClass,
  ...restProps
}: IInputProps<T>) => {
  const { register } = useFormContext<T>();
  return (
    <InputBox label={label} name={name} className={boxClass}>
      <input
        id={name}
        className={clsx("input-field", className)}
        {...restProps}
        {...register(name)}
      />
    </InputBox>
  );
};

export default Input;
