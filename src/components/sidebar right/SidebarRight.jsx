import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useMyFollowing from "../../hooks/useMyFollowing";
import "./SidebarRight.css";
import axios from "axios";

const SidebarRight = () => {
  const { myFollowing } = useMyFollowing();

  return (
    <div className="side-bar-disapear">
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side-bar-right"
        style={{ width: "280px" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Your Following</span>
        </a>
        <hr />
        {myFollowing.map((item, key) => (
          <div key={key} className="d-flex align-items-center mb-2">
            <div>
              <img
                src={item.profilePictureUrl}
                className="rounded-circle photo-profile"
                width={30}
                height={30}
              />
            </div>
            <div>
              <p className="ms-1">{item.username}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarRight;
