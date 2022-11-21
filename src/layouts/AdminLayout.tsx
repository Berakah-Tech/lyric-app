import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div className="admin-layout-wrap ">
      <AdminHeader />
      <div className="admin-layout-section mt-8 flex">
        <AdminSidebar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
