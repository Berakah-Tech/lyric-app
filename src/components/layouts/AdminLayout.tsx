import React from "react";
import AdminHeader from "../admin/AdminHeader";
import AdminSidebar from "../admin/AdminSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div className="admin-layout-wrap h-screen">
      <AdminHeader />
      <div className="admin-layout-section flex h-full">
        <AdminSidebar />
        <div className="w-full p-8">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
