import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import InputField from "../components/InputField";
import Button from "../components/Button";
import { login } from "../services/auth";
import { useAuth } from "../context/AuthContext";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { login: loginUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      setLoading(true);

      const response = await login(data);

      loginUser(response.user, response.token);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h1 className="text-2xl font-bold mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            placeholder="Email"
            {...register("email")}
          />

          {errors.email && (
            <p className="text-red-500 text-sm mb-2">
              {errors.email.message}
            </p>
          )}

          <InputField
            placeholder="Password"
            type="password"
            {...register("password")}
          />

          {errors.password && (
            <p className="text-red-500 text-sm mb-2">
              {errors.password.message}
            </p>
          )}

          <Button
            text={loading ? "Loading..." : "Login"}
            type="submit"
            disabled={loading}
          />
        </form>
      </div>
    </div>
  );
}