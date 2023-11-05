import { useEffect, useState } from "react";
import { getCreateComment, postByIdData } from "../api/data";

const useCreateComment = () => {
  const [comment, setComment] = useState("");
  const [postById, setPostById] = useState([]);

  const handleComment = (postId) => {
    const payload = {
      postId: postId,
      comment: comment,
    };

    getCreateComment(payload)
      .then((res) => {
        alert(res?.data?.message);
      })
      .catch((err) => console.log(err));
  };

  return { setComment, handleComment, comment };
};

export default useCreateComment;
