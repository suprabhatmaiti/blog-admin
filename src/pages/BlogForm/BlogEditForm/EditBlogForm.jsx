import React, { useEffect, useRef, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import ImageHandler from "../ImageHandler";
import BlogTitleDesc from "../BlogTitleDesc";
import PublishingDetails from "../PublishingDetails";
import Button from "../../../components/common/Button";
import { VerifyFormFields } from "../../../utils/BlogUtils";
import { useNavigate, useParams } from "react-router-dom";
import { addActivity } from "../../../utils/ActivityUtils";

const initialState = {
  title: "",
  description: "",
  category: "",
  author: "Admin",
  image: null,
  publishDate: "",
  publish: false,
};

export default function EditBlogFormPage() {
  const [formData, setFormData] = useState(initialState);
  const [imageError, setImageError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const initialData = useRef(initialState);

  const { id } = useParams();

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const blogToEdit = blogs.find((blog) => blog.id === id);

    if (blogToEdit) {
      setFormData(blogToEdit);
      initialData.current = blogToEdit;
    }
  }, [id]);

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

  const handleUpdate = () => {
    setIsSaving(true);
    try {
      const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

      const blogData = { ...formData };

      if (blogData.publish && !initialData.current.publish) {
        blogData.publishDate = new Date().toISOString();
      }

      const validationError = VerifyFormFields(blogData);
      if (validationError) {
        alert(validationError);
        return;
      }

      const updatedBlogs = blogs.map((blog) => {
        if (blog.id === id) {
          return {
            ...blog,
            ...blogData,
          };
        }
        return blog;
      });

      addActivity({
        action: "UPDATED",
        status: blogData.status,
        title: blogData.title,
        author: blogData.author,
      });

      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
      initialData.current = blogData;
      setImageError("");
      alert("Blog updated successfully");
      navigate("/blogs");
    } catch (error) {
      console.error("Failed to update blog:", error);
      alert("Failed to update blog. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };
  const onCancelClick = () => {
    navigate("/blogs");
  };

  return (
    <div className="min-h-screen w-full px-6 py-8 bg-slate-50 ">
      <div className="md:flex justify-between flex-wrap">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Edit Blog</h1>
          <p className="text-slate-500 text-base mt-1 ">
            Change the details below to edit your blog.
          </p>
        </div>
        <div className="flex items-center mb-4 gap-6 mt-4">
          <Button
            onClick={onCancelClick}
            variant="secondary"
            className="rounded-full gap-2"
          >
            Cancel
          </Button>
          <Button
            onClick={handleUpdate}
            disabled={!isFormChanged || isSaving}
            className="rounded-full gap-2"
          >
            <FaRegSave />
            Save Changes
          </Button>
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
