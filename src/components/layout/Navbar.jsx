import { FcManager } from "react-icons/fc";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const getPageTitle = (pathname) => {
    if (pathname === "/") return "Dashboard";
    if (pathname === "/blogs") return "Blogs";
    if (pathname === "/add-blog") return "Add Blog";
    if (pathname.includes("edit-blog")) return "Edit Blog";
    return "Page";
  };

  const { pathname } = useLocation();
  const title = getPageTitle(pathname);

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        <div className="flex items-center gap-3">
          <h1 className="text-xl md:text-2xl font-bold text-slate-900">
            {title}
          </h1>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden md:block w-px h-8 bg-slate-200"></div>

          <button className="flex items-center gap-3 hover:bg-slate-50 rounded-lg p-2 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
              <FcManager size={24} />
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-slate-900">Admin</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
