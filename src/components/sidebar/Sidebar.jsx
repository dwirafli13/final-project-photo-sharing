import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side-bar d-none d-md-inline"
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <img src="3.png" width={40}/><span className="fs-4 d-none d-xl-inline">ShutterStory</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link text-white" aria-current="page">
              <i className="fs-5 bi bi-house"></i><span className="ms-3 d-none d-xl-inline">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
            <i className="fs-5 bi bi-search"></i><span className="ms-3 d-none d-xl-inline">Search</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
            <i className="fs-5 bi bi-plus-square"></i><span className="ms-3 d-none d-xl-inline">Create Post</span>
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2 photo-profile"
            />
            <strong className="d-none d-xl-inline">mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

{
  /* <div className="side-bar container">
  <img src="logoipsum-297.svg" />
  <ul>
    <li>
      <Link to={"/home"}>Home</Link>
    </li>
    <li>
      <Link to={"/home"}>Search</Link>
    </li>
    <li>
      <Link to={"/user"}>Profile</Link>
    </li>
    <li>Create Post</li>
    <li>
      <button>Log Out</button>
    </li>
  </ul>
</div>; */
}
