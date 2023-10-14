import React, { useState, useEffect } from "react";
import "./Content.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Content = () => {
  const [explore, setExplore] = useState([]);
  const apiKey = "c7b411cc-0e7c-4ad1-aa3f-822b00e7734b";

  const getExplorePost = () => {
    const token = localStorage.getItem("token");
    const headers = {
      apiKey: apiKey,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    axios
      .get(
        "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/explore-post?size=10&page=2",
        { headers: headers }
      )
      .then((res) => {
        const data = res?.data?.data?.posts;
        setExplore(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(explore);

  useEffect(() => {
    getExplorePost();
  }, []);
  return (
    <div className="content">
      <nav className="nav nav-pills nav-justified navbar-content mb-3">
        <button className="nav-link btn btn-primary">Explore</button>
        <button className="nav-link btn btn-primary">Following</button>
      </nav>
      {explore.map((item, key) => (
        <div key={key} className="card mb-3">
          <div className="card-body d-flex">
            <img
              src={item?.user?.profilePictureUrl}
              className="rounded-circle photo-profile"
              width={40}
              height={40}
            />
            <p className="ms-2 card-text">{item?.user?.username}</p>
          </div>
          <img src={item?.imageUrl} className="card-img-top" />
          <div className="card-body">
            <div className="btn-group">
              <button className="btn card-text">Like</button>
              <button className="btn card-text">Comment</button>
            </div>
            <p className="card-text">{item?.totalLikes} Likes</p>
            <p className="card-text">
              <strong>{item?.user?.username}</strong> {item?.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
