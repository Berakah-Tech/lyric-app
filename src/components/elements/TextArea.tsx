import clsx from "clsx";
import React from "react";
import type { FieldValues, Path } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import InputBox from "./InputBox";

interface ITextAreaProps<T>
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: Path<T>;
  boxClass?: string;
}

const TextArea = <T extends FieldValues>({
  name,
  label,
  className,
  boxClass,
  ...restProps
}: ITextAreaProps<T>) => {
  const { register } = useFormContext<T>();
  return (
    <InputBox label={label} name={name} className={boxClass}>
      <textarea
        id={name}
        className={clsx("input-field h-20", className)}
        {...restProps}
        {...register(name)}
      />
    </InputBox>
  );
};

export default TextArea;
