import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import AdminAuthLayout from "./components/AdminAuthLayout";
import AdminLayout from "./components/AdminLayout";
import NoMatch from "./pages/NoMatch";
import UserForm from "./pages/UserForm";
import Users from "./pages/Users";
import SuperAdminAuthLayout from "./components/SuperAdminAuthLayout";
import ChangePwd from "./pages/ChangePwd";
import ChangeProfile from "./pages/ChangeProfile";
import ProductForm from "./pages/ProductForm";
import Products from "./pages/Products";
import { useEffect } from "react";
import ProductsList from "./pages/user/ProductsList";
import SelectedProducts from "./pages/user/SelectedProducts";
import { UserContextProvider } from "./contexts/userContext";
import './App.css'

//the telegram web app
const tele = window.Telegram.WebApp;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">

        <Route path="products-list" element={<UserContextProvider><ProductsList /></UserContextProvider>} />
        <Route path="selected-products" element={<UserContextProvider><SelectedProducts /></UserContextProvider>} />

      {/* all admin routes including the login page */}
      <Route
        element={
          <AuthContextProvider>
            <AdminLayout />
          </AuthContextProvider>
        }
      >
        <Route path="login" element={<Login />} />

        {/*Verified admin ONLY routes*/}
        <Route path="dashboard">
          {/* BOTH SUPER and Regulat admin routes */}
          <Route element={<AdminAuthLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="change-password" element={<ChangePwd />} />
            <Route path="update-profile" element={<ChangeProfile />} />

            <Route path="product-form" element={<ProductForm />} />
            <Route path="products" element={<Products />} />
          </Route>

          {/* SUPER admin only routes */}
          <Route element={<SuperAdminAuthLayout />}>
            <Route path="add-user" element={<UserForm />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NoMatch />} />
    </Route>,
  ),
);
function App() {
  useEffect(() => {
    tele.ready();
  });

  return <RouterProvider router={router} />;
}

export default App;
