import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import swarajLogo from "../assets/swaraj.png";
import ToastifyShow from "./ToastifyShow";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate: any = useNavigate();
  const [openItem, setOpenItem] = useState(false);
  const items = [
    {
      name: "AKHILESH SINGH",
      id: 1,
      onClick: () => {/* handle click for AKHILESH SINGH */},
    },
    {
      name: "MY ACCOUNT",
      id: 2,
      onClick: () => {/* handle click for MY ACCOUNT */},
    },
    {
      name: "LOGOUT",
      id: 3,
      onClick: () => {console.log("hello")}, // Navigate to /login on click
    },
  ];
  

  return (
    <div className="bg-green-200 py-4 m-8 rounded flex justify-between">
      <div className="ml-8">title</div>
      <div className="mr-8 flex items-center gap-x-4">
        <img
          src={swarajLogo}
          alt="logo"
          className="cursor-pointer h-20 w-20 rounded-full  m-2"
          onClick={() => {
            ToastifyShow("Mene Bola Click karne Ko?????", "error");
          }}
          draggable={false}
        />
        <div className="flex flex-col">
          <span className="font-bold text-xl">AKHILESH SINGH</span>
          <span className="text-gray-500 text-sm font-bold">Area Manager</span>
        </div>
        <div className="relative ">
          <button onClick={() => setOpenItem(!openItem)}>
            {openItem ? (
              <RiArrowUpSLine size={20} />
            ) : (
              <RiArrowDownSLine size={20} />
            )}
          </button>
          {openItem && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md font-bold shadow-xl z-20">
              {items.map((item) => (
                <div
                  key={item.id}
                  onClick={item.onClick}
                  className="block px-4 py-2 text-sm text-gray-700 no-underline hover:bg-gray-100"
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
