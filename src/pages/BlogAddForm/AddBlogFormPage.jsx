import React, { useRef, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import ImageHandler from "./ImageHandler";
import BlogTitleDesc from "./BlogTitleDesc";
import PublishingDetails from "./PublishingDetails";
import { VerifyFormFields } from "../../utils/BlogUtils";

const initialState = {
  title: "",
  description: "",
  category: "",
  author: "Admin",
  image: null,
  publishDate: "",
  publish: false,
};

export default function AddBlogFormPage() {
  const [formData, setFormData] = useState(initialState);
  const [imageError, setImageError] = useState("");
  const initialData = useRef(initialState);

  const isFormChanged =
    JSON.stringify(formData) !== JSON.stringify(initialData.current);

  const handleImageChange = (value) => {
    setFormData((prev) => ({ ...prev, image: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePublish = (value) => {
    setFormData((prev) => ({ ...prev, publish: value }));
  };

  const handleSave = () => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const blogData = { ...formData };

    if (blogData.publish) {
      blogData.publishDate = new Date().toISOString().toString().split("T")[0];
    }
    console.log(blogData);

    const validationError = VerifyFormFields(blogData);
    if (validationError) {
      alert(validationError);
      return;
    }

    const newBlog = {
      ...blogData,
      id: new Date().getTime().toString(),
      isDeleted: false,
      deletedAt: null,
      createdAt: new Date().toISOString().toString().split("T")[0],
    };

    localStorage.setItem("blogs", JSON.stringify([...blogs, newBlog]));
    initialData.current = formData;
    // setFormData(initialState);
    // setImageError("");
    // alert("Blog saved successfully");
  };

  return (
    <div className="min-h-screen w-full px-6 py-8 bg-gray-100 ">
      <div className="md:flex justify-between flex-wrap">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Create New Post</h1>
          <p className="text-slate-500 text-base mt-1 ">
            Fill the details below to create a new blog.
          </p>
        </div>
        <div className="flex items-center mb-4 gap-6 mt-4">
          <button className="rounded-full px-4 py-2 flex justify-center items-center gap-2 cursor-pointer bg-white text-gray-700 hover:bg-gray-400 font-semibold">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={!isFormChanged}
            className="rounded-full px-4 py-2 flex justify-center items-center gap-2 cursor-pointer bg-red-500 text-white hover:bg-red-600 font-semibold disabled:cursor-not-allowed disabled:bg-gray-500 "
          >
            <FaRegSave />
            Save Changes
          </button>
        </div>
      </div>
      <div className="md:flex gap-8">
        <div>
          <BlogTitleDesc
            onChange={handleChange}
            titleValue={formData.title}
            descValue={formData.description}
          />
        </div>

        <div className="w-full flex flex-col gap-6 ">
          <div>
            <ImageHandler
              error={imageError}
              setError={setImageError}
              value={formData.image}
              onChange={handleImageChange}
            />
          </div>
          <div className="bg-white w-full p-8 rounded-xl px-8">
            <PublishingDetails
              publish={formData.publish}
              setPublish={togglePublish}
              category={formData.category}
              onChange={handleChange}
              author={formData.author}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
