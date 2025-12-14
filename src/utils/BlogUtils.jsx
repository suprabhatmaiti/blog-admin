import React from "react";

export const VerifyFormFields = (formData) => {
  if (!formData.title) {
    return "Title is required";
  }
  if (!formData.description) {
    return "Description is required";
  }
  if (!formData.category) {
    return "Category is required";
  }
  if (!formData.author) {
    return "Author is required";
  }
  if (!formData.image) {
    return "Image is required";
  }
};
