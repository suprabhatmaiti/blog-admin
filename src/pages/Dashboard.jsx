import React from "react";
import { LuFileText } from "react-icons/lu";
import Card from "../components/common/Card";
import { Blogs } from "../utils/BlogUtils";

export default function Dashboard() {
  const blogs = Blogs();
  const totalBlogs = blogs.length;
  const published = blogs.filter((blog) => blog.publish);
  const draft = blogs.filter((blog) => !blog.publish);

  return (
    <div className="min-h-screen w-full px-6 py-8 bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-900">Overview</h1>
      <p className="text-slate-500 text-base mt-1">
        Welcome back, here's what's happening with your blog today.
      </p>
      <div className="mt-6 flex justify-between flex-wrap gap-4">
        <Card label={"Total Blogs"} value={totalBlogs} type={1} />
        <Card label={"Published"} value={published.length} type={2} />
        <Card label={"Drafts"} value={draft.length} type={3} />
      </div>
    </div>
  );
}
