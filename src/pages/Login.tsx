import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../components/InputField";
import Button from "../components/Button";



const loginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),
});


type LoginForm = z.infer<typeof loginSchema>;


export default function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });


  const onSubmit = (data: LoginForm) => {
    console.log(data);
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
    text="Login"
    type="submit"
/>


        </form>

      </div>

    </div>
  );
}