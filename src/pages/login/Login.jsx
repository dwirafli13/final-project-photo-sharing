import React from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import "./Login.css";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errLogin,
    setErrLogin,
    handleLogin,
  } = useLogin();

  return (
    <>
      <div className="container-fluid content-padding-login">
        <div className="row align-items-center content-position-login logo-background">
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
            {!!errLogin.length && (
              <p className="alert alert-danger">{errLogin}</p>
            )}
            <div className="mb-3 form-size-login">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control mb-2"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="inputPassword5" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-primary w-100 mt-3"
                onClick={handleLogin}
              >
                Login
              </button>
              <p className="mb-5">
                Don't have an account?
                <Link to={"/register"} className="text-decoration-none">
                  {" "}
                  Register Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
