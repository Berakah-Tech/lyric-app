import React, { type ReactElement } from "react";
import AdminLayout from "../../../layouts/AdminLayout";

const CategoryPage = () => {
  return <div>Category Page</div>;
};

CategoryPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default CategoryPage;
