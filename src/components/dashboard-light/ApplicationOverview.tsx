"use client";

import Link from "next/link";

type StatusItem = {
  label: string;
  count: number;
  percentage: number;
  color: string;
  dotColor: string;
};

const data: StatusItem[] = [
  { label: "Accepted", count: 520, percentage: 41.6, color: "#00B98A", dotColor: "bg-[#00B98A]" },
  { label: "Waitlisted", count: 230, percentage: 18.4, color: "#F59E0B", dotColor: "bg-[#F59E0B]" },
  { label: "Rejected", count: 180, percentage: 14.4, color: "#EF4444", dotColor: "bg-[#EF4444]" },
  { label: "Pending", count: 320, percentage: 25.6, color: "#8B5CF6", dotColor: "bg-[#8B5CF6]" },
];

export default function ApplicationOverview() {
  const total = 1250;

  // SVG parameters
  const radius = 50;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius; // ~314.16

  // Calculate accumulated offsets
  let accumulatedPercentage = 0;

  return (
    <article className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 h-full">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#0F172A]">Application Overview</h3>
        <Link
          href="/dashboard-light/applications"
          className="text-xs font-semibold text-[#FF5D2A] hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
        {/* Donut Chart SVG */}
        <div className="relative flex h-[160px] w-[160px] items-center justify-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 120 120"
            className="transform -rotate-90"
          >
            {/* Background Circle */}
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="transparent"
              stroke="#F1F5F9"
              strokeWidth={strokeWidth}
            />

            {/* Slices */}
            {data.map((item, index) => {
              const dashArray = `${(item.percentage / 100) * circumference} ${circumference}`;
              const dashOffset = -((accumulatedPercentage / 100) * circumference);
              accumulatedPercentage += item.percentage;

              return (
                <circle
                  key={index}
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={dashArray}
                  strokeDashoffset={dashOffset}
                  className="transition-all duration-500 ease-in-out hover:stroke-[16px] cursor-pointer"
                  style={{ transformOrigin: "center" }}
                />
              );
            })}
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xl font-extrabold text-[#0F172A] leading-tight">
              1,250
            </span>
            <span className="text-[11px] font-medium text-[#94A3B8] uppercase tracking-wider">
              Total
            </span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-1 flex-col gap-3.5 w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-[#F8FAFC] pb-1.5 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-2.5">
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${item.dotColor}`} />
                <span className="text-sm font-semibold text-[#475569]">{item.label}</span>
              </div>
              <span className="text-sm font-bold text-[#0F172A]">
                {item.count} <span className="font-normal text-[#94A3B8] ml-1">({item.percentage}%)</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
