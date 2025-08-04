import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages";
import Signup from "../../pages/signup";
import Layout from "../layout/layout";
import Notfound from "../../pages/notfound";
import Dashboard from "../../pages/admin/dashboard";
import ProtectedRoute from "../../utils/ProtectedRoutes";
import Blog from "../../pages/admin/blog";
import CreateBLog from "../../pages/admin/createBlog";
import AdminLayout from "../admin/AdminLayout";
import EditBlog from "../../pages/admin/editBlog";

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

    // admin routes
    {
      path: "",
      element: <AdminLayout />,
      errorElement: <Notfound />,
      children: [
        {
          path: "dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "dashboard/blog",
          element: (
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          ),
        },
        {
          path: "dashboard/blog/create",
          element: (
            <ProtectedRoute>
              <CreateBLog />
            </ProtectedRoute>
          ),
        },
        {
          path: "dashboard/blog/edit/:id",
          element: (
            <ProtectedRoute>
              <EditBlog />
            </ProtectedRoute>
          ),
        },
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
