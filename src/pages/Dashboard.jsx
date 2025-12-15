import { LuFileText } from "react-icons/lu";
import Card from "../components/common/Card";
import { getActivities } from "../utils/ActivityUtils";

export default function Dashboard() {
  const blogs = localStorage.getItem("blogs")
    ? JSON.parse(localStorage.getItem("blogs"))
    : [];
  const filteredBlogs = blogs.filter((blog) => !blog.isDeleted);
  const totalBlogs = filteredBlogs.length;
  const published = filteredBlogs.filter((blog) => blog.publish);
  const draft = filteredBlogs.filter((blog) => !blog.publish);

  const activities = getActivities();
  console.log(activities);

  const renderActivity = activities.map((activity) => {
    const date = new Date(activity.timestamp);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <div
        key={activity.id}
        className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="text-slate-900 font-medium">{activity.message}</p>
            <p className="text-slate-600 text-sm mt-1">
              <span className="font-medium">
                Blog title: "{activity.title}"
              </span>
            </p>
            <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{formattedTime}</span>
            </div>
          </div>
          <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
            <LuFileText className="text-indigo-600" size={20} />
          </div>
        </div>
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
      <div className="mt-8 ">
        <h1 className="text-2xl font-bold text-slate-900">Recent Activity</h1>
        <p className="text-slate-500 text-sm mt-1 mb-4">
          Latest updates and changes to your blog posts
        </p>
        {activities.length > 0 ? (
          <div className="space-y-3 h-80 overflow-y-auto">{renderActivity}</div>
        ) : (
          <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <LuFileText className="text-slate-400" size={24} />
            </div>
            <p className="text-slate-500">No recent activity</p>
            <p className="text-slate-400 text-sm mt-1">
              Your blog activities will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
