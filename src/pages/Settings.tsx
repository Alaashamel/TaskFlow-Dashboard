import { useAuth } from "../context/AuthContext";


export default function Settings() {

  const { user } = useAuth();


  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-2">
        Settings
      </h1>

      <p className="text-gray-500 mb-8">
        Manage your account settings
      </p>



      <div className="
        bg-white
        rounded-xl
        shadow
        p-8
        max-w-3xl
      ">


        <h2 className="text-xl font-bold mb-6">
          Profile Settings
        </h2>



        <div className="space-y-5">


          <div>

            <label className="text-gray-500 text-sm">
              Name
            </label>

            <input
              value={user?.name}
              readOnly
              className="
              w-full
              mt-2
              border
              rounded-lg
              p-3
              "
            />

          </div>



          <div>

            <label className="text-gray-500 text-sm">
              Email
            </label>

            <input
              value={user?.email}
              readOnly
              className="
              w-full
              mt-2
              border
              rounded-lg
              p-3
              "
            />

          </div>


          <div>

            <label className="text-gray-500 text-sm">
              Theme
            </label>

            <select
              className="
              w-full
              mt-2
              border
              rounded-lg
              p-3
              "
            >
              <option>
                Light
              </option>

              <option>
                Dark
              </option>

            </select>

          </div>



        </div>


        <button
          className="
          mt-8
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-6
          py-3
          rounded-lg
          "
        >
          Save Changes
        </button>


      </div>


    </div>
  );
}