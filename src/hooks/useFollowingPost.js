import { useEffect, useState } from "react";
import { followingPostData } from "../api/data";

const useFollowingPost = () => {
    const [followingPost, setFollowingPost] = useState([]);

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

      return {followingPost}
}

export default useFollowingPost