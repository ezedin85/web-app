import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/utils";
import useLogout from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";

export function Sidebar({ showSidebar, setShowSidebar }) {
  const [activeDropdown, setActiveDropdown] = useState("");

  //hooks
  const pathname = useLocation().pathname; //get the current path to colorize the dropdown
  const logout = useLogout();
  const { admin } = useAuthContext();
  const activeDropdownStyle = (value) => {
    return { "bg-gray-800": activeDropdown === value };
  };
  const activePageStyle = (value) => {
    return { "bg-gray-950": pathname === value };
  };

  const getClasses = (route) => {
    return cn(
      "before:contents-[''] flex items-center text-sm text-gray-300 before:mr-3 before:h-1 before:w-1 before:rounded-full before:bg-gray-300 hover:text-blue-500",
      { "text-blue-500": pathname === route },
    );
  };

  const toggleDropdown = (value) => {
    if (activeDropdown === value)
      setActiveDropdown(""); //if active drop down clicked, hide the dropdown
    else setActiveDropdown(value);
  };

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      // Check the screen width and set sidebar accordingly
      if (window.innerWidth < 768) setShowSidebar(false);
      else setShowSidebar(true);
    };

    handleResize(); // Initial check on component mount

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const userRoutes = ["/dashboard/add-user", "/dashboard/users"];
    const profileRoutes = ["/dashboard/update-profile", "/dashboard/change-password"];
    const productsRoutes = ["/dashboard/product-form", "/dashboard/products"];

    if (userRoutes.includes(pathname)) setActiveDropdown("users");
    else if (profileRoutes.includes(pathname)) setActiveDropdown("profile");
    else if (productsRoutes.includes(pathname)) setActiveDropdown("products");
  }, [pathname]);

  return (
    <div>
      <div
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 bg-gray-900 p-4 transition-transform",
          { "-translate-x-full": !showSidebar }, //toggle the sidebar
        )}
      >
        <Link
          to=""
          className="flex items-center border-b border-b-gray-800 pb-4"
        >
          <img
            src="https://placehold.co/32x32"
            alt=""
            className="h-8 w-8 rounded object-cover"
          />
          <span className="ml-3 text-lg font-bold text-white">Hassen Trading</span>
        </Link>
        <ul className="mt-4">
          <li className="active mb-1">
            <Link
              to="/dashboard"
              className={cn(
                "flex items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-950 hover:text-blue-500 ",
                activePageStyle("/dashboard"),
              )}
            >
              <i className="ri-home-2-line mr-3 text-lg" />
              <span className="text-sm">Dashboard</span>
            </Link>
          </li>

          {admin?.role === "super" && ( //only super admins can see the users dropdown
            <li className="mb-1" onClick={() => toggleDropdown("users")}>
              <span
                className={cn(
                  "flex cursor-pointer items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-950 hover:text-blue-500",
                  activeDropdownStyle("users"),
                )}
              >
                <i className="ri-instance-line mr-3 text-lg" />
                <span className="text-sm">Users</span>
                <i className="ri-arrow-right-s-line ml-auto " />
              </span>
              <ul
                className={cn("mt-2 pl-7 ", {
                  hidden: activeDropdown !== "users",
                })}
              >
                <li className="mb-4">
                  <Link
                    to="/dashboard/add-user"
                    className={getClasses('/dashboard/add-user')}
                  >
                    Add New User
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/dashboard/users"
                    className={getClasses('/dashboard/users')}
                  >
                    Manage Users
                  </Link>
                </li>
              </ul>
            </li>
          )}

          <li className="mb-1" onClick={() => toggleDropdown("profile")}>
            <span
              className={cn(
                "flex cursor-pointer items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-950 hover:text-blue-500 ",
                activeDropdownStyle("profile"),
              )}
            >
              <i className="ri-map-pin-user-line mr-3 text-lg "></i>
              <span className="text-sm">My Profile</span>
              <i className="ri-arrow-right-s-line ml-auto " />
            </span>
            <ul
              className={cn("mt-2 pl-7 ", {
                hidden: activeDropdown !== "profile",
              })}
            >
              <li className="mb-4">
                <Link
                  to="/dashboard/update-profile"
                  className={getClasses('/dashboard/update-profile')}
                >
                  Update Profile
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/change-password"
                  className={getClasses('/dashboard/change-password')}                  
                >
                  Change Password
                </Link>
              </li>
            </ul>
          </li>

          <li className="mb-1" onClick={() => toggleDropdown("products")}>
            <span
              className={cn(
                "flex cursor-pointer items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-950 hover:text-blue-500 ",
                activeDropdownStyle("products"),
              )}
            >
              <i className="ri-map-pin-user-line mr-3 text-lg "></i>
              <span className="text-sm">Products</span>
              <i className="ri-arrow-right-s-line ml-auto " />
            </span>
            <ul
              className={cn("mt-2 pl-7 ", {
                hidden: activeDropdown !== "products",
              })}
            >
              <li className="mb-4">
                <Link
                  to="/dashboard/product-form"
                  className={getClasses('/dashboard/product-form')}
                >
                  Add New Product
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/dashboard/products"
                  className={getClasses('/dashboard/products')}                  
                >
                  Products
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-950 hover:text-blue-500 "
            >
              <i className="ri-settings-2-line mr-3 text-lg" />
              <span className="text-sm">Settings</span>
            </Link>
          </li>
          <li className="active mb-1 cursor-pointer" onClick={() => logout()}>
            <span className="flex items-center rounded-md px-4 py-2 text-gray-300 hover:bg-gray-950 hover:text-blue-500 ">
              <i className="ri-logout-circle-r-line mr-3 text-lg"></i>

              <span className="text-sm">Logout</span>
            </span>
          </li>
        </ul>
      </div>
      <div
        onClick={toggleSidebar}
        className={cn(
          "fixed left-0 top-0 z-40 h-full w-full bg-black/50 md:hidden",
          { hidden: !showSidebar },
        )}
      />
      {/* end: Sidebar */}
    </div>
  );
}
