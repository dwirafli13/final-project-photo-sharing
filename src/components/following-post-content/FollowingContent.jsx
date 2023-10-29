import React from "react";
import useFollowingPost from "../../hooks/useFollowingPost";
import useExplore from "../../hooks/useExplore";
import Navbar from "../content/Navbar";
import CreatePostModal from "../modal/CreatePostModal";

const FollowingContent = () => {
  const { followingPost } = useFollowingPost();
  const { handleUser, isLike, handleLikePost, handleUnlikePost } = useExplore();

  return (
    <div
      className="content mt-5"
      id="nav-following"
      role="tabpanel"
      aria-labelledby="nav-following-tab"
      tabIndex={0}
    >
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
                  className="btn card-text p-0"
                  onClick={() => handleLikePost(item?.id)}
                >
                  Like
                </button>
              )}
              {/* Modal Button Trigger */}
              <button
                className="btn card-text p-0 ms-2"
                data-bs-toggle="modal"
                data-bs-target={`#postModal${item?.id}`}
              >
                Comment
              </button>
              {/* Modal Button Trigger */}

              {/* Modal Content */}
              <div
                className="modal fade"
                id={`postModal${item?.id}`}
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
                  <div className="modal-content">
                    <div className="modal-header">
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
                        <p
                          className="modal-title fs-5 ms-2"
                          id="staticBackdropLabel"
                        >
                          {item?.user?.username}
                        </p>
                      </button>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="card">
                        <img
                          src={item?.imageUrl}
                          className="card-img-top img-fluid"
                        />
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
                            <button className="btn card-text p-0 ms-2">
                              Comment
                            </button>
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
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal Content */}
            </div>
            <p className="card-text">{item?.totalLikes} Likes</p>
            <p className="card-text">
              <strong>{item?.user?.username}</strong> {item?.caption}
            </p>
          </div>
        </div>
      ))}
      <CreatePostModal />
      <Navbar />
    </div>
  );
};

export default FollowingContent;
