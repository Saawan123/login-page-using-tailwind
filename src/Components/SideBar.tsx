import { NavLink, useNavigate } from "react-router-dom";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiDashboard2Line,
  RiTruckFill,
} from "react-icons/ri";
import { LuFileSpreadsheet, LuTruck } from "react-icons/lu";
import ToastifyShow from "./ToastifyShow";

import swarajLogo from "../assets/swaraj.png";
import { useState } from "react";
import { RightArrow, LeftArrow } from "../assets/Icons/Icons";

const Sidebar = ({ isSidebarOpen, onToggle }: any) => {
  const navigate = useNavigate();
  const menu = [
    {
      name: "Dashboard",
      icon: <RiDashboard2Line size={25} color={"green"} />,
      link: "/dashboard",
    },
    {
      name: "Collection",
      icon: <LuFileSpreadsheet size={25} color={"green"} />,
      link: "/service",
    },
    {
      name: "Installation",
      icon: <LuTruck size={25} color={"green"} />,
      link: "/setting",
      subItems: [
        { name: "All Schemes", link: "/all" },
        { name: "Create New Schemes", link: "/new" },
        { name: "Draft Schemes", link: "/draft" },
      ],
    },
    {
      name: "Track",
      icon: <RiTruckFill size={25} color={"green"} />,
      link: "/track",
    },
  ];

  const [openItem, setOpenItem] = useState(null);

  const handleItemClick = (item: any) => {
    if (item.subItems) {
      setOpenItem(openItem === item.name ? null : item.name);
    } else {
      navigate(item.link);
    }
  };
  return (
    <aside
      className={`${
        isSidebarOpen ? "w-64" : "w-20"
      } h-full fixed top-0 left-0 bg-green-900 transition-all ease-in-out duration-900`}
    >
      <div className="flex gap-x-12">
        <div>
          {/* {isSidebarOpen && ( */}
          <img
            src={swarajLogo}
            alt="logo"
            className="cursor-pointer max-w-full   m-2"
            onClick={() => {
              navigate("/login");
              localStorage.clear();
            }}
            draggable={false}
          />
          {/* <span className="text-xs text-white m-2">
            SCHEME MANAGEMENT SYSTEM
          </span> */}
          {/* )} */}
        </div>
        <div>
          <span
            className="menu-icon cursor-pointer absolute  border-green-700 mt-8 bg-green-700   
             rounded-full right-0 -mr-4 mt-3"
            onClick={onToggle}
          >
            {isSidebarOpen ? LeftArrow : RightArrow}
          </span>
        </div>
      </div>

      <nav className=" overflow-hidden rounded bg-green-700 m-2  mt-4 pt-8 pb-8">
        {menu.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `flex items-center  gap-x-4 px-4 py-2 text-sm  font-medium rounded-lg m-1 no-underline transition-colors duration-150 ${
                  isActive
                    ? "bg-green-800  text-white"
                    : "text-white hover:bg-green-800 hover:text-white"
                }`
              }
              onClick={() => handleItemClick(item)}
            >
              <span className="border-gray-600 bg-gray-100">{item.icon}</span>
              {isSidebarOpen && <span>{item.name}</span>}
              {item.subItems && (
                <span className="ml-auto ">
                  {openItem === item.name ? (
                    <RiArrowUpSLine size={20} />
                  ) : (
                    <RiArrowDownSLine size={20} />
                  )}
                </span>
              )}
            </NavLink>
            {item.subItems && (
              <div
                className={`overflow-hidden ml-8 transition-max-height  duration-500 ease-in-out ${
                  openItem === item.name ? "max-h-96" : "max-h-0"
                }`}
              >
                {item.subItems.map((subItem, subIndex) => (
                  <NavLink
                    key={subIndex}
                    to={subItem.link}
                    className="block px-4  py-2 text-sm text-white no-underline hover:bg-green-800 m-4 rounded"
                  >
                    {subItem.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
