export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <div className="flex items-center gap-6">

          <div className="w-28 h-28 rounded-full bg-blue-600 text-white flex items-center justify-center text-5xl font-bold">
            {user.name?.charAt(0)}
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {user.name}
            </h1>

            <p className="text-gray-500 mt-1">
              {user.email}
            </p>

            <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              Frontend Developer
            </span>
          </div>

        </div>

        <hr className="my-8" />

        <div className="grid grid-cols-2 gap-6">

          <div>
            <label className="text-gray-500 text-sm">
              Full Name
            </label>

            <input
              value={user.name}
              readOnly
              className="w-full mt-2 border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">
              Email
            </label>

            <input
              value={user.email}
              readOnly
              className="w-full mt-2 border rounded-lg p-3"
            />
          </div>

        </div>

        <div className="flex gap-4 mt-8">

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
            Edit Profile
          </button>

          <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition">
            Change Password
          </button>

        </div>

      </div>
    </div>
  );
}