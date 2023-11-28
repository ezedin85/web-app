import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import { Sidebar } from "./Sidebar";
import Main from "./Main";
import { useState } from "react";

export default function AdminAuthLayout() {
  const pathname = useLocation().pathname; //get the current path
  const { admin, loading } = useAuthContext();
  const [showSidebar, setShowSidebar] = useState(true);

  //case 1: while verifying show 'Loading'
  if (loading) return <>Loading...</>;
  //case 2: if there is a verified admin, return the actual page
  else if (admin)
    return (
      <>
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Main showSidebar={showSidebar} setShowSidebar={setShowSidebar}>
          <Outlet />
        </Main>
      </>
    );
  //case 3: else redirect to the login page
  else return <Navigate to={`/login?redirect-to=${pathname}`} />;
}
