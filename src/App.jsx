import React, { useEffect } from "react";
import Dashboard from "./pages/DashboardPage/Dashboard";
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  useEffect(() => {
    // Auto-purge deleted blogs older than 24 hours
    const blogs = localStorage.getItem("blogs")
      ? JSON.parse(localStorage.getItem("blogs"))
      : [];

    const now = new Date().getTime();
    const autoPurgeTime = 24 * 60 * 60 * 1000;

    const purgedBlogs = blogs.filter((blog) => {
      if (blog.isDeleted && blog.deletedAt) {
        const deletedTime = new Date(blog.deletedAt).getTime();
        const timeDifference = now - deletedTime;
        return timeDifference < autoPurgeTime;
      }
      return true;
    });

    if (purgedBlogs.length !== blogs.length) {
      localStorage.setItem("blogs", JSON.stringify(purgedBlogs));
      console.log(
        `Auto-purged ${
          blogs.length - purgedBlogs.length
        } blog(s) deleted more than 24 hours ago`
      );
    }
  }, []);

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
