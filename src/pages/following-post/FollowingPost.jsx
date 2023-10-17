import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import FollowingContent from "../../components/following-post-content/FollowingContent";
import SidebarRight from "../../components/sidebar right/SidebarRight";
import BottomNavbar from "../../components/bottom-navbar/BottomNavbar";

const FollowingPost = () => {
  return (
    <div className="container">
      <FollowingContent />
      <Sidebar />
      <SidebarRight />
      <BottomNavbar />
    </div>
  );
};

export default FollowingPost;
