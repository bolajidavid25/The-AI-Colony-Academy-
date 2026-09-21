interface StatCardProps {
  label: string;
  value: string;
  change: string;
  suffix: string;
}

export function ApplicationsStatCard({ label, value, change, suffix }: StatCardProps) {
  return (
    <div
      className="rounded-2xl px-6 py-5 transition-all"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <p className="mb-1 text-xs" style={{ color: "#A0A5B0" }}>
        {label}
      </p>
      <p className="text-4xl font-bold" style={{ color: "#154535" }}>
        {value}
      </p>
      <p className="mt-1 text-xs">
        <span className="text-sm font-bold" style={{ color: "#19D28F" }}>
          {change}
        </span>
        <span style={{ color: "#A0A5B0" }}>{suffix}</span>
      </p>
    </div>
  );
}

export default function ApplicationsStatsRow() {
  const stats = [
    { label: "Total Applications", value: "120", change: "+12%", suffix: " from last week" },
    { label: "Accepted", value: "32", change: "+12%", suffix: " from last week" },
    { label: "Waitlisted", value: "2", change: "+12%", suffix: " from last week" },
  ];

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <ApplicationsStatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
