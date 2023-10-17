import { useState, useEffect } from "react";
import { myFollowingData } from "../api/data";

const useMyFollowing = () => {
  const [myFollowing, setMyFollowing] = useState([]);

  const getMyFollowing = () => {
    myFollowingData()
      .then((res) => {
        const data = res?.data?.data?.users;
        setMyFollowing(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMyFollowing();
  }, []);

  return { myFollowing };
};

export default useMyFollowing;
