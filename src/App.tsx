import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import Settings from "./pages/Settings";

import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Default */}
        <Route
          path="/"
          element={
            <Navigate 
              to="/dashboard" 
              replace 
            />
          }
        />


        {/* Auth */}
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



        {/* Application */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />


          <Route
            path="/profile"
            element={<Profile />}
          />


          <Route
            path="/projects"
            element={<Projects />}
          />


          <Route
            path="/tasks"
            element={<Tasks />}
          />


          <Route
            path="/settings"
            element={<Settings />}
          />


        </Route>


        {/* Not Found */}
        <Route
          path="*"
          element={
            <Navigate to="/dashboard" replace />
          }
        />


      </Routes>

    </BrowserRouter>
  );
}


export default App;