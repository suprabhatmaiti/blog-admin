import { useState } from "react";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiOutlineFileAdd,
} from "react-icons/ai";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiFileText, FiShield } from "react-icons/fi";
import { FcManager } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { BsFillMenuAppFill, BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Sidebar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const activeClass =
    "flex gap-2 items-center text-white font-bold bg-red-500 px-2 py-2 rounded-lg cursor-pointer shadow-sm";
  const inActiveClass =
    "flex gap-2 items-center hover:bg-slate-200 px-2 py-2 rounded-lg cursor-pointer";

  return (
    <>
      {mobileMenuOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed backdrop-blur-lg inset-0 z-50 md:hidden"
        ></div>
      )}
      <aside
        className={`fixed left-0 top-0 h-screen md:w-64 md:translate-x-0 bg-white border-r border-slate-300 transition-all duration-300 z-50 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col  `}
      >
        <button
          onClick={toggleSidebar}
          className={`absolute right-0 top-4 translate-x-8 px-1 py-2 bg-red-400 text-white rounded-r-full cursor-pointer hover:text-red-500 hover:bg-red-200 text-2xl md:hidden ${
            mobileMenuOpen ? "opacity-100" : "opacity-40"
          } `}
        >
          {mobileMenuOpen ? <FaArrowLeft /> : <FaArrowRight />}
        </button>

        <div className="flex gap-4 justify-center items-center md:mb-4 px-8 py-4 border-b border-slate-200 md:border-none">
          <h1 className="text-xl md:text-3xl bg-red-500 text-white px-2 py-1 rounded-lg font-bold">
            <FiShield />
          </h1>
          <h1 className="font-bold text-xl md:text-2xl text-slate-600">
            Blog<span className="text-red-500">Admin</span>
          </h1>
        </div>

        <nav className="space-y-3 font-semibold text-slate-600 text-sm md:text-lg py-3 px-4 grow">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
            onClick={toggleSidebar}
          >
            <LuLayoutDashboard />
            Dashboard
          </NavLink>

          <NavLink
            to="/blogs"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
          >
            <FiFileText />
            All Blogs
          </NavLink>

          <NavLink
            to="/add-blog"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
          >
            <AiOutlineFileAdd />
            Add New Blog
          </NavLink>
        </nav>

        <div className="mt-auto px-4 py-5 bg-slate-100 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <FcManager className=" text-2xl md:text-4xl border border-slate-400 rounded-full" />
            <div>
              <h1 className="font-semibold">Admin</h1>
              <p className="text-sm text-slate-500">admin@blog.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
