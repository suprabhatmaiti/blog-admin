export const addActivity = (activity) => {
  const logs = JSON.parse(localStorage.getItem("activityLog")) || [];

  const newLog = {
    id: crypto.randomUUID(),
    ...activity,
    timestamp: Date.now(),
  };

  // keep only last 10 activities
  const updatedLogs = [newLog, ...logs].slice(0, 10);

  localStorage.setItem("activityLog", JSON.stringify(updatedLogs));
};

export const getActivities = () => {
  return JSON.parse(localStorage.getItem("activityLog")) || [];
};
