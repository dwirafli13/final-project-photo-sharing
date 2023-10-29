import { useState } from "react";
import { createPostData } from "../api/data";
import { useNavigate } from "react-router";
import { uploadImageCreatePostData } from "../api/data";

const useCreatePost = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]))
  };
  const handleCreatePost = async () => {
    let formData = new FormData();
    formData.append("image", selectedImage);

    await uploadImageCreatePostData(formData)
      .then((res) => {
        setImageUrl(res?.data?.url);
      })
      .catch((err) => console.log(err));

    await createPostData(imageUrl, caption)
      .then((res) => {
        console.log(res);
        setSuccessMessage(res?.data?.message);
        // navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return {
    setCaption,
    handleCreatePost,
    imageUrl,
    successMessage,
    imagePreview,
    handleImageChange,
  };
};

export default useCreatePost;
