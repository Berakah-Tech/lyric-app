import Link from "next/link";
import React from "react";
import {
  adminBookPage,
  adminCategoryPage,
  adminSongPage,
  adminUsersPage,
} from "../common/urls";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar-wrap  h-full min-w-[200px] bg-gray-200 p-8">
      <nav className="nav-link flex flex-col divide-y-2 divide-gray-300">
        <Link href={adminBookPage} className="py-2">
          Books
        </Link>
        <Link href={adminSongPage} className="py-2">
          Songs
        </Link>
        <Link href={adminCategoryPage} className="py-2">
          Categories
        </Link>
        <Link href={adminUsersPage} className="py-2">
          Users
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
