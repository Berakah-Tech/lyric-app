import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data, status } = useSession();
  console.log("🚀 ~ file: Header.tsx ~ line 5 ~ Header ~ data", data);

  const isAuthenticated = status === "authenticated";

  return (
    <div>
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
