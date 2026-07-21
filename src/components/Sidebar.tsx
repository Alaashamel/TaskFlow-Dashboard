import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Tasks",
    path: "/tasks",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600"
                    : "hover:bg-gray-800"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}