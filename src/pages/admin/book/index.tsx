import React, { type ReactElement } from "react";
import AdminLayout from "../../../layouts/AdminLayout";

const BookPage = () => {
  return <div>Book Page</div>;
};

BookPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default BookPage;
