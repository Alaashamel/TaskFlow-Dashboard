import { useNavigate } from "react-router-dom";

export default function UserMenu() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
        {user.name?.charAt(0)}
      </div>

      <div className="text-right">
        <p className="font-semibold">
          {user.name}
        </p>

        <p className="text-sm text-gray-500">
          {user.email}
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