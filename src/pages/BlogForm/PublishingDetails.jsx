import React from "react";
import Dropdown from "../../components/common/Dropdown";

const CATEGORY_OPTIONS = [
  "Technology",
  "Arts",
  "Sports",
  "Music",
  "Cinemas",
  "Politics",
];

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
      <h1 className="font-semibold text-slate-700 mb-4 text-sm md:text-base">
        Publishing Details
      </h1>
      <div className="space-y-3 md:space-y-4">
        <div>
          <label
            htmlFor="category"
            className="text-slate-500 font-semibold text-sm md:text-base block mb-2"
          >
            Category
          </label>
          <div>
            <Dropdown
              name="category"
              value={category}
              options={CATEGORY_OPTIONS}
              onChange={onChange}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="category"
            className="text-slate-500 font-semibold text-sm md:text-base block mb-2"
          >
            Author
          </label>
          <div>
            <input
              type="text"
              name="author"
              value={author}
              className="w-full border border-slate-200 rounded-lg text-slate-700 font-semibold px-3 py-2 text-sm md:text-base"
              onChange={onChange}
            />
            <p className="text-xs md:text-sm text-slate-600 mt-1">
              Posting as{" "}
              <span className="text-slate-800 font-medium">{author}</span>
            </p>
          </div>
        </div>

        <div>
          <label
            htmlFor="category"
            className="text-slate-500 font-semibold text-sm md:text-base block mb-2"
          >
            Publish Date
          </label>
          <div className="cursor-not-allowed">
            <h1 className="w-full border border-slate-200 rounded-lg text-slate-700 font-semibold px-3 py-2 text-sm md:text-base bg-slate-50">
              {publish
                ? new Date().toISOString().toString().split("T")[0]
                : "yyyy-mm-dd".toUpperCase()}
            </h1>
          </div>
        </div>
        <div className="flex justify-between items-start sm:items-center gap-4 sm:gap-0 pt-2">
          <div>
            <h1 className="text-sm md:text-base font-semibold text-slate-500">
              Status
            </h1>
            <div className="text-xs md:text-sm text-slate-500 mt-1">
              {publish ? <p>Visible to public</p> : <p>Save as Draft</p>}
            </div>
          </div>
          <button
            onClick={togglePublishStatus}
            className={`relative h-6 w-11 inline-flex rounded-full focus:outline-none cursor-pointer ${
              publish ? "bg-green-600" : "bg-slate-300"
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
