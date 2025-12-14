import React from "react";

export default function PublishingDetails({
  publish = false,
  setPublish,
  category,
  onChange,
  author,
}) {
  const togglePublishStatus = () => {
    setPublish(!publish);
  };

  return (
    <div>
      <h1 className="font-semibold text-gray-600 mb-4">Publishing Details</h1>
      <div className="space-y-3">
        <label htmlFor="category" className="text-gray-500 font-semibold">
          Category
        </label>
        <div className="p-1">
          <input
            type="text"
            value={category}
            className="w-full border border-gray-200 rounded-lg "
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="category" className="text-gray-500 font-semibold">
            Author
          </label>
          <div className="p-1">
            <input
              type="text"
              value={author}
              className="w-full border border-gray-200 rounded-lg text-gray-400 font-semibold px-2"
              onChange={onChange}
            />
            <p className="text-sm text-gray-600">
              Posting as <span className="text-gray-800">{author}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-md font-semibold text-gray-500">Status</h1>
            <div className="text-sm text-gray-500">
              {publish ? <p>Visible to public</p> : <p>Save as Draft</p>}
            </div>
          </div>
          <button
            onClick={togglePublishStatus}
            className={`relative h-6 w-11 inline-flex rounded-full focus:outline-none cursor-pointer ${
              publish ? "bg-green-600" : "bg-slate-400"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 shadow-sm ${
                publish ? "translate-x-6" : "translate-x-1"
              }`}
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
}
