import React from "react";
import "./Content.css";
import useExplore from "../../hooks/useExplore";
import Navbar from "./Navbar";

const Content = () => {
  const { explore } = useExplore();

  return (
    <div className="content mt-5">
      {explore.map((item, key) => (
        <div key={key} className="card mb-3">
          <div className="card-body d-flex align-items-center">
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
      <Navbar />
    </div>
  );
};

export default Content;
