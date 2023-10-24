import { useEffect, useState } from "react";
import { exploreData, likePostData, unlikePostData } from "../api/data";
import { useNavigate } from "react-router";

const useExplore = () => {
  const [explore, setExplore] = useState([]);
  const [isLike, setIsLike] = useState(explore?.isLike);
  const [totalLikes, setTotalLikes] = useState(explore?.totalLikes);
  const navigate = useNavigate();

  const handleUser = (id) => {
    navigate(`/user/${id}`);
  };

  const handleMyProfile = (id) => {
    navigate(`/my-profile/${id}`);
  };

  const handleLikePost = (postId) => {
    likePostData(postId)
      .then((res) => {
        setTotalLikes(totalLikes + 1);
        setIsLike(true);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleUnlikePost = (postId) => {
    unlikePostData(postId)
      .then((res) => {
        setTotalLikes(totalLikes - 1);
        setIsLike(false);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const getExplorePost = () => {
    exploreData()
      .then((res) => {
        const data = res?.data?.data?.posts;
        setExplore(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getExplorePost();
  }, []);

  return {
    explore,
    handleUser,
    handleMyProfile,
    isLike,
    handleLikePost,
    handleUnlikePost,
  };
};

export default useExplore;
