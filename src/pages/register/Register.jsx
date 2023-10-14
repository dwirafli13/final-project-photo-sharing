import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="container-fluid content-padding-regis bg-tertiary">
        <div className="row align-items-center content-position-regis">
          <div className="col text-center logo-padding-regis">
            <img
              src="yellow grey logo.svg"
              alt="logo ipsum"
              height={"75%"}
              width={"75%"}
              className="img-fluid"
            />
          </div>
          <div className="col">
            <h1>Join Us and Share Your Best Moments With Us</h1>
            <p>Please Register</p>
            <div className="mb-3 form-size-regis">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="exampleFormControlInput1"
                placeholder="John Doe"
              />

              <label htmlFor="exampleFormControlInput1" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="exampleFormControlInput1"
                placeholder="john123"
              />

              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control mb-2"
                id="exampleFormControlInput1"
                placeholder="johndoe2@example.com"
              />

              <label htmlFor="inputPassword5" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control mb-2"
              />

              <label htmlFor="inputPassword5" className="form-label">
                Password Repeat
              </label>
              <input
                type="password"
                id="inputPassword5"
                className="form-control mb-2"
              />

              <label for="formFile" class="form-label">
                Profile Picture
              </label>
              <input class="form-control mb-2" type="file" id="formFile" />

              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control mb-2"
                id="exampleFormControlInput1"
                placeholder="0812XXXXXXXX"
              />

              <button type="button" className="btn btn-primary w-100 mt-3">
                Register
              </button>
              <p>
                Already have an account?
                <Link to={"/"} className="text-decoration-none">
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
