import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function BlogToolBar({
  search,
  setSearch,
  filter,
  setFilter,
  status,
  setStatus,
}) {
  return (
    <div>
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 mt-4">
        <div className="relative flex-1">
          <IoIosSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={setSearch}
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-sm"
          />
        </div>
        <div className="flex gap-4">
          <select
            value={status}
            className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
          <select
            value={filter}
            className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
          </select>
        </div>
      </div>
    </div>
  );
}
