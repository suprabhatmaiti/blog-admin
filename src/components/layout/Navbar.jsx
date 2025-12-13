import React from "react";
import { FcManager, FcSearch } from "react-icons/fc";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const onSearch = (e) => {
    e.preventDefault();
    console.log("search");
  };
  const navigate = useNavigate();

  const onAddBlog = () => {
    navigate("/add-blog");
  };

  return (
    <div className="border-b border-gray-200 px-8 py-4 flex justify-between items-center w-full">
      <form
        onSubmit={onSearch}
        className="w-1/2 flex gap-2 items-center justify-between"
      >
        <input
          type="text"
          className="border border-gray-200 rounded-full px-4 py-2 w-full"
          placeholder="Search posts, authors .... "
        />
        <button
          type="submit"
          className="text-2xl hover:bg-gray-200 rounded-full p-2 cursor-pointer"
        >
          <FcSearch />
        </button>
      </form>
      <div className="flex gap-4">
        <div
          onClick={onAddBlog}
          className="rounded-full px-4 py-2 flex justify-center items-center gap-2 cursor-pointer bg-red-500 text-white hover:bg-red-600 font-semibold"
        >
          <div className="text-xl font-bold">
            <IoMdAdd />
          </div>
          Add Blog
        </div>
        <div className="text-2xl rounded-full cursor-not-allowed border border-gray-200 p-2">
          <FcManager />
        </div>
      </div>
    </div>
  );
}
