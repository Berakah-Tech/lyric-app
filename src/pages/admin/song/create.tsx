import { zodResolver } from "@hookform/resolvers/zod";
import { type ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";
import AdminLayout from "../../../components/layouts/AdminLayout";
import FormLayout from "../../../components/layouts/FormLayout";
import SongInputForm from "../../../components/SongInputForm";
import type { TSong } from "../../../types/types";
import { SongSchema } from "../../../validations/zodSchemas";

const FORM_ID = "song-input-form";

const CreateSongPage = () => {
  const formMethods = useForm<TSong>({
    resolver: zodResolver(SongSchema),
  });

  return (
    <FormProvider {...formMethods}>
      <SongInputForm formID={FORM_ID} />
    </FormProvider>
  );
};

CreateSongPage.getLayout = (page: ReactElement) => {
  return (
    <AdminLayout>
      <FormLayout formID={FORM_ID}>{page}</FormLayout>
    </AdminLayout>
  );
};

export default CreateSongPage;
