import { signIn, signOut, useSession } from "next-auth/react";

const AdminHeader = () => {
  const { status } = useSession({ required: true });

  const isAuthenticated = status === "authenticated";
  return (
    <div className="flex items-center justify-between border-b-2 p-4">
      <div className="icon">
        <p>Admin Header</p>
      </div>
      <div className="login-section">
        <button
          className="btn-black"
          onClick={() => (isAuthenticated ? signOut() : signIn())}
        >
          {isAuthenticated ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
