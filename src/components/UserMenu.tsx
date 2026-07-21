import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface UserMenuProps {
  name: string;
  email: string;
}

export default function UserMenu({
  name,
  email,
}: UserMenuProps) {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
        {name.charAt(0).toUpperCase()}
      </div>

      <div className="text-right">
        <p className="font-semibold">
          {name}
        </p>

        <p className="text-sm text-gray-500">
          {email}
        </p>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
      >
        Logout
      </button>
    </div>
  );
}