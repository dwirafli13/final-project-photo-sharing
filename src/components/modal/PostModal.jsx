import React, { useEffect, useState } from "react";
import useExplore from "../../hooks/useExplore";
import { postByIdData } from "../../api/data";
import useLoggedUser from "../../hooks/useLoggedUser";
import useDeletePost from "../../hooks/useDeletePost";
import useCreateComment from "../../hooks/useCreateComment";

const PostModal = ({ postId, isLike, totalLikes }) => {
  const { handleUser, handleLikePost, handleUnlikePost } = useExplore();
  const { loggedUser } = useLoggedUser();
  const { handleComment, setComment } = useCreateComment();
  const { handleDeletePost } = useDeletePost();
  const [postById, setPostById] = useState([]);

  const getPostById = () => {
    postByIdData(postId)
      .then((res) => {
        setPostById(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPostById();
  }, [postById, isLike, totalLikes]);

  return (
    <>
      {/* Modal Content */}
      <div
        className="modal fade"
        id={`postModal${postById?.id}`}
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
                onClick={() => handleUser(postById?.userId)}
              >
                <img
                  src={postById?.user?.profilePictureUrl}
                  className="rounded-circle photo-profile"
                  width={40}
                  height={40}
                />
                <p className="modal-title fs-5 ms-2" id="staticBackdropLabel">
                  {postById?.user?.username}
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
                  <img src={postById?.imageUrl} className="img-fluid" />
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="btn-group">
                      {isLike ? (
                        <button
                          className="btn card-text p-0"
                          onClick={() => handleUnlikePost(postById?.id)}
                        >
                          <h3>
                            <i className="bi bi-heart-fill"></i>
                          </h3>
                        </button>
                      ) : (
                        <button
                          className="btn card-text p-0"
                          onClick={() => handleLikePost(postById?.id)}
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
                    <div>
                      {loggedUser?.id === postById?.userId ? (
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeletePost(item?.id)}
                        >
                          Delete Post
                        </button>
                      ) : null}
                    </div>
                  </div>
                  <p className="card-text">{totalLikes} Likes</p>
                  <span className="card-text">
                    <button
                      className="btn p-0"
                      onClick={() => handleUser(postById?.userId)}
                    >
                      <strong>{postById?.user?.username}</strong>
                    </button>{" "}
                    {postById?.caption}
                  </span>
                  <p className="card-text mt-4">
                    {postById.comments &&
                      postById.comments.map((item, key) => (
                        <div
                          key={key}
                          className="d-flex align-items-center gap-2 mb-1"
                        >
                          <img
                            src={item?.user?.profilePictureUrl}
                            width={35}
                            height={35}
                            className="rounded-circle photo-profile"
                          />
                          <button
                            className="btn p-0"
                            onClick={() => handleUser(item?.user?.id)}
                          >
                            <span>
                              <strong>{item?.user?.username}</strong>
                            </span>
                          </button>
                          <span>{item?.comment}</span>
                        </div>
                      ))}
                  </p>
                  <p className="card-text">
                    <div className="d-flex align-items-center">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Add a comment..."
                        onChange={(e) => setComment(e.target.value)}
                      />
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleComment(postById?.id)}
                      >
                        Add Comment
                      </button>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Content */}
    </>
  );
};

export default PostModal;
