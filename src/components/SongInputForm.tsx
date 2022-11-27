import { useFormContext } from "react-hook-form";
import { languageOptions } from "../common/data";
import { generateOptionsFromObject } from "../common/utils";
import type { TSongFormData } from "../types/types";
import { trpc } from "../utils/trpc";
import { LanguageSchema } from "../validations/zodSchemas";
import Input from "./elements/Input";
import Select from "./elements/Select";
import SlugInput from "./elements/SlugInput";
import TextArea from "./elements/TextArea";
import StanzaInput from "./StanzaInput";
import MusicInput from "./MusicInput";

const SongInputForm = () => {
  const { watch } = useFormContext<TSongFormData>();

  const defaultValue = LanguageSchema.enum.english;

  const { data: categoryData } = trpc.category.getAll.useQuery();
  const categoryOptions = categoryData
    ? generateOptionsFromObject(categoryData, {
        valueKey: "slug",
        labelKey: "name",
      })
    : [];

  const SongInput = Input<TSongFormData>;
  const SongTextarea = TextArea<TSongFormData>;
  const SongSlug = SlugInput<TSongFormData>;
  const SongSelect = Select<TSongFormData>;

  return (
    <>
      <form className="grid grid-cols-2 gap-y-6 gap-x-8">
        <SongInput label="Name" name="name" />
        <SongSlug label="Slug" name="slug" slugFrom="name" />
        <SongInput label="Author" name="author" />
        <div></div>
        <SongSelect
          label="Language"
          name="language"
          defaultValue={defaultValue}
          options={languageOptions}
        />
        <SongSelect
          label="Category"
          name="category"
          options={categoryOptions}
        />
        <SongTextarea label="Chorus" name="chorus" />
        <SongTextarea label="Bridge" name="bridge" />
        <StanzaInput />
        <MusicInput />
      </form>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </>
  );
};

export default SongInputForm;
