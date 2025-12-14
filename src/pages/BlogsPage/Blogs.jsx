import React, { useEffect, useMemo, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import BlogToolBar from "./BlogToolBar";
import { IoMdAdd } from "react-icons/io";
import BlogsTable from "./BlogsTable";

export default function BlogsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [status, setStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const blogs = useMemo(() => {
    const totalBlogs = localStorage.getItem("blogs")
      ? JSON.parse(localStorage.getItem("blogs"))
      : [];
    return totalBlogs;
  }, []);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  useEffect(() => {
    const totalBlogs = blogs.length;
    const blogsPerPage = 10;
    const totalPages = Math.ceil(totalBlogs / blogsPerPage);
    setTotalPages(totalPages);
  }, [blogs]);

  const filteredBlogs = useMemo(() => {
    let filtered = blogs;
    if (search) {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filter !== "All") {
      filtered = filtered.filter((blog) => blog.category === filter);
    }
    if (status !== "All") {
      filtered = filtered.filter((blog) => blog.status === status);
    }
    return filtered;
  }, [blogs, search, filter, status]);

  return (
    <div className="min-h-screen w-full md:px-6 px-4 py-8 bg-gray-100 space-y-4">
      <div className="flex gap-4 justify-between">
        <div>
          <h1 className="md:text-3xl text-2xl font-bold text-slate-900">
            All Blogs
          </h1>
          <p className="text-slate-500 text-sm md:text-base mt-1 ">
            Manage your blog posts and content.
          </p>
        </div>
        <div className="flex items-center mb-4 gap-6 mt-4">
          <button className="rounded-full md:px-4 md:py-2 flex justify-center items-center gap-2 cursor-pointer bg-red-500 text-white hover:bg-red-600 font-semibold  ">
            <IoMdAdd className="text-3xl md:text-4xl" />
            <h1 className="hidden">Add New Blog</h1>
          </button>
        </div>
      </div>
      <div>
        <BlogToolBar
          search={search}
          setSearch={onSearchChange}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <BlogsTable blogs={filteredBlogs} currentPage={currentPage} />
        <div className="flex items-center gap-4 bg-white border-t border-gray-200 py-2 justify-between px-4">
          <div>
            <p>
              Showing {5 * (currentPage - 1) + 1} to {currentPage * 5} entries
            </p>
          </div>
          <div className="space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
