import { useEffect, useState } from "react";
import { exploreData } from "../api/data";
import { useNavigate } from "react-router";

const useExplore = () => {
  const [explore, setExplore] = useState([]);
  const navigate = useNavigate();
  const handleUser = (id) => {
    navigate(`/user/${id}`);
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

  return { explore, handleUser };
};

export default useExplore;
