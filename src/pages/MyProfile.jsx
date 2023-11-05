import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import SidebarRight from "../components/sidebar right/SidebarRight";
import BottomNavbar from "../components/bottom-navbar/BottomNavbar";
import MyProfileContent from "../components/my-profile-content/MyProfileContent";

const MyProfile = () => {
  return (
    <div className="container">
      <MyProfileContent />
      <Sidebar />
      <BottomNavbar />
    </div>
  );
};

export default MyProfile;
