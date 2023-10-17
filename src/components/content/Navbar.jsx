import React from "react";
import "./Content.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav nav-pills nav-justified navbar-position mb-3">
        <button className="nav-link btn btn-primary">
          <Link to={"/home"}>Explore</Link>
        </button>
        <button className="nav-link btn btn-primary">
          <Link to={"/following-post"}>Following</Link>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
