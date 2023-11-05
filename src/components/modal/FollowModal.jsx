import React, { useEffect, useState } from "react";
import { getFollowersData, getFollowingData } from "../../api/data";
import useExplore from "../../hooks/useExplore";

const FollowModal = ({ id }) => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const { handleUser } = useExplore();

  const getFollowers = () => {
    getFollowersData(id)
      .then((res) => {
        setFollowers(res?.data?.data?.users);
      })
      .catch((err) => console.log(err));
  };

  const getFollowing = () => {
    getFollowingData(id)
      .then((res) => {
        setFollowing(res?.data?.data?.users);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getFollowers(), getFollowing();
  }, []);

  return (
    <>
      {/* Followers Modal */}
      <div
        className="modal fade"
        id="followersModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Followers
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {followers.map((item, key) => (
                <div key={key} className="mb-2">
                  <button
                    className="btn p-0 d-flex align-items-center"
                    onClick={() => handleUser(item?.id)}
                  >
                    <img
                      src={item?.profilePictureUrl}
                      width={40}
                      height={40}
                      className="rounded-circle me-2"
                    />
                    {item?.username}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Followers Modal */}

      {/* Following Modal */}
      <div
        className="modal fade"
        id="followingModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Following
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {following.map((item, key) => (
                <div key={key} className="mb-2">
                  <button
                    className="btn p-0 d-flex align-items-center"
                    onClick={() => handleUser(item?.id)}
                  >
                    <img
                      src={item?.profilePictureUrl}
                      width={40}
                      height={40}
                      className="rounded-circle me-2"
                    />
                    {item?.username}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Following Modal */}
    </>
  );
};

export default FollowModal;
