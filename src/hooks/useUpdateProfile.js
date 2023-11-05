import { useState } from "react";
import { updateProfileData, uploadImageCreatePostData } from "../api/data";
import useLoggedUser from "./useLoggedUser";

const useUpdateProfile = () => {
  const { loggedUser } = useLoggedUser();
  const [name, setName] = useState(loggedUser?.name);
  const [username, setUsername] = useState(loggedUser?.username);
  const [email, setEmail] = useState(loggedUser.email);
  const [phoneNumber, setPhoneNumber] = useState(loggedUser?.phoneNumber);
  const [bio, setBio] = useState(loggedUser?.bio);
  const [website, setWebsite] = useState(loggedUser?.website);
  const [selectedImage, setSelectedImage] = useState("");
  const [imagePreview, setImagePreview] = useState(
    loggedUser?.profilePictureUrl
  );

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpdateProfile = async () => {
    const payload = {
      name: name,
      username: username,
      email: email,
      profilePictureUrl: "",
      phoneNumber: phoneNumber,
      bio: bio,
      website: website,
    };

    let formData = new FormData();
    formData.append("image", selectedImage);

    await uploadImageCreatePostData(formData)
      .then((res) => {
        payload.profilePictureUrl = res?.data?.url;
      })
      .catch((err) => console.log(err));

    await updateProfileData(payload)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return {
    setName,
    setUsername,
    setEmail,
    setPhoneNumber,
    setBio,
    setWebsite,
    handleUpdateProfile,
    imagePreview,
    handleImageChange,
  };
};

export default useUpdateProfile;
