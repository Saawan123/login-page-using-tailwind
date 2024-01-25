import { NavLink } from "react-router-dom";
import NotFound from "../assets/404.jpg";

export default function PageNotFound() {
  return (
    <div className="relative min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Image */}
      <img
        src={NotFound}
        alt="Page Not Found"
        className="absolute inset-0 w-full h-full object-cover opacity-50 sm:opacity-100"
        draggable={false}
      />

      {/* Content */}
      <div className="relative z-10 p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-2 text-center">Page Not Found</h2>
        <p className="mb-4">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <NavLink
          to={"/login"}
          className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-medium rounded px-4 py-2 transition duration-300"
        >
          Go to Login
        </NavLink>
      </div>
    </div>
  );
}
