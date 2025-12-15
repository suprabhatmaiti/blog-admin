import React from "react";
import { IoIosSearch } from "react-icons/io";
import Dropdown from "../../components/common/Dropdown";

export default function BlogToolBar({
  search,
  setSearch,
  filter,
  setFilter,
  status,
  setStatus,
}) {
  const statusOptions = ["All Status", "Published", "Draft"];

  const filterOptions = [
    "All",
    "Technology",
    "Arts",
    "Sports",
    "Music",
    "Cinemas",
    "Politics",
  ];

  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-center md:justify-between gap-4 mt-4">
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
      <div className="flex">
        <Dropdown
          options={statusOptions}
          name="status"
          value={status}
          onChange={setStatus}
          className=" bg-white rounded-lg px-2 text-sm text-slate-600 cursor-pointer"
        />

        <Dropdown
          options={filterOptions}
          name="filter"
          value={filter}
          onChange={setFilter}
          className=" bg-white rounded-lg px-2 text-sm text-slate-600 cursor-pointer"
        />
      </div>
    </div>
  );
}
