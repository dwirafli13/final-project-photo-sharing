import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import useLoggedUser from "../../hooks/useLoggedUser";
import useExplore from "../../hooks/useExplore";
import logoShutterStory from "../../assets/yellow-icon-logo.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const { loggedUser } = useLoggedUser();
  const { handleMyProfile } = useExplore();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side-bar d-none d-md-inline">
        <Link
          to={"/home"}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <img src={logoShutterStory} width={40} />
          <span className="fs-4 d-none d-xl-inline">ShutterStory</span>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link
              to={"/home"}
              className="nav-link text-white"
              aria-current="page"
            >
              <i className="fs-5 bi bi-house"></i>
              <span className="ms-3 d-none d-xl-inline">Home</span>
            </Link>
          </li>
          <li>
            <Link to={"/edit-profile"} className="nav-link text-white">
              <i className="fs-5 bi bi-person-gear"></i>
              <span className="ms-3 d-none d-xl-inline">Edit Profile</span>
            </Link>
          </li>
          <li>
            {/* Modal Button Trigger */}
            <button
              className="nav-link text-white"
              data-bs-toggle="modal"
              data-bs-target="#createPostModal"
            >
              <i className="fs-5 bi bi-plus-square"></i>
              <span className="ms-3 d-none d-xl-inline">Create Post</span>
            </button>
            {/* Modal Button Trigger */}
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
              src={loggedUser?.profilePictureUrl}
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2 photo-profile"
            />
            <strong className="d-none d-xl-inline">
              {loggedUser?.username}
            </strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleMyProfile(loggedUser?.id)}
              >
                Profile
              </button>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
