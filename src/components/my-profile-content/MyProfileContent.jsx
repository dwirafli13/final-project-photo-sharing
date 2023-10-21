import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./MyProfileContent.css";
import useLoggedUser from "../../hooks/useLoggedUser";

const MyProfileContent = () => {
  const { loggedUser } = useLoggedUser();

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

  const getMyProfilePost = () => {
    axios
      .get(
        `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/users-post/${param.id}?size=10&page=1`,
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
        <div className="photo-profile-margin">
          <img
            src={loggedUser?.profilePictureUrl}
            className="rounded-circle img-fluid"
            height={200}
            width={200}
          />
        </div>
        <div className="w-100">
          <p>
            <strong>{loggedUser?.username}</strong>
          </p>
          <div className="d-flex gap-5 mt-3">
            <span className="text-center">
              <p className="mb-0">
                <strong>{totalPost}</strong>
              </p>
              <p>Post</p>
            </span>
            <span className="text-center">
              <p className="mb-0">
                <strong>{loggedUser?.totalFollowers}</strong>
              </p>
              <p>Followers</p>
            </span>
            <span className="text-center">
              <p className="mb-0">
                <strong>{loggedUser?.totalFollowing}</strong>
              </p>
              <p>Following</p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <p>
          <strong>{loggedUser?.name}</strong>
        </p>
        <p>{loggedUser?.bio}</p>
        <p>
          <a href={loggedUser?.website} target="__blank">{loggedUser?.website}</a>
        </p>
      </div>
      <div className="row">
        {myProfilePost.map((item, key) => (
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

export default MyProfileContent;
