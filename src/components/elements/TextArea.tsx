import clsx from "clsx";
import React from "react";
import { useFormContext } from "react-hook-form";
import type { TSongFormData, TSongFormDataKey } from "../../types/types";
import InputBox from "./InputBox";

interface ITextAreaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: TSongFormDataKey;
  boxClass?: string;
}

const TextArea = ({
  name,
  label,
  className,
  boxClass,
  ...restProps
}: ITextAreaProps) => {
  const { register } = useFormContext<TSongFormData>();
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
