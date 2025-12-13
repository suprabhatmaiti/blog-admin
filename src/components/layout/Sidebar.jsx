import { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineFileAdd,
} from "react-icons/ai";
import { GrLogout } from "react-icons/gr";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiFileText, FiShield } from "react-icons/fi";
import { FcManager } from "react-icons/fc";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleSidebar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const activeClass =
    " flex gap-2 items-center text-white font-bold bg-red-500 px-2 py-2 rounded-lg cursor-pointer";
  const inActiveClass =
    "flex gap-2 items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer";

  return (
    <div className="relative">
      <button
        onClick={toggleSidebar}
        className={`hover:bg-gray-200 px-2 py-1 rounded-lg text-2xl absolute right-0 top-0 translate-x-3/4 md:hidden`}
      >
        {mobileMenuOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
      </button>

      <div
        className={` h-screen flex flex-col transform-all duration-300 hidden md:flex border-r border-gray-300   `}
      >
        <div className=" flex gap-4 justify-center items-center mb-4 px-8 py-4">
          <h1 className="text-3xl bg-red-500 text-white px-2 py-1 rounded-lg  font-bold">
            <FiShield />
          </h1>
          <h1 className="font-bold text-2xl text-center text-gray-600">
            Blog<span className=" text-red-500 ">Admin</span>
          </h1>
        </div>
        <div className="flex flex-col justify-between flex-grow  ">
          <nav className="space-y-3 font-semibold text-gray-600 text-lg py-3 px-4">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? activeClass : inActiveClass
              }
            >
              <LuLayoutDashboard />
              Dashboard
            </NavLink>
            <NavLink
              to={"/blogs"}
              className={({ isActive }) =>
                isActive ? activeClass : inActiveClass
              }
            >
              <FiFileText />
              All Blogs
            </NavLink>
            <NavLink
              to={"/add-blog"}
              className={({ isActive }) =>
                isActive ? activeClass : inActiveClass
              }
            >
              <AiOutlineFileAdd /> Add New Blog
            </NavLink>
          </nav>
          <div className="px-4 py-5 bg-gray-100 w-full flex justify-between items-center ">
            <div className="flex gap-4 items-center justify-center">
              <FcManager className="text-4xl border border-gray-400 rounded-full" />
              <div>
                <h1>Admin</h1>
                <p>admin@blog.com</p>
              </div>
            </div>
            {/* <button className="  hover:text-red-600 cursor-pointer text-lg font-semibold flex justify-end">
              <GrLogout className="text-xl font-bold" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
