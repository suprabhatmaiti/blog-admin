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
    <div className="w-full space-y-4 bg-white p-4 md:p-6 rounded-xl">
      <h3 className="font-semibold text-slate-700 text-base md:text-lg">
        Featured Image
      </h3>
      {error && <p className="text-red-500 text-xs md:text-sm">{error}</p>}
      <div className="relative border-2 border-dashed rounded-lg md:rounded-xl p-4 md:p-6 text-center border-indigo-100 bg-indigo-50/50">
        {value ? (
          <div className="relative w-full rounded-lg overflow-hidden shadow-md">
            <button
              onClick={onCancelImage}
              className="absolute top-2 right-2 bg-red-200 text-red-500 px-2 py-1 cursor-pointer text-sm rounded hover:bg-red-500 hover:text-white"
            >
              X
            </button>
            <img
              src={value}
              alt="Preview"
              className="w-24 md:w-40 h-auto max-h-48 md:max-h-64 object-contain mx-auto"
            />
          </div>
        ) : (
          <div className="cursor-pointer">
            <div className="w-8 md:w-10 h-8 md:h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
              <FaCloudUploadAlt size={16} />
            </div>
            <p className="text-xs md:text-sm text-slate-600 font-medium">
              Click to upload
            </p>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept="image/png, image/jpeg"
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}
