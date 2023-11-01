import { deletePostData } from "../api/data";

const useDeletePost = () => {
  const handleDeletePost = (postId) => {
    deletePostData(postId)
      .then((res) => {
        alert(res?.data?.message);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return { handleDeletePost };
};

export default useDeletePost;
