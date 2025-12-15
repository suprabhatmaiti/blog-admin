import React from "react";
import { VscLayoutActivitybarRight } from "react-icons/vsc";

export default function ActivityList({ activity }) {
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
    <div className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="text-slate-900 font-medium">{activity.message}</p>
          <p className="text-slate-600 text-sm mt-1">
            <span className="font-medium">Blog title: "{activity.title}"</span>
          </p>
          <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>{formattedTime}</span>
          </div>
        </div>
        <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0">
          <VscLayoutActivitybarRight className="text-indigo-600" size={20} />
        </div>
      </div>
    </div>
  );
}
