const progress = [
  {
    title: "Completed",
    value: "70%",
  },
  {
    title: "In Progress",
    value: "20%",
  },
  {
    title: "Pending",
    value: "10%",
  },
];

export default function TaskProgress() {
  return (
    <div className="bg-white rounded-xl shadow p-5 mt-8">
      <h2 className="text-xl font-semibold mb-4">
        Task Progress
      </h2>

      <div className="space-y-4">
        {progress.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{item.title}</span>
              <span>{item.value}</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{
                  width: item.value,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}