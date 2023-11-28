import { Outlet } from "react-router-dom";
import { cn } from "../utils/utils";
import useLogout from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";

export default function Main({ showSidebar, setShowSidebar }) {
  const logout = useLogout()
  const { admin } = useAuthContext();

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <main
      className={cn("main min-h-screen w-full bg-gray-50 transition-all", {
        "md:ml-64": showSidebar,
        "md:w-[calc(100%-256px)]": showSidebar,
      })}
    >
      <div className="sticky left-0 top-0 z-30 flex items-center bg-white px-6 py-2 shadow-md shadow-black/5">
        <button
          type="button"
          onClick={toggleSidebar}
          className="text-lg text-gray-600"
        >
          <i className="ri-menu-line" />
        </button>
        <ul className="ml-4 flex items-center text-sm">
          <li className="mr-2">
            <a
              href="#"
              className="font-medium text-gray-400 hover:text-gray-600"
            >
              Dashboard
            </a>
          </li>
          <li className="mr-2 font-medium text-gray-600">|</li>
          <li className="mr-2 font-medium text-gray-600">{admin.name}</li>
        </ul>

        <ul className="ml-auto flex items-center">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:bg-gray-50 hover:text-gray-600"
          >
            <i className="ri-search-line"></i>
          </button>

          <button
            type="button"
            className="dropdown-toggle flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:bg-gray-50 hover:text-gray-600"
          >
            <i className="ri-notification-3-line"></i>
          </button>

          <button
            type="button"
            onClick={()=>logout()}
            className="dropdown-toggle flex h-8 w-8 items-center justify-center rounded text-gray-400 hover:bg-red-50 hover:text-red-600"
          >
            <i className="ri-logout-circle-r-line"></i>
          </button>
        </ul>
      </div>
      <Outlet />
    </main>
  );
}
