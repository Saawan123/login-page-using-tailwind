import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRouteUser = () => {
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "user") {
      navigate(-1);
    }
  }, [role, navigate]);

  if (!role) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRouteUser;
