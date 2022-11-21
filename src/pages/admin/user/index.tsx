import React, { type ReactElement } from "react";
import AdminLayout from "../../../layouts/AdminLayout";

const UserPage = () => {
  return <div>User Page</div>;
};

UserPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default UserPage;
