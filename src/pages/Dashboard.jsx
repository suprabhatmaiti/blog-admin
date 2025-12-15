import React, { act } from "react";
import { LuFileText } from "react-icons/lu";
import Card from "../components/common/Card";
import { getActivities } from "../utils/ActivityUtils";

export default function Dashboard() {
  const blogs = localStorage.getItem("blogs")
    ? JSON.parse(localStorage.getItem("blogs"))
    : [];
  const totalBlogs = blogs.length;
  const published = blogs.filter((blog) => blog.publish);
  const draft = blogs.filter((blog) => !blog.publish);

  const activities = getActivities();
  console.log(activities);

  const renderActivity = activities.map((activity) => {
    return (
      <div key={activity.id}>
        <h1>
          {activity.message}
          <span>by {activity.author}</span>
        </h1>
        <p>{activity.title}</p>
      </div>
    );
  });

  return (
    <div className="min-h-screen w-full px-6 py-8 bg-slate-50">
      <div>
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
      <div>
        <h1>Recent Activity</h1>
        <div className="mt-6 flex justify-between flex-wrap gap-4">
          {renderActivity}
        </div>
      </div>
    </div>
  );
}
