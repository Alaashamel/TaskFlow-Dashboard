import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />


        <Route element={<AuthLayout />}>

          <Route 
            path="/login" 
            element={<Login />} 
          />

          <Route 
            path="/register" 
            element={<Register />} 
          />

        </Route>


        <Route element={<MainLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

        </Route>


      </Routes>

    </BrowserRouter>
  );
}

export default App;