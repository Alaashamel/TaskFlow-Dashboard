const UpcomingTasks = () => {
  const tasks = [
    {
      title: "Complete UI Design",
      date: "Today",
      priority: "High",
    },
    {
      title: "Fix authentication bug",
      date: "Tomorrow",
      priority: "Medium",
    },
    {
      title: "Prepare project report",
      date: "Friday",
      priority: "Low",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="text-xl font-semibold mb-4">
        Upcoming Tasks
      </h2>

      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
              <h3 className="font-medium">
                {task.title}
              </h3>
              <p className="text-sm text-gray-500">
                {task.date}
              </p>
            </div>

            <span className="text-sm">
              {task.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingTasks;