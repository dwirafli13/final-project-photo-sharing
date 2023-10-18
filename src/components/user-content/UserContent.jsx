import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const UserContent = () => {
  const [userPost, setUserPost] = useState([]);
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
        setUserPost(data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserPost();
  }, []);

  return (
    <div>
      <div className="row">
        {userPost.map((item, key) => (
          <div key={key} className="col">
            <img src={item.imageUrl} width={200} height={200} className="img-fluid"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserContent;
