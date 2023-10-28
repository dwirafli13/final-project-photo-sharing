import { useState } from "react";
import { uploadImageRegisterData } from "../api/data";

const useUploadImage = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [imgUrl, setImgUrl] = useState(
    "https://api-bootcamp.do.dibimbing.id/images/1684675691646-usericon.png"
  );
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage);

      uploadImageRegisterData(formData)
        .then((res) => {
          console.log(res?.data?.message);
          setImgUrl(res?.data?.url);
        })
        .catch((err) => console.log(err));
    }
  };

  return { handleImageChange, handleUpload, imgUrl };
};

export default useUploadImage;
