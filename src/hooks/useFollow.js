import { useEffect, useState } from "react";
import { followData, unfollowData } from "../api/data";
import useMyFollowing from "./useMyFollowing";

const useFollow = () => {
  const [isFollow, setIsFollow] = useState(false);

  const handleFollow = (userIdFollow) => {
    followData(userIdFollow)
      .then((res) => {
        setIsFollow(true);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleUnfollow = (userId) => {
    unfollowData(userId)
      .then((res) => {
        setIsFollow(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return { isFollow, handleFollow, handleUnfollow };
};

export default useFollow;
