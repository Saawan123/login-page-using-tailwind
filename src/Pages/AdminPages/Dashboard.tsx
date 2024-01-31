import React from "react";
import CardDetails from "../../Components/DashboardCards";
import Data from "../../Components/Data";

const Dashboard = () => {
  return <div className="m-8 bg-green-200 h-screen ">

    <CardDetails/>
    <Data/>
  </div>;
};

export default Dashboard;
