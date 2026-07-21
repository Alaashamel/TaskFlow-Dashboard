import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">

      <div className="absolute top-8 left-8 text-white text-3xl font-bold">
        TaskFlow
      </div>


      <div className="bg-white w-96 p-8 rounded-xl shadow-xl">
        {children}
      </div>

    </div>
  );
}