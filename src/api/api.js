import axios from "axios";
import { useState } from "react";

const API_URL = "https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1";
const apiKey = "c7b411cc-0e7c-4ad1-aa3f-822b00e7734b"

const [explore, setExplore] = useState({});

export const getExplorePost = () => {
  const headers = {
    apiKey: apiKey,
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJhNTRjNTllNy1hMWI2LTRhYzQtYWU3Yi05ODg1YTk4ZWQ4NjkiLCJyb2xlIjoiZ2VuZXJhbCIsImlhdCI6MTY4MTAxMzEzN30.AxhIjhRXMoFoxldGOqwLur6jNBC-mx9-Ig18RWfYkLM",
    "Content-Type": "application/json",
  };
  axios
    .get(`${API_URL}/explore-post?size=10&page=1`, {headers: headers})
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
