import React from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import User from "./pages/user";
import { useRoutes } from "react-router";

const routes = [
  { path: "/", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/user", element: <User /> },
];

function App() {
  const element = useRoutes(routes);

  return element;
}

export default App;
