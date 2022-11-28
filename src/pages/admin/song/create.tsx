import { type ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";
import SongInputForm from "../../../components/SongInputForm";
import AdminLayout from "../../../layouts/AdminLayout";
import type { TSongFormData } from "../../../types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SongSchema } from "../../../validations/zodSchemas";

const CreateSongPage = () => {
  const formMethods = useForm<TSongFormData>({
    resolver: zodResolver(SongSchema),
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
              <SongInputForm />
            </FormProvider>
          </div>
        </div>
        <div className="song-right-section min-w-[300px] bg-gray-100">
          right section
        </div>
      </div>
    </div>
  );
};

CreateSongPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default CreateSongPage;
