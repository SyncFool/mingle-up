import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "../Components/SignIn";
import Register from "../Components/Register";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const PageRoutes = () => {
  return <RouterProvider router={router} />;
};

export default PageRoutes;
