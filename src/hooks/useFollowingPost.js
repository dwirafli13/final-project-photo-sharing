import { useEffect, useState } from "react";
import { followingPostData, likePostData, unlikePostData } from "../api/data";

const useFollowingPost = () => {
  const [followingPost, setFollowingPost] = useState([]);

  const handleLikePost = (postId) => {
    likePostData(postId)
      .then((res) => {
        console.log(res);
        setFollowingPost((followingPost) =>
          followingPost.map((item) =>
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
        setFollowingPost((followingPost) =>
          followingPost.map((item) =>
            item?.id === postId
              ? { ...item, isLike: false, totalLikes: item?.totalLikes - 1 }
              : item
          )
        );
      })
      .catch((err) => console.log(err));
  };

  const getFollowingPost = () => {
    followingPostData()
      .then((res) => {
        const data = res?.data?.data?.posts;
        setFollowingPost(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFollowingPost();
  }, []);

  return { followingPost, handleLikePost, handleUnlikePost };
};

export default useFollowingPost;
