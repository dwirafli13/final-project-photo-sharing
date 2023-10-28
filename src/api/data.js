import axios from "axios";

const apiKey = "c7b411cc-0e7c-4ad1-aa3f-822b00e7734b";
const token = localStorage.getItem("token");
const temporaryToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJhNTRjNTllNy1hMWI2LTRhYzQtYWU3Yi05ODg1YTk4ZWQ4NjkiLCJyb2xlIjoiZ2VuZXJhbCIsImlhdCI6MTY4MTAxMzEzN30.AxhIjhRXMoFoxldGOqwLur6jNBC-mx9-Ig18RWfYkLM";
const headers = {
  apiKey: apiKey,
  "Content-Type": "application/json",
};
const config = {
  Authorization: `Bearer ${token}`,
  apiKey: apiKey,
  "Content-Type": "application/json",
};
const configRegister = {
  Authorization: `Bearer ${temporaryToken}`,
  apiKey: apiKey,
  "Content-Type": "multipart/form-data",
};
const configCreatePost = {
  Authorization: `Bearer ${token}`,
  apiKey: apiKey,
  "Content-Type": "multipart/form-data",
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
  imgUrl,
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
    profilePictureUrl: imgUrl,
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

export const followData = (userIdFollow) => {
  const payload = {
    userIdFollow: userIdFollow,
  };
  return axios
    .post(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/follow",
      payload,
      { headers: config }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const unfollowData = (userId) => {
  return axios
    .delete(
      `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/unfollow/${userId}`,
      { headers: config }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const uploadImageRegisterData = (formData) => {
  // const payload = {
  //   image: formData,
  // };
  return axios
    .post(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
      formData,
      { headers: configRegister }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const uploadImageCreatePostData = (formData) => {
  return axios
    .post(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
      formData,
      { headers: configCreatePost }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

export const createPostData = (imageUrl, caption) => {
  const payload = {
    imageUrl: imageUrl,
    caption: caption,
  };
  return axios
    .post(
      "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/create-post",
      payload,
      { headers: config }
    )
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};
