import clsx from "clsx";
import get from "lodash/get";
import React from "react";
import type { FieldValues, Path } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

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

  // get error from object path
  const error = get(errors, name);
  const errorMsg = error?.message;

  return (
    <div className={clsx(className, "input-box flex w-full flex-col")}>
      {label && (
        <label className="input-label mb-2" htmlFor={name}>
          {label}
        </label>
      )}
      {children}
      {typeof errorMsg === "string" && <ErrorMessage msg={errorMsg} />}
    </div>
  );
};

export default InputBox;
