import { useState } from "react";
import { useNavigate } from "react-router";
import { registerData } from "../api/data";
import useUploadImage from "./useUploadImage";

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
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    registerData(
      name,
      username,
      email,
      password,
      passwordRepeat,
      imageUrl,
      phoneNumber,
      bio,
      website
    )
      .then((res) => {
        console.log(res);
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
    setImageUrl,
  };
};

export default useRegister;
