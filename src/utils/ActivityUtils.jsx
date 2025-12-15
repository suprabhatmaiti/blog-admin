export const addActivity = ({ action, status, title, author = "Admin" }) => {
  const logs = JSON.parse(localStorage.getItem("activityLog")) || [];

  let message = "";
  if (action === "CREATED") {
    message =
      status === "published" ? "New blog published" : "New blog saved as draft";
  }
  if (action === "DELETED") {
    message = "Blog deleted";
  }
  if (action === "UPDATED") {
    message = "Blog updated";
  }

  const newLog = {
    id: crypto.randomUUID(),
    title,
    message,
    author,
    timestamp: Date.now(),
  };

  localStorage.setItem(
    "activityLog",
    JSON.stringify([newLog, ...logs].slice(0, 10))
  );
};

export const getActivities = () => {
  return JSON.parse(localStorage.getItem("activityLog")) || [];
};
