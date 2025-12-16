import React, { useEffect, useMemo, useState } from "react";
import BlogToolBar from "./BlogToolBar";
import { IoMdAdd } from "react-icons/io";
import BlogsTable from "./BlogsTable";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button";
import { addActivity } from "../../utils/ActivityUtils";

export default function BlogsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [status, setStatus] = useState("All Status");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs")
      ? JSON.parse(localStorage.getItem("blogs"))
      : [];
    setBlogs(storedBlogs);
  }, []);

  const onAddBlog = () => {
    navigate("/add-blog");
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter, status]);

  const filteredBlogs = useMemo(() => {
    let filtered = blogs.filter((blog) => !blog.isDeleted);
    if (search) {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filter !== "All") {
      filtered = filtered.filter((blog) => blog.category === filter);
    }
    if (status !== "All Status") {
      const isPublished = status === "Published";
      filtered = filtered.filter((blog) => blog.publish === isPublished);
    }
    return filtered;
  }, [blogs, search, filter, status]);

  const blogsPerPage = 5;
  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return filteredBlogs.slice(startIndex, endIndex);
  }, [filteredBlogs, currentPage]);

  useEffect(() => {
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    if (totalPages > 0) setTotalPages(totalPages);
  }, [filteredBlogs]);

  const onDeleteBlog = (id) => {
    const blogs = localStorage.getItem("blogs")
      ? JSON.parse(localStorage.getItem("blogs"))
      : [];
    const newBlogs = blogs.map((blog) => {
      if (blog.id === id) {
        return {
          ...blog,
          isDeleted: true,
          deletedAt: new Date().toISOString(),
        };
      }
      return blog;
    });
    addActivity({
      action: "DELETED",
      title: newBlogs.find((blog) => blog.id === id)?.title,
    });

    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setBlogs(newBlogs.filter((blog) => !blog.isDeleted));
  };
  const onEditBlog = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  return (
    <div className="min-h-screen w-full md:px-6 px-4 py-8 bg-slate-50 space-y-4">
      <div className="flex md:flex-row flex-col justify-between gap-4">
        <div>
          <h1 className="md:text-3xl text-2xl font-bold text-slate-900">
            All Blogs
          </h1>
          <p className="text-slate-500 text-sm md:text-base mt-1 ">
            Manage your blog posts and content.
          </p>
        </div>
        <div className="flex items-center mb-4 gap-6 mt-4">
          <Button onClick={onAddBlog} className="gap-2 rounded-lg px-3 py-2">
            <IoMdAdd className="text-xl " />
            <span>Add New Blog</span>
          </Button>
        </div>
      </div>
      <div>
        <BlogToolBar
          search={search}
          setSearch={onSearchChange}
          filter={filter}
          setFilter={onFilterChange}
          status={status}
          setStatus={onStatusChange}
        />
      </div>
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm">
        <BlogsTable
          blogs={paginatedBlogs}
          currentPage={currentPage}
          onDeleteBlog={onDeleteBlog}
        />
        <div className="flex md:flex-row flex-col flex-wrap items-center gap-4 bg-white border-t border-gray-200 py-2 justify-between px-4 text-sm md:text-base text-slate-500">
          <div>
            <p>
              {filteredBlogs.length > 0 ? (
                <>
                  Showing {(currentPage - 1) * blogsPerPage + 1} to{" "}
                  {Math.min(currentPage * blogsPerPage, filteredBlogs.length)}{" "}
                  of {filteredBlogs.length} result
                  {filteredBlogs.length !== 1 && <span>s</span>}
                </>
              ) : (
                "No results"
              )}
            </p>
          </div>
          <div className="space-x-4 text-sm md:text-base">
            <Button
              onClick={handlePrev}
              disabled={currentPage === 1}
              variant="secondary"
              className="px-3 py-2 cursor-pointer"
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              variant="secondary"
              className="px-3 py-2 cursor-pointer"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
