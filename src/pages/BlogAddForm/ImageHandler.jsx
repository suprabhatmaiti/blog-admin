import { useState } from "react";
import { FaRegSave, FaCloudUploadAlt } from "react-icons/fa";
import { validateImage, fileToBase64 } from "../../utils/ImageUtils";

export default function ImageHandler({ value, onChange, error, setError }) {
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const validationError = validateImage(file);
    if (validationError) {
      setError(validationError);
      return;
    }
    const base64 = await fileToBase64(file);
    onChange(base64);
    setError("");
  };
  const onCancelImage = () => {
    onChange(null);
  };

  return (
    <div className=" w-full mt-8 space-y-6 bg-white p-2 rounded-xl px-8 py-8 ">
      <h3 className="font-semibold text-gray-600 mb-4 text-lg">
        Featured Image
      </h3>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <div
        className={`relative border-2 border-dashed rounded-xl p-6 text-center border-red-100`}
      >
        {value ? (
          <div className="relative w-full rounded-lg overflow-hidden shadow-md">
            <button
              onClick={onCancelImage}
              className="absolute top-0 right-0  bg-red-600 text-white px-2 cursor-pointer"
            >
              X
            </button>
            <img
              src={value}
              alt="Preview"
              className=" w-40 h-65 object-contain"
            />
          </div>
        ) : (
          <div className="cursor-ppointer">
            <div className="w-10 h-10 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <FaCloudUploadAlt size={20} />
            </div>
            <p className="text-sm text-slate-600 font-medium">
              Click to upload
            </p>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer "
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
