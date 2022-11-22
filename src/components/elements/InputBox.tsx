import clsx from "clsx";
import React from "react";

type TInputBoxProps = {
  children: React.ReactNode;
  label?: string;
  name: string;
  className?: string;
};
const InputBox = ({ children, label, name, className }: TInputBoxProps) => {
  return (
    <div className={clsx("input-box flex w-full flex-col", className)}>
      {label && (
        <label className="input-label mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      {children}
    </div>
  );
};

export default InputBox;
