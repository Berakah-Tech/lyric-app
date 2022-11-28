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
import Switch from "./elements/Switch";

interface ISongInputFormProps {
  onFormSubmit: (e?: React.FormEvent) => Promise<void>;
  formID: string;
}
const SongInputForm = ({ onFormSubmit, formID }: ISongInputFormProps) => {
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
  const SongSwitch = Switch<TSongFormData>;

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
          defaultValue={defaultValue}
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
