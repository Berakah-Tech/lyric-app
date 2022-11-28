import clsx from "clsx";
import React from "react";
import type { FieldValues, Path } from "react-hook-form";
import { useFormContext } from "react-hook-form";

type TInputBoxProps<T> = {
  children: React.ReactNode;
  label?: string;
  name: Path<T>;
  className?: string;
};
const InputBox = <T extends FieldValues>({
  children,
  label,
  name,
  className,
}: TInputBoxProps<T>) => {
  const {
    formState: { errors },
  } = useFormContext<T>();

  const errorMsg = errors[name]?.message;
  return (
    <div className={clsx(className, "input-box flex w-full flex-col")}>
      {label && (
        <label className="input-label mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      {children}
      {typeof errorMsg === "string" && <p>{errorMsg}</p>}
    </div>
  );
};

export default InputBox;
