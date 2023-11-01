import React from "react";
import useExplore from "../../hooks/useExplore";

const PostModal = () => {
  const { handleUser, isLike, handleLikePost, handleUnlikePost } = useExplore();

  return (
    <>
      {/* Modal Content */}
      <div
        className="modal fade"
        id={`postModal${postModal?.id}`}
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
                onClick={() => handleUser(postModal?.userId)}
              >
                <img
                  src={postModal?.user?.profilePictureUrl}
                  className="rounded-circle photo-profile"
                  width={40}
                  height={40}
                />
                <p className="modal-title fs-5 ms-2" id="staticBackdropLabel">
                  {postModal?.user?.username}
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
                  src={postModal?.imageUrl}
                  className="card-img-top img-fluid"
                />
                <div className="card-body">
                  <div className="btn-group">
                    {isLike ? (
                      <button
                        className="btn card-text p-0"
                        onClick={() => handleUnlikePost(postModal?.id)}
                      >
                        Unlike
                      </button>
                    ) : (
                      <button
                        className="btn card-text p-0"
                        onClick={() => handleLikePost(postModal?.id)}
                      >
                        Like
                      </button>
                    )}
                    <button className="btn card-text p-0 ms-2">Comment</button>
                  </div>
                  <p className="card-text">{postModal?.totalLikes} Likes</p>
                  <p className="card-text">
                    <button
                      className="btn p-0"
                      onClick={() => handleUser(postModal?.userId)}
                    >
                      <strong>{postModal?.user?.username}</strong>
                    </button>{" "}
                    {postModal?.caption}
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
