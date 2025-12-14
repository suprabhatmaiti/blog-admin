export const validateImage = (file) => {
  const allowedTypes = ["image/jpeg", "image/png"];
  const maxSize = 1024 * 1024; // 1MB

  if (!allowedTypes.includes(file.type)) {
    return "Only JPG or PNG images are allowed";
  }

  if (file.size > maxSize) {
    return "Image size must be less than 1MB";
  }

  return null;
};

export const fileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
