import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages";
import Signup from "../../pages/signup";
import Layout from "../layout/layout";
import Notfound from "../../pages/notfound";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Notfound />,
      children: [
        { path: "", element: <Home /> },
        { path: "signup", element: <Signup /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
