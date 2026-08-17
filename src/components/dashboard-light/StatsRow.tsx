"use client";

import StatCard from "../dashboard/StatCard";

export default function StatsRow() {
  return (
    <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {/* Total Applications */}
      <StatCard
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        }
        iconBg="bg-[#00B98A]"
        label="Total Applications"
        value="120"
        detail={
            <>
              <span className="text-[#00B98A] font-extrabold">+12%</span>{" "}
              <span className="text-grey">From last week</span>
            </>
          }
      />

      {/* Enrolled Students */}
      <StatCard
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          </svg>
        }
        iconBg="bg-[#8B5CF6]"
        label="Enrolled students"
        value="32"
        detail={
          <>
            <span className="text-[#00B98A] font-extrabold">+12%</span>{" "}
            <span className="text-grey">From last week</span>
          </>
        }
        />

      {/* Active Cohorts */}
      <StatCard
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        }
        iconBg="bg-[#F97316]"
        label="Active Cohorts"
        value="2"
        detail={
          <>
            <span className="text-[#00B98A] font-extrabold">+12%</span>{" "}
            <span className="text-grey">From last week</span>
          </>
        }
        />

      {/* Live Sessions */}
      <StatCard
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 7l-7 5 7 5V7z" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
        }
        iconBg="bg-[#3B82F6]"
        label="Live Sessions"
        value="3"
        detail="This week"
        detailClassName="text-[#94A3B8]"
      />
    </section>
  );
}
