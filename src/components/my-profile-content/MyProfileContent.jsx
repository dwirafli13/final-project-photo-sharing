import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { likePostData, unlikePostData } from "../../api/data";
import axios from "axios";
import "./MyProfileContent.css";
import useLoggedUser from "../../hooks/useLoggedUser";
import useExplore from "../../hooks/useExplore";
import CreatePostModal from "../modal/CreatePostModal";
import useDeletePost from "../../hooks/useDeletePost";
import FollowModal from "../modal/FollowModal";
import PostModal from "../modal/PostModal";

const MyProfileContent = () => {
  const { loggedUser } = useLoggedUser();
  const { handleUser } = useExplore();
  const { handleDeletePost } = useDeletePost();
  const [myProfilePost, setMyProfilePost] = useState([]);
  const [totalPost, setTotalPost] = useState("");
  const param = useParams();
  const apiKey = "c7b411cc-0e7c-4ad1-aa3f-822b00e7734b";
  const token = localStorage.getItem("token");
  const config = {
    Authorization: `Bearer ${token}`,
    apiKey: apiKey,
    "Content-Type": "application/json",
  };

  const handleLikePost = (postId) => {
    likePostData(postId)
      .then((res) => {
        console.log(res);
        setMyProfilePost((myProfilePost) =>
          myProfilePost.map((item) =>
            item?.id === postId
              ? { ...item, isLike: true, totalLikes: item?.totalLikes + 1 }
              : item
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const handleUnlikePost = (postId) => {
    unlikePostData(postId)
      .then((res) => {
        console.log(res);
        setMyProfilePost((myProfilePost) =>
          myProfilePost.map((item) =>
            item?.id === postId
              ? { ...item, isLike: false, totalLikes: item?.totalLikes - 1 }
              : item
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const getMyProfilePost = () => {
    axios
      .get(
        `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/users-post/${param.id}?size=20&page=1`,
        { headers: config }
      )
      .then((res) => {
        const data = res?.data?.data?.posts;
        const totalPost = res?.data?.data?.totalItems;
        setMyProfilePost(data);
        setTotalPost(totalPost);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMyProfilePost();
  }, []);
  return (
    <div className="my-profile-content mt-3">
      <div className="mb-3 d-flex align-items-center">
        <div className="photo-profile-margin-my-profile">
          <img
            src={loggedUser?.profilePictureUrl}
            className="rounded-circle"
            height={100}
            width={100}
          />
        </div>
        <div className="w-100">
          <p>
            <strong>{loggedUser?.username}</strong>
          </p>
          <div className="d-flex gap-lg-5 gap-3 mt-3">
            <span className="text-center">
              <p className="mb-0">
                <strong>{totalPost}</strong>
              </p>
              <p>Post</p>
            </span>
            <button
              className="btn p-0"
              data-bs-toggle="modal"
              data-bs-target="#followersModal"
            >
              <span className="text-center">
                <p className="mb-0">
                  <strong>{loggedUser?.totalFollowers}</strong>
                </p>
                <p>Followers</p>
              </span>
            </button>
            <button
              className="btn p-0"
              data-bs-toggle="modal"
              data-bs-target="#followingModal"
            >
              <span className="text-center">
                <p className="mb-0">
                  <strong>{loggedUser?.totalFollowing}</strong>
                </p>
                <p>Following</p>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>
          <strong>{loggedUser?.name}</strong>
        </p>
        <p>{loggedUser?.bio}</p>
        <p>
          <a href={loggedUser?.website} target="__blank">
            {loggedUser?.website}
          </a>
        </p>
      </div>
      <div className="row">
        {myProfilePost.map((item, key) => (
          <div key={key} className="col-4 px-1 py-1">
            {/* Modal Button Trigger */}
            <div className="image-responsive-my-profile-content">
              <button
                className="btn card-text p-0 ms-2"
                data-bs-toggle="modal"
                data-bs-target={`#postModal${item?.id}`}
              >
                <img src={item.imageUrl} width={200} height={200} />
              </button>
            </div>
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
                      <div className="modal-image-my-profile">
                        <img src={item?.imageUrl} className="img-fluid" />
                      </div>
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="btn-group">
                            {item?.isLike ? (
                              <button
                                className="btn card-text p-0"
                                onClick={() => handleUnlikePost(item?.id)}
                              >
                                <h3>
                                  <i class="bi bi-heart-fill"></i>
                                </h3>
                              </button>
                            ) : (
                              <button
                                className="btn card-text p-0"
                                onClick={() => handleLikePost(item?.id)}
                              >
                                <h3>
                                  <i class="bi bi-heart"></i>
                                </h3>
                              </button>
                            )}
                            <button className="btn card-text p-0 ms-3">
                              <h3>
                                <i class="bi bi-chat-dots"></i>
                              </h3>
                            </button>
                          </div>
                          <div>
                            {loggedUser?.id ? (
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDeletePost(item?.id)}
                              >
                                Delete Post
                              </button>
                            ) : null}
                          </div>
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
            </div> */}
            {/* Modal Content */}
          </div>
        ))}
      </div>
      <CreatePostModal />
      <FollowModal id={param.id} />
    </div>
  );
};

export default MyProfileContent;
