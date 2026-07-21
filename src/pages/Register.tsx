import InputField from "../components/InputField";


export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">

        <h1 className="text-2xl font-bold mb-6">
          Create Account
        </h1>

        <InputField placeholder="Name" />

<InputField placeholder="Email" />

<InputField
  placeholder="Password"
  type="password"
/>
        <button className="w-full bg-blue-600 text-white p-3 rounded">
          Register
        </button>

      </div>
    </div>
  );
}