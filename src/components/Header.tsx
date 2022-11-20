import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { status } = useSession();

  const isAuthenticated = status === "authenticated";

  return (
    <div className="flex border-b-2">
      <p>Header</p>
      <button
        className="bg-black p-2 text-red-50"
        onClick={() => (isAuthenticated ? signOut() : signIn())}
      >
        {isAuthenticated ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
};

export default Header;
