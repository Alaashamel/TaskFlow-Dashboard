import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <nav className="h-16 border-b bg-white flex items-center justify-between px-6 shadow-sm">
      <h1 className="text-xl font-bold text-blue-600">
        TaskFlow
      </h1>

      <div className="flex items-center gap-4">
        <span className="font-medium">
          {user.name}
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}