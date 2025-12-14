import React from "react";

export default function BlogTitleDesc({ onChange, titleValue, descValue }) {
  return (
    <div>
      <div className=" mt-8 space-y-6 text-gray-600">
        <div className="flex flex-col bg-white px-8 py-8 rounded-xl gap-4">
          <label className="font-semibold">Blog Title</label>
          <input
            name="title"
            type="text"
            className="border border-gray-200 p-2 rounded-2xl"
            value={titleValue}
            onChange={onChange}
          />
        </div>
        <div className="flex flex-col gap-4 bg-white px-8 py-8 rounded-xl ">
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            rows="4"
            cols="50"
            className="border border-gray-200 h-60 p-2 rounded-2xl"
            value={descValue}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
