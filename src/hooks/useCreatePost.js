import { useState } from "react";
import { createPostData } from "../api/data";
import { useNavigate } from "react-router";

const useCreatePost = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const handleCreatePost = () => {
    createPostData(imageUrl, caption)
      .then((res) => {
        console.log(res);
        setSuccessMessage(res?.data?.message);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return {
    setImageUrl,
    setCaption,
    handleCreatePost,
    imageUrl,
    successMessage,
  };
};

export default useCreatePost;
