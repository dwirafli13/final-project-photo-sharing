import React from "react";
import { Link } from "react-router-dom";
import "./SidebarRight.css";

const SidebarRight = () => {
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
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link text-white" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Search
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              Create Post
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default SidebarRight;
