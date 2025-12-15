import React, { useRef, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import ImageHandler from "../ImageHandler";
import BlogTitleDesc from "../BlogTitleDesc";
import PublishingDetails from "../PublishingDetails";
import Button from "../../../components/common/Button";
import { VerifyFormFields } from "../../../utils/BlogUtils";

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
  const [isSaving, setIsSaving] = useState(false);
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
    setIsSaving(true);
    try {
      const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

      const blogData = { ...formData };

      if (blogData.publish) {
        blogData.publishDate = new Date().toISOString();
      }

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
      setFormData(initialState);
      setImageError("");
      alert("Blog saved successfully");
    } catch (error) {
      console.error("Failed to save blog:", error);
      alert("Failed to save blog. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen w-full px-6 py-8 bg-slate-50 ">
      <div className="md:flex justify-between flex-wrap">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Create New Post</h1>
          <p className="text-slate-500 text-base mt-1 ">
            Fill the details below to create a new blog.
          </p>
        </div>
        <div className="flex items-center mb-4 gap-6 mt-4">
          <Button variant="secondary" className="rounded-full gap-2">
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!isFormChanged || isSaving}
            className="rounded-full gap-2"
          >
            <FaRegSave />
            Save Changes
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex gap-8">
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
