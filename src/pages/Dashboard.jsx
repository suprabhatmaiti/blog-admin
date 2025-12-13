import React from "react";
import { LuFileText } from "react-icons/lu";
import Card from "../components/common/Card";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full px-6 py-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-slate-900">Overview</h1>
      <p className="text-slate-500 text-base mt-1">
        Welcome back, here's what's happening with your blog today.
      </p>
      <div className="mt-6 flex justify-between flex-wrap gap-4">
        <Card label={"Total Blogs"} value={"10"} type={1} />
        <Card label={"Published"} value={"10"} type={2} />
        <Card label={"Total Blogs"} value={"10"} type={3} />
      </div>
    </div>
  );
}
