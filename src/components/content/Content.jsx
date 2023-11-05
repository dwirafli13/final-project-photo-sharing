import React, { useEffect } from "react";
import "./Content.css";
import useExplore from "../../hooks/useExplore";
import Navbar from "./Navbar";
import CreatePostModal from "../modal/CreatePostModal";
import useCreateComment from "../../hooks/useCreateComment";
import PostModal from "../modal/PostModal";

const Content = () => {
  const { explore, handleUser, handleLikePost, handleUnlikePost } =
    useExplore();
  const { setComment, handleComment, comment } = useCreateComment();

  // useEffect(() => {}, []);
  return (
    <div
      className="content mt-5 mb-5"
      id="nav-explore"
      role="tabpanel"
      aria-labelledby="nav-explore-tab"
      tabIndex={0}
    >
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
          <div className="image-responsive-content">
            <img src={item?.imageUrl} width={400} height={400} />
          </div>
          <div className="card-body">
            <div className="btn-group">
              {item?.isLike ? (
                <button
                  className="btn card-text p-0"
                  onClick={() => handleUnlikePost(item?.id)}
                >
                  <h3>
                    <i className="bi bi-heart-fill"></i>
                  </h3>
                </button>
              ) : (
                <button
                  className="btn card-text p-0"
                  onClick={() => handleLikePost(item?.id)}
                >
                  <h3>
                    <i className="bi bi-heart"></i>
                  </h3>
                </button>
              )}
              {/* Modal Button Trigger */}
              <button
                className="btn card-text p-0 ms-3"
                data-bs-toggle="modal"
                data-bs-target={`#postModal${item?.id}`}
              >
                <h3>
                  <i className="bi bi-chat-dots"></i>
                </h3>
              </button>
              {/* Modal Button Trigger */}

              <PostModal
                postId={item?.id}
                isLike={item?.isLike}
                totalLikes={item?.totalLikes}
              />

              {/* Modal Content */}
              {/* <div
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
                        <div className="modal-image-content">
                          <img src={item?.imageUrl} className="img-fluid" />
                        </div>
                        <div className="card-body">
                          <div className="btn-group">
                            {item?.isLike ? (
                              <button
                                className="btn card-text p-0"
                                onClick={() => handleUnlikePost(item?.id)}
                              >
                                <h3>
                                  <i className="bi bi-heart-fill"></i>
                                </h3>
                              </button>
                            ) : (
                              <button
                                className="btn card-text p-0"
                                onClick={() => handleLikePost(item?.id)}
                              >
                                <h3>
                                  <i className="bi bi-heart"></i>
                                </h3>
                              </button>
                            )}
                            <button className="btn card-text p-0 ms-3">
                              <h3>
                                <i className="bi bi-chat-dots"></i>
                              </h3>
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
                          <p className="card-text">
                            <input
                              type="text"
                              placeholder="Add a comment..."
                              onChange={(e) => setComment(e.target.value)}
                            />
                            <button onClick={() => handleComment(item?.id)}>
                              Post
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* Modal Content */}
            </div>

            <p className="card-text">{item?.totalLikes} Likes</p>
            <p className="card-text d-flex gap-2">
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
      <CreatePostModal />
      <Navbar />
    </div>
  );
};

export default Content;
