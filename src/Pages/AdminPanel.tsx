import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/SideBar";
import { useState } from "react";

const AdminPanel = () => {
  const navigate = useNavigate();

  return (
    <div id="main">
      <div className=" container">
        <div className="flex justify-between">
          <div>
            <Sidebar />
          </div>
          <div className="flex content-center mt-56 mr-56">
            <Button
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              Go Back To Login Screen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
