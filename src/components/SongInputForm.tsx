import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "react-toastify";
import { languageOptions } from "../common/data";
import { generateOptionsFromObject } from "../common/utils";
import type { TSong } from "../types/types";
import { trpc } from "../utils/trpc";
import { LanguageSchema } from "../validations/zodSchemas";
import Input from "./elements/Input";
import Select from "./elements/Select";
import SlugInput from "./elements/SlugInput";
import Switch from "./elements/Switch";
import TextArea from "./elements/TextArea";
import MusicInput from "./MusicInput";
import StanzaInput from "./StanzaInput";

// add type generics to form elements
const SongInput = Input<TSong>;
const SongTextarea = TextArea<TSong>;
const SongSlug = SlugInput<TSong>;
const SongSelect = Select<TSong>;
const SongSwitch = Switch<TSong>;

interface ISongInputFormProps {
  formID: string;
}

const SongInputForm = ({ formID }: ISongInputFormProps) => {
  const {
    watch,
    handleSubmit,
    formState: { errors },
  } = useFormContext<TSong>();
  console.log(
    "🚀 ~ file: SongInputForm.tsx:30 ~ SongInputForm ~ errors",
    errors
  );

  // get all categories
  const { data: categoryData } = trpc.category.getAll.useQuery();
  // generate category select options
  const categoryOptions = categoryData
    ? generateOptionsFromObject(categoryData, {
        valueKey: "slug",
        labelKey: "name",
      })
    : [];

  // create mutate instance
  const { mutate, error } = trpc.song.add.useMutation();

  // side-effect to show toast for every error
  useEffect(() => {
    if (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [error]);

  // form submit function
  const onFormSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <>
      <form
        className="grid grid-cols-2 gap-y-6 gap-x-8"
        onSubmit={onFormSubmit}
        id={formID}
      >
        <SongInput label="Name" name="name" />
        <SongSlug label="Slug" name="slug" slugFrom="name" />
        <SongInput label="Author" name="author" />
        <div></div>
        <SongSelect
          label="Language"
          name="language"
          defaultValue={LanguageSchema.enum.english}
          options={languageOptions}
        />
        <SongSelect
          label="Category"
          name="category"
          options={categoryOptions}
        />
        <SongTextarea label="Chorus" name="lyrics.chorus" />
        <SongTextarea label="Bridge" name="lyrics.bridge" />
        <SongSwitch
          name="lyrics.chorusAfterEveryStanza"
          label="Chorus after every Stanza"
          defaultValue={true}
        />
        <StanzaInput />
        <MusicInput />
        <input type="submit" />
      </form>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </>
  );
};

export default SongInputForm;
