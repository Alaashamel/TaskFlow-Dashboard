import InputField from "../components/InputField";
import AuthLayout from "../layouts/AuthLayout";


export default function Login() {
  return (
    <AuthLayout>

      <h1 className="text-2xl font-bold mb-6">
        Login
      </h1>

      <InputField
        placeholder="Email"
      />

      <InputField
        placeholder="Password"
        type="password"
      />


      <button className="w-full bg-blue-600 text-white p-3 rounded">
        Login
      </button>


    </AuthLayout>
  );
}