import React from "react";

const BottomNavbar = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-dark border-top navbar-expand d-md-none d-lg-none d-xl-none fixed-bottom">
        <ul class="navbar-nav nav-justified w-100">
          <li class="nav-item">
            <a href="#" class="nav-link text-white">
              <i className="fs-5 bi bi-house"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white">
              <i className="fs-5 bi bi-search"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white">
            <i className="fs-5 bi bi-plus-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-white">
            <i className="fs-5 bi bi-person-circle"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default BottomNavbar;
