import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Content from "../../components/content/content";
import SidebarRight from "../../components/sidebar right/SidebarRight";
import BottomNavbar from "../../components/bottom navbar/BottomNavbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <Content />
      <SidebarRight />
      <BottomNavbar />
    </div>
  );
};

export default Home;
