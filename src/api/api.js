import axios from "axios";

const API_URL = "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1";

export const getExplorePost = () => {
  axios
    .get(`${API_URL}/explore-post?size=10&page=1`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
