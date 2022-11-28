import React from "react";
import { useFieldArray, useFormState } from "react-hook-form";
import type { TSongFormData } from "../types/types";
import TextArea from "./elements/TextArea";

const StanzaInput = () => {
  const { fields, append, remove } = useFieldArray<TSongFormData>({
    name: "lyrics.stanzas",
  });

  const { errors } = useFormState<TSongFormData>();

  const SongTextarea = TextArea<TSongFormData>;

  return (
    <div className="col-span-2 flex flex-col bg-gray-100 p-4 pt-0">
      <div className="grid grid-cols-2 gap-6">
        {fields.map((item, index) => (
          <div key={item.id} className="flex items-center gap-4 pt-4">
            <SongTextarea
              label={`Stanza ${(index + 1).toString()}`}
              name={`lyrics.stanzas.${index}.stanza` as const}
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
      {errors["lyrics"]?.stanzas?.message && (
        <p>{errors["lyrics"]?.stanzas?.message}</p>
      )}
    </div>
  );
};

export default StanzaInput;
