import Dropdown from "./Dropdown";

export default function Navbar() {
  return (
    <nav className="h-16 bg-white border-b shadow-sm flex items-center justify-between px-6">
      <h1 className="text-2xl font-bold text-blue-600">
        TaskFlow
      </h1>

      <Dropdown />
    </nav>
  );
}