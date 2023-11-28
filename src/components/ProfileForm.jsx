
export default function ProfileForm({userToBeEdited, handleChange, handleSubmit, isLoading}) {
  return (
    <div className="w-96 p-1 shadow " >
        <div className="block max-w-md rounded-lg bg-white p-6 pb-24 pt-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
          <h3 className="mb-4 text-2xl text-gray-500">Edit User Data</h3>
          <form onSubmit={handleSubmit}>
            <div className="relative my-2">
              <input
                type="text"
                className="peer block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3 ps-11 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                placeholder="Enter Full Name"
                value={userToBeEdited.name}
                name="name"
                onChange={handleChange}
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50">
                <i className="ri-user-line text-gray-500"></i>
              </div>
            </div>

            <div className="relative my-2">
              <input
                type="email"
                className="peer block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3 ps-11 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                placeholder="Enter Email"
                name="email"
                value={userToBeEdited.email}
                onChange={handleChange}
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4 peer-disabled:pointer-events-none peer-disabled:opacity-50">
                <i className="ri-mail-line text-gray-500"></i>
              </div>
            </div>

            <div>
              <select
                className="block w-full rounded-lg border-transparent bg-gray-100 px-4 py-3  text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                name="role"
                value={userToBeEdited.role}
                onChange={handleChange}
              >
                <option value="" disabled>
                  {" "}
                  Select Role{" "}
                </option>
                <option className="block p-3" value="super">
                  Super Admin
                </option>
                <option value="regular">Regular Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mt-8 inline-block w-full rounded bg-blue-500 px-6 py-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
              disabled={isLoading}
            >
              Edit User
            </button>
          </form>
        </div>
      </div>
  )
}
