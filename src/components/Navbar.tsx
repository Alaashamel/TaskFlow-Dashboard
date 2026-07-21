import { useAuth } from "../context/AuthContext";
import UserMenu from "./UserMenu";

export default function Navbar() {
  const { isAuthenticated } = useAuth();

  return (
    <nav className="h-16 border-b bg-white flex items-center justify-between px-6">
      <h1 className="text-xl font-bold">
        TaskFlow
      </h1>

      {isAuthenticated && <UserMenu />}
    </nav>
  );
}