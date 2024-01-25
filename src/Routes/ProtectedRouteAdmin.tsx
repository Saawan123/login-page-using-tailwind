import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRouteAdmin = () => {
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

  return <Outlet />;
};

export default ProtectedRouteAdmin;
