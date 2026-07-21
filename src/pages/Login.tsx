export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-96">

        <h1 className="text-2xl font-bold mb-6">
          Login
        </h1>

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Email"
        />

        <input
          className="w-full border p-3 rounded mb-4"
          placeholder="Password"
          type="password"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded">
          Login
        </button>

      </div>
    </div>
  );
}