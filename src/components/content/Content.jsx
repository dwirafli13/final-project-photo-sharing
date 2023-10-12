import React, { useEffect } from "react";
import "./Content.css";
import { Link } from "react-router-dom";
import { getExplorePost } from "../../api/api";

const Content = () => {
  useEffect(() => {
    getExplorePost();
  }, []);
  return (
    <div className="content">
      <nav className="nav nav-pills nav-justified navbar-content">
        <button className="nav-link btn btn-primary">Explore</button>
        <button className="nav-link btn btn-primary">Following</button>
      </nav>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
      <p>ini home</p>
    </div>
  );
};

export default Content;
