import React from "react";
import "./Content.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleExplorePost = () => {
    navigate("/home");
  };

  const handleFollowingPost = () => {
    navigate("/following-post");
  };
  return (
    <div className="row">
      <div className="col-12 p-0 col-xl-8">
        <nav
          className="nav nav-tabs justify-content-evenly navbar-position mb-3"
          id="nav-tab"
          role="tablist"
        >
          <button
            className="nav-link active w-50 fw-bold"
            id="nav-explore-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-explore"
            type="button"
            role="tab"
            aria-controls="nav-explore"
            aria-selected="true"
            onClick={handleExplorePost}
          >
            Explore
          </button>
          <button
            className="nav-link w-50 fw-bold"
            id="nav-following-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-following"
            type="button"
            role="tab"
            aria-controls="nav-following"
            aria-selected="false"
            onClick={handleFollowingPost}
          >
            Following
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
