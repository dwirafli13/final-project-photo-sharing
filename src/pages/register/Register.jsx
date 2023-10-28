import React from "react";
import { Link } from "react-router-dom";
import useUploadImage from "../../hooks/useUploadImage";
import useRegister from "../../hooks/useRegister";
import "./Register.css";

const Register = () => {
  const { handleImageChange, handleUpload, imgUrl } = useUploadImage();
  const {
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
    imageUrl,
  } = useRegister();
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
              {/* <form encType="multipart/form-data"> */}
              {/* <label htmlFor="formFile" className="form-label">
                Profile Picture
              </label>
              <div className="d-flex align-items-center flex-column">
                <input
                  className="form-control mb-2"
                  type="file"
                  id="formFile"
                  accepts="image/*"
                  onChange={handleImageChange}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  id="exampleFormControlInput6"
                  value={imgUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  disabled
                />
                <button
                  className="btn btn-success"
                  htmlFor="#formFile"
                  encType="multipart/form-data"
                  onClick={handleUpload}
                >
                  Upload Image
                </button>
                <div>
                  <img
                    src={imgUrl}
                    className="img-fluid rounded-circle mt-2"
                    width={200}
                    height={200}
                  />
                </div>
              </div> */}

              {/* </form> */}
              <label htmlFor="exampleFormControlInput7" className="form-label">
                Profile Picture URL
              </label>
              <div className="d-flex align-items-center flex-column">
                <input
                  type="text"
                  className="form-control mb-2"
                  id="exampleFormControlInput7"
                  placeholder="https//yourimage.com/yourimage.jpg"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <div>
                  <img
                    src={imageUrl}
                    className="img-fluid rounded-circle mt-2"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <hr />
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="exampleFormControlInput1"
                placeholder="John Doe"
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="exampleFormControlInput2" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="exampleFormControlInput2"
                placeholder="john123"
                onChange={(e) => setUsername(e.target.value)}
              />

              <label htmlFor="exampleFormControlInput3" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control mb-2"
                id="exampleFormControlInput3"
                placeholder="johndoe2@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="inputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="inputPassword1"
                className="form-control mb-2"
                onChange={(e) => setPassword(e.target.value)}
              />

              <label htmlFor="inputPassword2" className="form-label">
                Password Repeat
              </label>
              <input
                type="password"
                id="inputPassword2"
                className="form-control mb-2"
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />

              <label htmlFor="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control mb-2"
                id="exampleFormControlInput1"
                placeholder="0812XXXXXXXX"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />

              <label htmlFor="exampleFormControlInput4" className="form-label">
                Bio
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="exampleFormControlInput4"
                placeholder="im a photo maniac"
                onChange={(e) => setBio(e.target.value)}
              />

              <label htmlFor="exampleFormControlInput5" className="form-label">
                Website
              </label>
              <input
                type="text"
                className="form-control mb-2"
                id="exampleFormControlInput5"
                placeholder="www.johndoe.com"
                onChange={(e) => setWebsite(e.target.value)}
              />

              <button
                type="button"
                className="btn btn-primary w-100 mt-3"
                onClick={handleRegister}
              >
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
