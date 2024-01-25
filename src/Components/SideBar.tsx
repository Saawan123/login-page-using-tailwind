import { useState } from "react";
import { eyeButtonShow, hamburgerIcon } from "../assets/Icons/Icons";
import { NavLink, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
//   const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const menu = [
    {
      name: "Dashboard",
      icon:eyeButtonShow,
   
      submenu: [],
      link: "",
    },
    {
      icon:eyeButtonShow,
      name: "Contact",
    // //   icon: BuyersIcon,
      link: "manage-listings",
      submenu: [],
    },
    {
      icon:eyeButtonShow,
      name: "Services",
    // //   icon: SellersIcon,
      link: "manage-seller",
      submenu: [],
    },
    {
      name: "Settings",
      icon:eyeButtonShow,

    // //   icon: MarketingIcon,
      link: "marketing",
      submenu: [],
    },
    {
      name: "Reports",
      icon:eyeButtonShow,

    // //   icon: ChartlineIcon,
      link: "report",
      submenu: [],
    },
    {
      name: "Admins",
      icon:eyeButtonShow,

    // //   icon: settingIcon,
      link: "admin-panel",
      submenu: [],
    },
    {
        name: "LogOut",
        icon:eyeButtonShow,
  
      // //   icon: settingIcon,
        link: "/login",
        submenu: [],
      }

  ];
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <div
          className="fixed  z-30 flex items-center cursor-pointer left-10 top-6"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {hamburgerIcon}
        </div>
      )}
      <div
        className={`top-0 left-0 w-[35vw] bg-green-600 p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <div className="top-0 left-0 w-[35vw] bg-green-600 p-10 pl-20 text-white fixed h-full ">
        <nav className="mt-10">
        {menu.map((item:any, index:any) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) => `flex items-center mt-4 py-2 px-6 bg-opacity-25 text-gray-700 dark:text-gray-100 ${isActive ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
            onClick={item.onClick}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
