import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import BottomNavbar from "../../components/bottom-navbar/BottomNavbar";
import UserContent from "../../components/user-content/UserContent";

const User = () => {
  return (
    <div className="container">
      <UserContent />
      <Sidebar />
      <BottomNavbar />
    </div>
  );
};

export default User;
