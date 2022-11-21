import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import {
  adminBookPage,
  adminCategoryPage,
  adminSongPage,
  adminUsersPage,
} from "../common/urls";

const AdminHeader = () => {
  const { status } = useSession({ required: true });

  const isAuthenticated = status === "authenticated";
  return (
    <div className="flex items-center justify-between border-b-2">
      <div className="icon">
        <p>Admin Header</p>
      </div>
      <nav className="nav-link -2 divide-x">
        <Link href={adminBookPage} className="px-2">
          Books
        </Link>
        <Link href={adminSongPage} className="px-2">
          Songs
        </Link>
        <Link href={adminCategoryPage} className="px-2">
          Categories
        </Link>
        <Link href={adminUsersPage} className="px-2">
          Users
        </Link>
      </nav>
      <div className="login-section">
        <button
          className="bg-black p-2 text-red-50"
          onClick={() => (isAuthenticated ? signOut() : signIn())}
        >
          {isAuthenticated ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
