import React, { type ReactElement } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { trpc } from "../../../utils/trpc";

const UserPage = () => {
  const { data } = trpc.user.getAll.useQuery();
  console.log("🚀 ~ file: index.tsx ~ line 7 ~ UserPage ~ data", data);

  return (
    <>
      <div>User Page</div>
    </>
  );
};

UserPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default UserPage;
