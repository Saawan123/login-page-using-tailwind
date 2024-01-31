
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
import ServicePage from "../Pages/AdminPages/CollectionPage";
import TrackPage from "../Pages/AdminPages/TrackPage";
import Installation from "../Pages/AdminPages/installationPage/installation";
import NewSchemes from "../Pages/AdminPages/installationPage/NewSchemes";
import AllSchemes from "../Pages/AdminPages/installationPage/AllSchemes";
import DraftSchemes from "../Pages/AdminPages/installationPage/DraftSchemes";
import Collection from "../Pages/AdminPages/CollectionPage";

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
            <Route path="/setting" element={<Installation />} />
            <Route path="/service" element={<Collection />} />
            <Route path="/track" element={<TrackPage />} />
            <Route path="/new" element={<NewSchemes />} />
            <Route path="/all" element={<AllSchemes />} />
            <Route path="/draft" element={<DraftSchemes />} />
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
