import React from "react";
import { FcManager, FcSearch } from "react-icons/fc";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="border-b border-slate-200 px-8 py-4 flex justify-between items-center w-full bg-white">
      <div className="flex gap-4 justify-between">
        <div></div>
        <div className="text-2xl rounded-full cursor-not-allowed border border-slate-200 p-2 bg-slate-50 text-slate-600">
          <FcManager />
        </div>
      </div>
    </div>
  );
}
