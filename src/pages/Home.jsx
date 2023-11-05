import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Content from "../components/content/Content";
import SidebarRight from "../components/sidebar right/SidebarRight";
import BottomNavbar from "../components/bottom-navbar/BottomNavbar";

const Home = () => {
  return (
    <div className="container">
      <Content />
      <Sidebar />
      <SidebarRight />
      <BottomNavbar />
    </div>
  );
};

export default Home;
