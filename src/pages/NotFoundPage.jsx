import { MdLinkOff, MdArrowBack } from "react-icons/md";
import Button from "../components/common/Button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const onBackClick = () => navigate("/");
  return (
    <div className="min-h-screen px-16 py-8 flex flex-col items-center">
      <div>
        <div className=" relative w-full max-w-2xl flex flex-col items-center text-center ">
          <h1 className="  text-[120px] sm:text-[180px] font-extrabold bg-linear-to-b text-transparent from-red-600 from-20%  to-red-200  select-none bg-clip-text">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-12 bg-white px-4 py-2 text-red-600 text-[40px] shadow-lg rotate-20 hover:rotate-0 transition-all duration-300 rounded-xl">
            <MdLinkOff />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-700">
            Page not found
          </h2>
          <p className="text-slate-500 text-center dark:text-slate-400 text-base sm:text-lg leading-relaxed">
            Oops! The page you are looking for doesn't exist. It might have been
            moved or deleted.
          </p>
        </div>
        <div className="flex gap-4 justify-center mt-8 ">
          <Button
            onClick={onBackClick}
            className="space-x-2 text-lg cursor-pointer active:outline-none"
          >
            <MdArrowBack className="text-lg" />
            <p>Back to Dashboard</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
