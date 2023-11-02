import { useState } from "react";
import { useNavigate } from "react-router";
import { loginData } from "../api/data";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errLogin, setErrLogin] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    loginData(email, password)
      .then((res) => {
        localStorage.setItem("token", res?.data?.token);
        navigate("/home");
        window.location.reload();
      })
      .catch((err) => {
        setErrLogin(err?.response?.data?.message);
      });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    errLogin,
    setErrLogin,
    handleLogin,
  };
};

export default useLogin;
