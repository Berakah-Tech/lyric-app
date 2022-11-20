import { useSession } from "next-auth/react";
import React, { type ReactElement } from "react";
import AdminLayout from "../../layouts/AdminLayout";

const AdminPage = () => {
  const { data: session } = useSession();

  if (!session) return null;
  return (
    <div>
      <p>Welcome {session.user?.name}</p>
    </div>
  );
};

AdminPage.getLayout = (page: ReactElement) => {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminPage;
