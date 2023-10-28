import { useState } from "react";
import { updateProfileData } from "../api/data";

const useUpdateProfile = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");

  const handleUpdateProfile = () => {
    updateProfileData(
      name,
      username,
      email,
      profilePictureUrl,
      phoneNumber,
      bio,
      website
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return {
    setName,
    setUsername,
    setEmail,
    setProfilePictureUrl,
    setPhoneNumber,
    setBio,
    setWebsite,
    handleUpdateProfile,
  };
};

export default useUpdateProfile;
