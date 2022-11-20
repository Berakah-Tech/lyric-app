import React, { type ReactElement } from "react";
import AdminLayout from "../../../layouts/AdminLayout";

const SongPage = () => {
  return <div>Song Page</div>;
};

SongPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default SongPage;
