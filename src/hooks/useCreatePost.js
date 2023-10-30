import { useState } from "react";
import { createPostData, uploadImageCreatePostData } from "../api/data";

const useCreatePost = () => {
  const [caption, setCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };
  const handleCreatePost = async () => {
    const payload = {
      imageUrl: "",
      caption: caption,
    };

    let formData = new FormData();
    formData.append("image", selectedImage);

    await uploadImageCreatePostData(formData)
      .then((res) => {
        payload.imageUrl = res?.data?.url;
      })
      .catch((err) => console.log(err));

    await createPostData(payload)
      .then((res) => {
        alert(res?.data?.message);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return {
    setCaption,
    handleCreatePost,
    imagePreview,
    handleImageChange,
    selectedImage,
  };
};

export default useCreatePost;
