import { Switch as HSwitch } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import type { FieldValues, Path, PathValue } from "react-hook-form";
import { Controller, useFormContext } from "react-hook-form";
import InputBox from "./InputBox";

type TSwitchInputProps<T> = {
  label?: string;
  name: Path<T>;
  boxClass?: string;
  defaultValue: PathValue<T, Path<T>>;
};

const Switch = <T extends FieldValues>({
  name,
  label,
  boxClass,
  defaultValue,
}: TSwitchInputProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <InputBox
      name={name}
      label={label}
      className={clsx(
        boxClass,
        "col-span-2 flex !flex-row items-center [&>label]:mb-0"
      )}
    >
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange, value, name } }) => (
          <HSwitch
            checked={value}
            onChange={onChange}
            name={name}
            className={`${value ? "bg-green-600" : "bg-gray-900"}
          relative ml-4 flex  w-[42px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span
              aria-hidden="true"
              className={`${value ? "translate-x-5" : "translate-x-0"}
            s pointer-events-none m-[1px] inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out`}
            />
          </HSwitch>
        )}
      />
    </InputBox>
  );
};

export default Switch;
