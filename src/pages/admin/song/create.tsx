import { type ReactElement } from "react";
import Input from "../../../components/elements/Input";
import AdminLayout from "../../../layouts/AdminLayout";

const CreateSongPage = () => {
  return (
    <div className="create-song-wrap">
      <div className="create-song-container flex">
        <div className="w-full">
          <div className="create-song-header">
            <h1>Add a Song</h1>
          </div>
          <div className="song-input-section flex-1">
            <div>
              <Input label="Name" name="name" />
            </div>
          </div>
        </div>
        <div className="song-right-section w-[200px] bg-gray-100">tests</div>
      </div>
    </div>
  );
};

CreateSongPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default CreateSongPage;
