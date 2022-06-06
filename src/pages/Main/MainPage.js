import React from "react";
import { Sidebar } from "../../components/Utilities/sidebar";
import  Navbar  from "../../components/Utilities/navbar";
import { Outlet } from "react-router-dom";
const MainPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full h-full overflow-y-auto">
        <Navbar />
        <Outlet/>
      </div>
    </div>
  );
};

export default MainPage;
