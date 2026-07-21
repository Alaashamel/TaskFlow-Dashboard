import InputField from "../components/InputField";
import AuthLayout from "../layouts/AuthLayout";
import Button from "../components/Button";

export default function Register() {
  return (
    <AuthLayout>

      <h1 className="text-2xl font-bold mb-6">
        Create Account
      </h1>


      <InputField 
        placeholder="Name" 
      />


      <InputField 
        placeholder="Email" 
      />


      <InputField
        placeholder="Password"
        type="password"
      />


      <Button
    text="Register"
    type="submit"
/>


    </AuthLayout>
  );
}