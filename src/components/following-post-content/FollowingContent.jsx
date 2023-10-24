import React from "react";
import useFollowingPost from "../../hooks/useFollowingPost";
import useExplore from "../../hooks/useExplore";
import Navbar from "../content/Navbar";

const FollowingContent = () => {
  const { followingPost } = useFollowingPost();
  const { handleUser, isLike, handleLikePost, handleUnlikePost } = useExplore();

  return (
    <div className="content mt-5">
      {followingPost.map((item, key) => (
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
          <img src={item?.imageUrl} className="card-img-top" />
          <div className="card-body">
            <div className="btn-group">
              {isLike ? (
                <button
                  className="btn card-text"
                  onClick={() => handleUnlikePost(item?.id)}
                >
                  Unlike
                </button>
              ) : (
                <button
                  className="btn card-text"
                  onClick={() => handleLikePost(item?.id)}
                >
                  Like
                </button>
              )}
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

export default FollowingContent;
