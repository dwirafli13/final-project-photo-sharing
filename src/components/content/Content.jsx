import React, { useState, useEffect } from "react";
import "./Content.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Content = () => {
  const [explore, setExplore] = useState({});

  const getExplorePost = () => {
    const apiKey = "c7b411cc-0e7c-4ad1-aa3f-822b00e7734b";
    const apiUrl = `https://photo-sharing-api-bootcamp.do.dibimbing.id/api/v1/explore-post?size=10&page=1&appId=${apiKey}`;
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getExplorePost();
  }, []);
  return (
    <div className="content">
      <nav className="nav nav-pills nav-justified navbar-content">
        <button className="nav-link btn btn-primary">Explore</button>
        <button className="nav-link btn btn-primary">Following</button>
      </nav>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
        aliquid, explicabo fuga delectus dicta obcaecati a provident incidunt ex
        architecto magni quo. Impedit odio laboriosam voluptatibus voluptate
        itaque inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
        aliquid, explicabo fuga delectus dicta obcaecati a provident incidunt ex
        architecto magni quo. Impedit odio laboriosam voluptatibus voluptate
        itaque inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
        aliquid, explicabo fuga delectus dicta obcaecati a provident incidunt ex
        architecto magni quo. Impedit odio laboriosam voluptatibus voluptate
        itaque inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
        aliquid, explicabo fuga delectus dicta obcaecati a provident incidunt ex
        architecto magni quo. Impedit odio laboriosam voluptatibus voluptate
        itaque inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
        aliquid, explicabo fuga delectus dicta obcaecati a provident incidunt ex
        architecto magni quo. Impedit odio laboriosam voluptatibus voluptate
        itaque inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
        aliquid, explicabo fuga delectus dicta obcaecati a provident incidunt ex
        architecto magni quo. Impedit odio laboriosam voluptatibus voluptate
        itaque inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
        aliquid, explicabo fuga delectus dicta obcaecati a provident incidunt ex
        architecto magni quo. Impedit odio laboriosam voluptatibus voluptate
        itaque inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
        aliquid, explicabo fuga delectus dicta obcaecati a provident incidunt ex
        architecto magni quo. Impedit odio laboriosam voluptatibus voluptate
        itaque inventore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magnam
        aliquid, explicabo fuga delectus dicta obcaecati a provident incidunt ex
        architecto magni quo. Impedit odio laboriosam voluptatibus voluptate
        itaque inventore?
      </p>
    </div>
  );
};

export default Content;
