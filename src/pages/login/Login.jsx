import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };
    axios
      .post("https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/login", payload)
      .then((res) => {
        // localStorage.setItem("token", res?.data?.data?.token);
        console.log(res);
      })
      .catch((err) => {
        // console.log(err?.response?.data?.message);
        // setErrLogin(err?.response?.data?.message);
        console.log(err);
      });
  };
  return (
    <>
      <div className="container-fluid content-padding-login">
        <div className="row align-items-center content-position-login">
          <div className="col text-center logo-padding-login">
            <img
              src="yellow grey logo.svg"
              alt="logo ipsum"
              height={"75%"}
              width={"75%"}
              className="img-fluid"
            />
          </div>
          <div className="col">
            <h1>Share Your Great Moment</h1>
            <p>Please Login First</p>
            <div className="mb-3 form-size-login">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={handleChangeEmail}
              />
              <label htmlFor="inputPassword5" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control"
                onChange={handleChangePass}
              />
              <button type="button" className="btn btn-primary w-100 mt-3" onClick={handleLogin}>
                Login
              </button>
              <p>
                Don't have an account?
                <Link to={"/register"}>Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
