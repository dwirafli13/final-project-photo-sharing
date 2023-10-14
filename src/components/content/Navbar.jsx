import React from "react";
import "./Content.css"

const Navbar = () => {
  return (
    <div>
      <nav className="nav nav-pills nav-justified navbar-content mb-3">
        <button className="nav-link btn btn-primary">Explore</button>
        <button className="nav-link btn btn-primary">Following</button>
      </nav>
    </div>
  );
};

export default Navbar;
