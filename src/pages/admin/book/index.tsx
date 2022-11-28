import React, { type ReactElement } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { trpc } from "../../../utils/trpc";

const BookPage = () => {
  const { data } = trpc.book.getAll.useQuery();

  return (
    <div>
      <p>Book Page</p>
      {data && (
        <div className="">
          {data?.map((book) => (
            <div key={book.slug}>
              <p className="name">{book.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

BookPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default BookPage;
