import React from "react";
import "./Content.css";
import useExplore from "../../hooks/useExplore";
import Navbar from "./Navbar";

const Content = () => {
  const { explore, handleUser, isLike, handleLikePost, handleUnlikePost } =
    useExplore();

  return (
    <div className="content mt-5">
      {explore.map((item, key) => (
        <div key={key} className="card mb-3">
          <div className="card-body d-flex align-items-center">
            <button
              className="d-flex align-items-center btn p-0"
              onClick={() => handleUser(item?.userId)}
            >
              <img
                src={item?.user?.profilePictureUrl}
                className="rounded-circle photo-profile"
                width={40}
                height={40}
              />
              <p className="ms-2 card-text">{item?.user?.username}</p>
            </button>
          </div>
          <div className="image-responsive">
            <img
              src={item?.imageUrl}
              className="card-img-top"
              width={400}
              height={400}
            />
          </div>
          <div className="card-body">
            <div className="btn-group">
              {isLike ? (
                <button
                  className="btn card-text p-0"
                  onClick={() => handleUnlikePost(item?.id)}
                >
                  Unlike
                </button>
              ) : (
                <button
                  className="btn card-text p-0"
                  onClick={() => handleLikePost(item?.id)}
                >
                  Like
                </button>
              )}
              <button className="btn card-text p-0 ms-2">Comment</button>
            </div>
            <p className="card-text">{item?.totalLikes} Likes</p>
            <p className="card-text">
              <button
                className="btn p-0"
                onClick={() => handleUser(item?.userId)}
              >
                <strong>{item?.user?.username}</strong>
              </button>{" "}
              {item?.caption}
            </p>
          </div>
        </div>
      ))}
      <Navbar />
    </div>
  );
};

export default Content;
