import type { ReactNode } from "react";
import React from "react";
import AdminHeader from "../../components/AdminHeader";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
};

export default AdminLayout;
