import React, { type ReactElement } from "react";
import AdminLayout from "../../../layouts/AdminLayout";
import { trpc } from "../../../utils/trpc";

const UserPage = () => {
  const { data } = trpc.user.getAll.useQuery();

  return (
    <div>
      <div>User Page</div>
      {data && (
        <div>
          {data.map((user) => (
            <div key={user.id} className="flex">
              <p className="mr-4">{user.name}</p>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

UserPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default UserPage;
