import clsx from "clsx";
import React from "react";
import InputBox from "./InputBox";

interface ITextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const Input = ({ name, label, className, ...restProps }: ITextInputProps) => {
  return (
    <InputBox label={label} name={name}>
      <input
        id={name}
        className={clsx("input-field", "border-2 border-gray-400", className)}
        name={name}
        {...restProps}
      />
    </InputBox>
  );
};

export default Input;
