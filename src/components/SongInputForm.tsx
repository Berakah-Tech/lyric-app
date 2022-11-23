import { useFieldArray, useFormContext } from "react-hook-form";
import { languageOptions } from "../common/data";
import type { TSongFormData } from "../types/types";
import { LanguageSchema } from "../validations/zodSchemas";
import Input from "./elements/Input";
import Select from "./elements/Select";
import SlugInput from "./elements/SlugInput";
import TextArea from "./elements/TextArea";

const SongInputForm = () => {
  const { watch, control } = useFormContext<TSongFormData>();
  const defaultValue = LanguageSchema.enum.english;

  const { fields, append, remove } = useFieldArray<TSongFormData>({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "lyrics", // unique name for your Field Array
  });

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
        <TextArea label="Bridge" name="bridge" />
        <div className="col-span-2 flex flex-col bg-gray-100 p-4 pt-0">
          <div className="grid grid-cols-2 gap-6">
            {fields.map((item, index) => (
              <div key={item.id} className="flex items-center gap-4 pt-4">
                <TextArea
                  label={`Stanza ${(index + 1).toString()}`}
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  name={`lyrics.${index}.stanza`}
                />
                <button
                  className="btn-black mt-4"
                  type="button"
                  onClick={() => remove(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="btn-black mx-auto mt-4"
            onClick={() => append({ stanza: "" })}
          >
            Add Stanza
          </button>
        </div>
      </form>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </>
  );
};

export default SongInputForm;
