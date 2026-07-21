const activities = [
  "Ahmed completed Dashboard UI task",
  "Sara created a new project",
  "You updated authentication settings",
  "Team member joined TaskFlow",
];

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-xl shadow p-5 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Activity Feed
      </h2>

      <ul className="space-y-3">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="border-b pb-3 text-gray-700"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}