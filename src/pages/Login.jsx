import React from "react";

const Login = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col text-center">
            <img
              src="logoipsum-297.svg"
              alt="logo ipsum"
              height={"75%"}
              width={"75%"}
              className="img-fluid"
            />
          </div>
          <div className="col">
            <h1>Share Your Greatest Moment</h1>
            <p>Please Login First</p>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
              <label htmlFor="inputPassword5" className="form-label mt-2">
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
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Register
                </a>
              </p>
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="staticBackdropLabel">
                        Register
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="John Doe"
                        />

                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label mt-2"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="john123"
                        />

                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label mt-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="john123@example.com"
                        />

                        <label
                          htmlFor="inputPassword5"
                          className="form-label mt-2"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          id="inputPassword5"
                          className="form-control"
                          placeholder="***********"
                        />

                        <label
                          htmlFor="inputPassword5"
                          className="form-label mt-2"
                        >
                          Password Repeat
                        </label>
                        <input
                          type="password"
                          id="inputPassword5"
                          className="form-control"
                          placeholder="***********"
                        />

                        <label htmlFor="formFile" className="form-label mt-2">
                          Profile Picture
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                        />

                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label mt-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="08XXXXXXXXXX"
                        />

                        <button
                          type="button"
                          className="btn btn-primary w-100 mt-3"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
