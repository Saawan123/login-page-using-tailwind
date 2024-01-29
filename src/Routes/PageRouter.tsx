import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/Login";
import ForgetPassword from "../Pages/ForgetPassword";
import SignupPage from "../Pages/SignUp";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import ProtectedRouteUser from "./ProtectedRouteUser";
import AdminPanel from "../Pages/AdminPanel";
import UserProfile from "../Pages/UserProfile";
import PageNotFound from "../Components/PageNotFound";
import Dashboard from "../Pages/AdminPages/Dashboard";
import Settings from "../Pages/AdminPages/Settings";
import ServicePage from "../Pages/AdminPages/ServicePage";

const PageRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route element={<ProtectedRouteAdmin />}>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/service" element={<ServicePage />} />
          </Route>
          <Route element={<ProtectedRouteUser />}>
            <Route path="/user" element={<UserProfile />} />
          </Route>
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default PageRouter;
