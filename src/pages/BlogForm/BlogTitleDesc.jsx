import React from "react";

export default function BlogTitleDesc({ onChange, titleValue, descValue }) {
  return (
    <div className="h-full flex flex-col">
      <div className="space-y-4 md:space-y-6 text-slate-700 md:h-full md:flex md:flex-col">
        <div className="flex flex-col bg-white px-4 md:px-8 py-6 md:py-8 rounded-xl gap-4">
          <label className="font-semibold text-slate-700 text-base md:text-lg">
            Blog Title
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter blog title"
            className="border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base"
            value={titleValue}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col gap-4 bg-white px-4 md:px-8 py-6 md:py-8 rounded-xl md:flex-1 md:min-h-0">
          <label className="font-semibold text-slate-700 text-base md:text-lg">
            Description
          </label>
          <textarea
            name="description"
            rows="6"
            placeholder="Enter blog description"
            className="border border-slate-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none text-sm md:text-base md:flex-1 md:h-full"
            value={descValue}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
