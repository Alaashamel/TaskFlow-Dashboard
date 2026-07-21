import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dropdown() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          {user.name?.charAt(0)}
        </div>

        <div className="text-left">
          <p className="font-semibold">
            {user.name}
          </p>

          <p className="text-xs text-gray-500">
            {user.email}
          </p>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-52 bg-white rounded-lg shadow-lg border overflow-hidden">
          <button
            className="w-full text-left px-4 py-3 hover:bg-gray-100"
          >
            👤 Profile
          </button>

          <button
            className="w-full text-left px-4 py-3 hover:bg-gray-100"
          >
            ⚙ Settings
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
          >
            🚪 Logout
          </button>
        </div>
      )}
    </div>
  );
}