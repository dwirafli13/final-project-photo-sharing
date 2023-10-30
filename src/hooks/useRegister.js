import { useState } from "react";
import { useNavigate } from "react-router";
import { registerData, uploadImageRegisterData } from "../api/data";

const useRegister = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [errRegister, setErrRegister] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [imagePreview, setImagePreview] = useState(
    "https://api-bootcamp.do.dibimbing.id/images/1684675691646-usericon.png"
  );
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleRegister = async () => {
    const payload = {
      name: name,
      username: username,
      email: email,
      password: password,
      passwordRepeat: passwordRepeat,
      profilePictureUrl: "",
      phoneNumber: phoneNumber,
      bio: bio,
      website: website,
    };

    let formData = new FormData();
    formData.append("image", selectedImage);

    await uploadImageRegisterData(formData)
      .then((res) => {
        payload.profilePictureUrl = res?.data?.url;
      })
      .catch((err) => console.log(err));

    await registerData(payload)
      .then((res) => {
        alert(res?.data?.message);
        navigate("/");
      })
      .catch((err) => {
        setErrRegister(err?.response?.data?.message);
      });
  };

  return {
    setName,
    setUsername,
    setEmail,
    setPassword,
    setPasswordRepeat,
    setPhoneNumber,
    setBio,
    setWebsite,
    errRegister,
    handleRegister,
    imagePreview,
    handleImageChange,
  };
};

export default useRegister;
