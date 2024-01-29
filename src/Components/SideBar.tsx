import { NavLink, useNavigate } from "react-router-dom";
import ToastifyShow from "./ToastifyShow";
import {
  GraphIcon,
  hamburgerIcon,
  logoutIcon,
  serviceIcon,
  settingIcon,
} from "../assets/Icons/Icons";
import swarajLogo from "../assets/swaraj.jpg";

const Sidebar = ({ isSidebarOpen, onToggle }: any) => {
  const navigate = useNavigate();
  const menu = [
    {
      name: "Dashboard",
      icon: GraphIcon,
      link: "/dashboard",
    },
    {
      name: "Services",
      icon: serviceIcon,
      link: "/service",
    },

    {
      name: "Settings",
      icon: settingIcon,
      link: "/setting",
    },
    {
      name: "LogOut",
      icon: logoutIcon,
      link: "/login",
      onClick: () => {
        localStorage.clear();
        ToastifyShow("Logout successfully", "success");
      },
    },
  ];

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-64" : "w-20"
      } h-screen fixed top-0 left-0 bg-green-900 transition-all ease-in-out duration-300`}
    >
      <div className="flex gap-x-10">
        <div>
          <img
            src={swarajLogo}
            alt="logo"
            className="cursor-pointer max-w-full mt-2 m-1"
            onClick={() => {
              navigate("/login");
              localStorage.clear();
            }}
            draggable={false}
          />
        </div>
        <div>
          <span
            className="menu-icon cursor-pointer absolute right-0 mt-2 m-3"
            onClick={onToggle}
          >
            {hamburgerIcon}
          </span>
        </div>
      </div>

      <nav className="mt-12 overflow-y-auto">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center gap-x-4 px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 ${
                isActive
                  ? "bg-yellow-700 text-white"
                  : "text-gray-400 hover:bg-yellow-700 hover:text-white"
              }`
            }
            onClick={item.onClick}
          >
            <span>{item.icon}</span>
            {isSidebarOpen && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
