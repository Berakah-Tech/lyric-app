import React from "react";
import AdminHeader from "./AdminHeader";

interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
};

export default AdminLayout;
