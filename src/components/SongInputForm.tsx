import React from "react";
import { useFormContext } from "react-hook-form";
import { languageOptions } from "../common/data";
import { LanguageSchema } from "../validations/zodSchemas";
import Input from "./elements/Input";
import Select from "./elements/Select";
import SlugInput from "./elements/SlugInput";

const SongInputForm = () => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const { watch } = useFormContext();
  const defaultValue = LanguageSchema.enum.english;
  return (
    <>
      <form action="" className="grid grid-cols-2 gap-y-6 gap-x-8">
        <Input label="Name" name="name" />
        <SlugInput label="Slug" name="slug" slugFrom="name" />
        <Input label="Author" name="author" />
        <Select
          label="Language"
          name="language"
          defaultValue={defaultValue}
          options={languageOptions}
        />
        <Select
          label="gender"
          name="gender"
          defaultValue={"male"}
          options={genderOptions}
        />
      </form>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </>
  );
};

export default SongInputForm;
