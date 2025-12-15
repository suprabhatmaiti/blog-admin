import React from "react";
import { IoIosSearch } from "react-icons/io";
import BlogTableData from "./BlogTableData";

export default function BlogsTable({ blogs, onDeleteBlog }) {
  const onDelete = (id) => {
    onDeleteBlog(id);
  };

  const TableData = blogs.map((blog) => {
    return <BlogTableData blog={blog} key={blog.id} onDelete={onDelete} />;
  });

  return (
    <div className="overflow-x-auto ">
      <table className="w-full text-left text-base">
        <thead className="bg-slate-50/50 border-b border-slate-200">
          <tr>
            <th className="px-6 py-4 font-semibold text-slate-600">Title</th>
            <th className="px-6 py-4 font-semibold text-slate-600">Category</th>
            <th className="px-6 py-4 font-semibold text-slate-600">Author</th>
            <th className="px-6 py-4 font-semibold text-slate-600">Status</th>
            <th className="px-6 py-4 font-semibold text-slate-600">Date</th>
            <th className="px-6 py-4 font-semibold text-slate-600 text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {blogs.length > 0 ? (
            TableData
          ) : (
            <tr>
              <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-3">
                    <IoIosSearch size={20} />
                  </div>
                  <p>No blogs found matching your filters.</p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
