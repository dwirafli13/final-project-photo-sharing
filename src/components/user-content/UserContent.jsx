import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useLoggedUser from "../../hooks/useLoggedUser";
import useFollow from "../../hooks/useFollow";
import axios from "axios";

const UserContent = () => {
  const { loggedUser } = useLoggedUser();
  const { isFollow, handleFollow, handleUnfollow } = useFollow();
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

  const getUserPost = () => {
    axios
      .get(
        `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/users-post/${param.id}?size=10&page=1`,
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
        <div className="photo-profile-margin">
          <img
            src={userById?.profilePictureUrl}
            className="rounded-circle img-fluid"
            height={200}
            width={200}
          />
        </div>
        <div className="w-100">
          <div className="d-flex gap-5 align-items-center">
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
          <div className="d-flex gap-5 mt-3">
            <span className="text-center">
              <p className="mb-0">
                <strong>{totalPost}</strong>
              </p>
              <p>Post</p>
            </span>
            <span className="text-center">
              <p className="mb-0">
                <strong>{userById?.totalFollowers}</strong>
              </p>
              <p>Followers</p>
            </span>
            <span className="text-center">
              <p className="mb-0">
                <strong>{userById?.totalFollowing}</strong>
              </p>
              <p>Following</p>
            </span>
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
            <div className="image-responsive">
              <img src={item.imageUrl} width={200} height={200} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserContent;
