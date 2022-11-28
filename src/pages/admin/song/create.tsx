import { zodResolver } from "@hookform/resolvers/zod";
import { type ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RightSection from "../../../components/admin/RightSection";
import AdminLayout from "../../../components/layouts/AdminLayout";
import SongInputForm from "../../../components/SongInputForm";
import type { TSongFormData } from "../../../types/types";
import { trpc } from "../../../utils/trpc";
import { SongSchema } from "../../../validations/zodSchemas";

const FORM_ID = "song-input-form";

const CreateSongPage = () => {
  const formMethods = useForm<TSongFormData>({
    resolver: zodResolver(SongSchema),
  });
  const { handleSubmit } = formMethods;

  const { mutate } = trpc.song.add.useMutation();

  const onFormSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <div className="create-song-wrap">
      <div className="create-song-container flex">
        <div className="w-full">
          <div className="create-song-header">
            <h1>Add a Song</h1>
          </div>
          <div className="song-input-section mr-8 mt-8">
            <FormProvider {...formMethods}>
              <SongInputForm onFormSubmit={onFormSubmit} formID={FORM_ID} />
            </FormProvider>
          </div>
        </div>
        <RightSection formID={FORM_ID} />
      </div>
    </div>
  );
};

CreateSongPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default CreateSongPage;
