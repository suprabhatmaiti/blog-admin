import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import AddBlogFormPage from "./pages/BlogForm/BlogAddForm/AddBlogFormPage.jsx";
import BlogsPage from "./pages/BlogsPage/Blogs.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import EditBlogFormPage from "./pages/BlogForm/BlogEditForm/EditBlogForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/blogs",
        element: <BlogsPage />,
      },
      {
        path: "/add-blog",
        element: <AddBlogFormPage />,
      },
      {
        path: "/edit-blog/:id",
        element: <EditBlogFormPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
