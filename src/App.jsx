import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Register from "./pages/register/Register";
import EditProfile from "./pages/edit-profile/EditProfile";
import { useRoutes } from "react-router";
import ProtectedRoute from "./routes/ProtectedRoute";
import FollowingPost from "./pages/following-post/FollowingPost";

const routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/following-post",
    element: (
      <ProtectedRoute>
        <FollowingPost />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user/:id",
    element: (
      <ProtectedRoute>
        <User />
      </ProtectedRoute>
    ),
  },
  {
    path: "/edit-profile",
    element: (
      <ProtectedRoute>
        <EditProfile />
      </ProtectedRoute>
    ),
  },
];

function App() {
  const element = useRoutes(routes);

  return element;
}

export default App;
