import React, { type ReactElement } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { trpc } from "../../../utils/trpc";

const CategoryPage = () => {
  const { data } = trpc.category.getAll.useQuery();
  return (
    <div>
      <div>Category Page</div>
      <div>
        {data && (
          <div>
            {data.map((category) => (
              <div key={category.slug}>{category.name}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

CategoryPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default CategoryPage;
