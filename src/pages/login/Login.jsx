import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
  return (
    <>
      <div className="container-fluid content-padding-login">
        <div className="row align-items-center content-position-login">
          <div className="col text-center logo-padding-login">
            <img
              src="logoipsum-297.svg"
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
              />
              <label htmlFor="inputPassword5" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control"
              />
              <button type="button" className="btn btn-primary w-100 mt-3">
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
