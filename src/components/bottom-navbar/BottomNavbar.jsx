import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useLoggedUser from "../../hooks/useLoggedUser";
import useExplore from "../../hooks/useExplore";
import logoShutterStory from "../../assets/yellow-icon-logo.svg";

const BottomNavbar = () => {
  const navigate = useNavigate();
  const { loggedUser } = useLoggedUser();
  const { handleMyProfile } = useExplore();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-light bg-dark border-top navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom">
        <ul className="navbar-nav nav-justified w-100">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link text-white">
              <img src={logoShutterStory} width={28} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/edit-profile"} className="nav-link text-white">
              <i className="fs-5 bi bi-person-gear"></i>
            </Link>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              <i className="fs-5 bi bi-plus-square"></i>
            </a>
          </li>
          <li className="nav-item">
            <div className="dropup">
              <a
                href="#"
                className="nav-link text-white dropdown-toogle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={loggedUser?.profilePictureUrl}
                  width="34"
                  height="34"
                  className="rounded-circle me-2 photo-profile"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-start text-small shadow">
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
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BottomNavbar;
