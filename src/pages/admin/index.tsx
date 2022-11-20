import React, { type ReactElement } from "react";
import AdminLayout from "../../layouts/AdminLayout";

const AdminPage = () => {
  return <div>Admin Page</div>;
};

AdminPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminPage;
