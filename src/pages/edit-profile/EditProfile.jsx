import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import BottomNavbar from "../../components/bottom-navbar/BottomNavbar";
import useLoggedUser from "../../hooks/useLoggedUser";
import useUpdateProfile from "../../hooks/useUpdateProfile";
import "./EditProfile.css";

const EditProfile = () => {
  const { loggedUser } = useLoggedUser();
  const {
    setName,
    setUsername,
    setEmail,
    setProfilePictureUrl,
    setPhoneNumber,
    setBio,
    setWebsite,
    handleUpdateProfile,
  } = useUpdateProfile();
  return (
    <div className="container">
      <div className="content-edit-profile form-margin-edit-profile">
        <div className="mb-3 d-flex flex-column align-items-center">
          <img
            src={loggedUser?.profilePictureUrl}
            className="img-fluid rounded-circle"
            width={200}
            height={200}
          />
          <label htmlFor="formFile" className="form-label">
            Profile Picture URL
          </label>
          <input
            className="form-control"
            type="text"
            defaultValue={loggedUser?.profilePictureUrl}
            placeholder="Enter Profile Picture Url"
            onChange={(e) => setProfilePictureUrl(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            defaultValue={loggedUser?.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            defaultValue={loggedUser?.username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            defaultValue={loggedUser?.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            defaultValue={loggedUser?.phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Bio
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            defaultValue={loggedUser?.bio}
            placeholder="Enter Your Bio"
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Website
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            defaultValue={loggedUser?.website}
            placeholder="Enter Your Website"
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" onClick={handleUpdateProfile}>
          Update Profile
        </button>
      </div>
      <Sidebar />
      <BottomNavbar />
    </div>
  );
};

export default EditProfile;
