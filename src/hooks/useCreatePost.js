import { useState } from "react";
import { createPostData } from "../api/data";

const useCreatePost = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const handleCreatePost = () => {
    createPostData(imageUrl, caption)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return { setImageUrl, setCaption, handleCreatePost };
};

export default useCreatePost;
