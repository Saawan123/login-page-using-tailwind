import React, { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../Components/SideBar";
import Header from "../Components/Header";

const ProtectedRouteAdmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "admin") {
      navigate(-1);
    }
  }, [role, navigate]);

  if (!role) {
    return <Navigate to="/login" />;
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <main className={`transition ease-in-out delay-150 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
      <Header />
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedRouteAdmin;
