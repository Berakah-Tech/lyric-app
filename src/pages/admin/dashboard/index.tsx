import React, { ReactElement } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { trpc } from "../../../utils/trpc";

const DashboardPage = () => {
  return <div>Dashboard Page</div>;
};

DashboardPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default DashboardPage;
