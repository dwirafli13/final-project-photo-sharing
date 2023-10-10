import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Register from "./pages/register/Register";
import { useRoutes } from "react-router";

const routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/home", element: <Home /> },
  { path: "/user", element: <User /> },
];

function App() {
  const element = useRoutes(routes);

  return element;
}

export default App;
