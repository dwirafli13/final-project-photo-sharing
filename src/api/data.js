import axios from "axios";

const apiKey = "c7b411cc-0e7c-4ad1-aa3f-822b00e7734b";
const token = localStorage.getItem("token");
const headers = {
  apiKey: apiKey,
  "Content-Type": "application/json",
};
const config = {
  Authorization: `Bearer ${token}`,
  apiKey: apiKey,
  "Content-Type": "application/json",
};

export const loginData = (email, password) => {
  const payload = {
    email: email,
    password: password,
  };

  return axios
    .post(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/login",
      payload,
      { headers: headers }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const registerData = (
  name,
  username,
  email,
  password,
  passwordRepeat,
  profilePictureUrl,
  phoneNumber,
  bio,
  website
) => {
  const payload = {
    name: name,
    username: username,
    email: email,
    password: password,
    passwordRepeat: passwordRepeat,
    profilePictureUrl: profilePictureUrl,
    phoneNumber: phoneNumber,
    bio: bio,
    website: website,
  };

  return axios
    .post(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/register",
      payload,
      { headers: headers }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const exploreData = () => {
  return axios
    .get(
      `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/explore-post?size=10&page=1`,
      { headers: config }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const followingPostData = () => {
  return axios
    .get(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/following-post?size=10&page=1",
      { headers: config }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const myFollowingData = () => {
  return axios
    .get(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/my-following?size=10&page=1",
      { headers: config }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const loggedUserData = () => {
  return axios
    .get("https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/user", {
      headers: config,
    })
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const likePostData = (postId) => {
  const payload = {
    postId: postId,
  };
  return axios
    .post(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/like",
      payload,
      { headers: config }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const unlikePostData = (postId) => {
  const payload = {
    postId: postId,
  };
  return axios
    .post(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/unlike",
      payload,
      { headers: config }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

