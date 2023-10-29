import { useState } from "react";
import { uploadImageCreatePostData } from "../api/data";

const useUploadImageCreatePost = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleUpload = () => {
    if (selectedImage) {
      let formData = new FormData();
      formData.append("image", selectedImage);

      uploadImageCreatePostData(formData)
        .then((res) => {
          console.log(res?.data?.message);
          setImgUrl(res?.data?.url);
        })
        .catch((err) => console.log(err));
    }
  };

  return { handleImageChange, handleUpload, imgUrl };
};

export default useUploadImageCreatePost;
