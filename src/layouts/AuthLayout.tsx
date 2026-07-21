import { Outlet } from "react-router-dom";


export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="w-full max-w-md">

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            TaskFlow
          </h1>
        </div>


        <Outlet />

      </div>

    </div>
  );
}