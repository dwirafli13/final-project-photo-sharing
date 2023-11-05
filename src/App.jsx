import React from "react";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Register from "./pages/register/Register";
import EditProfile from "./pages/edit-profile/EditProfile";
import { useRoutes } from "react-router";
import ProtectedRoute from "./routes/ProtectedRoute";
import FollowingPost from "./pages/following-post/FollowingPost";
import MyProfile from "./pages/my-profile/MyProfile";

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
  {
    path: "/my-profile/:id",
    element: (
      <ProtectedRoute>
        <MyProfile />
      </ProtectedRoute>
    ),
  },
];

function App() {
  const element = useRoutes(routes);

  return element;
}

export default App;
