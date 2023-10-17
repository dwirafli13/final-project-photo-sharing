import { useEffect, useState } from "react";
import { exploreData } from "../api/data";

const useExplore = () => {
    const [explore, setExplore] = useState([]);

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

      return {explore}
}

export default useExplore