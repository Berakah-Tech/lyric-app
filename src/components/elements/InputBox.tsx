import React from "react";

type TInputBoxProps = {
  children: React.ReactNode;
  label?: string;
  name: string;
};
const InputBox = ({ children, label, name }: TInputBoxProps) => {
  return (
    <div className="input-box flex flex-col">
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
