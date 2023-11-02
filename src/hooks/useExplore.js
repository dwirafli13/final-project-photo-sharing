import { useEffect, useState } from "react";
import { exploreData, likePostData, unlikePostData } from "../api/data";
import { useNavigate } from "react-router";

const useExplore = () => {
  const [explore, setExplore] = useState([]);
  const navigate = useNavigate();

  const handleUser = (id) => {
    navigate(`/user/${id}`);
    window.location.reload();
  };

  const handleMyProfile = (id) => {
    navigate(`/my-profile/${id}`);
    window.location.reload();
  };

  const handleLikePost = (postId) => {
    likePostData(postId)
      .then((res) => {
        console.log(res);
        setExplore((explore) =>
          explore.map((item) =>
            item?.id === postId
              ? { ...item, isLike: true, totalLikes: item?.totalLikes + 1 }
              : item
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const handleUnlikePost = (postId) => {
    unlikePostData(postId)
      .then((res) => {
        console.log(res);
        setExplore((explore) =>
          explore.map((item) =>
            item?.id === postId
              ? { ...item, isLike: false, totalLikes: item?.totalLikes - 1 }
              : item
          )
        );
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
    handleLikePost,
    handleUnlikePost,
  };
};

export default useExplore;
