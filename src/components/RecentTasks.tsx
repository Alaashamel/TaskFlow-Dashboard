const tasks = [
  "Design dashboard UI",
  "Implement authentication",
  "Create project structure",
  "Fix responsive layout",
];

export default function RecentTasks() {
  return (
    <div className="mt-8 bg-white p-5 rounded-lg border">
      <h2 className="text-xl font-bold mb-4">
        Recent Tasks
      </h2>

      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="p-3 border rounded-md"
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}