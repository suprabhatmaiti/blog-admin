import React from "react";
import { MdEdit } from "react-icons/md";
import { IoIosTrash } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function BlogTableData({ blog, onDelete }) {
  const navigate = useNavigate();

  const date = blog.publishDate
    ? new Date(blog.publishDate).toLocaleDateString()
    : "";
  const onDeleteClick = () => {
    onDelete(blog.id);
  };
  const onEditClick = () => {
    navigate(`/edit-blog/${blog.id}`);
  };

  return (
    <tr className="hover:bg-slate-50/80 transition-colors group  ">
      <td className="px-6 py-4 font-medium text-slate-900">{blog.title}</td>
      <td className="px-6 py-4 text-slate-500">
        <span className="px-2 py-1 bg-slate-100 rounded text-xs font-medium text-slate-600">
          {blog.category}
        </span>
      </td>
      <td className="px-6 py-4 text-slate-500 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs flex items-center justify-center font-bold">
          {blog.author.charAt(0)}
        </div>
        {blog.author}
      </td>
      <td className="px-6 py-4">
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-semibold border flex w-fit items-center gap-1.5
                      ${
                        blog.publish == true
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-amber-50 text-amber-700 border-amber-200"
                      }`}
        >
          {blog.publish == true ? "Published" : "Draft"}
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              blog.publish == true ? "bg-emerald-500" : "bg-amber-500"
            }`}
          ></span>
          {blog.publish}
        </span>
      </td>
      <td className="px-6 py-4 text-slate-500">{date}</td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-1 opacity-60 group-hover:opacity-100">
          <button
            onClick={onEditClick}
            className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
          >
            <MdEdit size={20} />
          </button>
          <button
            onClick={onDeleteClick}
            className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
          >
            <IoIosTrash size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
}
