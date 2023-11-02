import React, { useEffect, useState } from "react";
import { likePostData, unlikePostData } from "../../api/data";
import { useParams } from "react-router";
import useLoggedUser from "../../hooks/useLoggedUser";
import useFollow from "../../hooks/useFollow";
import useExplore from "../../hooks/useExplore";
import axios from "axios";
import CreatePostModal from "../modal/CreatePostModal";
import useDeletePost from "../../hooks/useDeletePost";
import FollowModal from "../modal/FollowModal";
import "./UserContent.css";

const UserContent = () => {
  const { loggedUser } = useLoggedUser();
  const { isFollow, handleFollow, handleUnfollow } = useFollow();
  const { handleUser } = useExplore();
  const { handleDeletePost } = useDeletePost();
  const [userPost, setUserPost] = useState([]);
  const [userById, setUserById] = useState({});
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
        setUserPost((userPost) =>
          userPost.map((item) =>
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
        setUserPost((userPost) =>
          userPost.map((item) =>
            item?.id === postId
              ? { ...item, isLike: false, totalLikes: item?.totalLikes - 1 }
              : item
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const getUserPost = () => {
    axios
      .get(
        `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/users-post/${param.id}?size=20&page=1`,
        { headers: config }
      )
      .then((res) => {
        const data = res?.data?.data?.posts;
        const totalPost = res?.data?.data?.totalItems;
        setUserPost(data);
        setTotalPost(totalPost);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserById = () => {
    axios
      .get(
        `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/user/${param.id}`,
        { headers: config }
      )
      .then((res) => {
        const data = res?.data?.data;
        setUserById(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    {
      getUserPost(), getUserById();
    }
  }, [isFollow]);

  return (
    <div className="my-profile-content mt-3">
      <div className="mb-3 d-flex align-items-center">
        <div className="photo-profile-margin-user-content">
          <img
            src={userById?.profilePictureUrl}
            className="rounded-circle"
            height={100}
            width={100}
          />
        </div>
        <div className="w-100">
          <div className="d-flex gap-lg-5 gap-3 align-items-center">
            <p>
              <strong>{userById?.username}</strong>
            </p>
            <p>
              {userById.id !== loggedUser.id ? (
                !isFollow ? (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleFollow(param.id)}
                    >
                      Follow
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleUnfollow(param.id)}
                    >
                      Unfollow
                    </button>
                  </>
                )
              ) : null}
            </p>
          </div>
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
                  <strong>{userById?.totalFollowers}</strong>
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
                  <strong>{userById?.totalFollowing}</strong>
                </p>
                <p>Following</p>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>
          <strong>{userById?.name}</strong>
        </p>
        <p>{userById?.bio}</p>
        <p>
          <a href={userById?.website} target="__blank">
            {userById?.website}
          </a>
        </p>
      </div>
      <div className="row">
        {userPost.map((item, key) => (
          <div key={key} className="col-4 px-1 py-1">
            {/* Modal Button Trigger */}
            <div className="image-responsive-user-content">
              <button
                className="btn card-text p-0 ms-2"
                data-bs-toggle="modal"
                data-bs-target={`#postModal${item?.id}`}
              >
                <img src={item.imageUrl} />
              </button>
            </div>
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
                      <div className="modal-image-user-content">
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
                          <div>
                            {loggedUser?.id === userById?.id ? (
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
            </div>
            {/* Modal Content */}
          </div>
        ))}
      </div>
      <CreatePostModal />
      <FollowModal id={param.id} />
    </div>
  );
};

export default UserContent;
