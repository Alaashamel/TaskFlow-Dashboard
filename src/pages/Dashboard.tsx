import StatsCard from "../components/StatsCard";

export default function Dashboard() {
  return (
    <div>

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome back to TaskFlow
      </p>


      <div className="grid grid-cols-4 gap-5 mt-8">

        <StatsCard
          title="Projects"
          value="12"
        />

        <StatsCard
          title="Completed Tasks"
          value="48"
        />

        <StatsCard
          title="Pending Tasks"
          value="15"
        />

        <StatsCard
          title="Team Members"
          value="8"
        />

      </div>

    </div>
  );
}