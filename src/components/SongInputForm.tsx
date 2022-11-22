import React from "react";
import { useFormContext } from "react-hook-form";
import Input from "./elements/Input";
import Select from "./elements/Select";

const SongInputForm = () => {
  const { watch } = useFormContext();
  return (
    <>
      <form action="" className="grid grid-cols-2 gap-y-6 gap-x-8">
        <Input label="Name" name="name" />
        <Input label="Slug" name="slug" />
        <Input label="Author" name="author" />
        <Select label="Language" name="language" />
      </form>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </>
  );
};

export default SongInputForm;
