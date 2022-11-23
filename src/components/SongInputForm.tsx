import React from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { languageOptions } from "../common/data";
import { LanguageSchema } from "../validations/zodSchemas";
import Input from "./elements/Input";
import Select from "./elements/Select";
import SlugInput from "./elements/SlugInput";
import TextArea from "./elements/TextArea";

const SongInputForm = () => {
  const { watch, control, register } = useFormContext();
  const defaultValue = LanguageSchema.enum.english;

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "lyrics", // unique name for your Field Array
    }
  );
  console.log(
    "🚀 ~ file: SongInputForm.tsx ~ line 14 ~ SongInputForm ~ fields",
    fields
  );

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
        <TextArea label="Chorus" name="chorus" />
        {/* <ul>
          {fields.map((item, index) => (
            <li key={item.id} className="flex gap-8">
              <textarea {...register(`lyrics.${index}.stanza`)} />
              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input type="text" {...register("chorus")} />
        <button type="button" onClick={() => append({ stanza: "" })}>
          append
        </button> */}
      </form>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </>
  );
};

export default SongInputForm;
