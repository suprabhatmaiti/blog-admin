import React from "react";
import { LuFileText } from "react-icons/lu";

export default function Card({ label, value, type = 1 }) {
  let classes =
    type == 1
      ? "text-blue-700"
      : type == 2
      ? "text-green-700"
      : "text-yellow-700";

  return (
    <div className="border border-gray-100 bg-white p-4 w-full md:w-1/4 flex-grow rounded-lg shadow">
      <LuFileText className={`${classes} font-semibold text-2xl`} />
      <h1 className="text-gray-600 text-lg font-semibold mt-2">{label}</h1>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
