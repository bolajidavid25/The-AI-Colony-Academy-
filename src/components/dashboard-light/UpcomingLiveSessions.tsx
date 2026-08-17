"use client";

import Link from "next/link";

type LiveSession = {
  title: string;
  datetime: string;
  iconBg: string;
  status: string;
};

const sessions: LiveSession[] = [
  {
    title: "Building AI Agents",
    datetime: "July 14, 2026 - 6:00PM GMT",
    iconBg: "bg-[#00B98A]",
    status: "Upcoming",
  },
  {
    title: "Prompt Engineering Workshop",
    datetime: "July 20, 2026 - 7:00PM GMT",
    iconBg: "bg-[#8B5CF6]",
    status: "Upcoming",
  },
  {
    title: "Data Structures",
    datetime: "July 14, 2026 - 6:00PM GMT",
    iconBg: "bg-[#F97316]",
    status: "Upcoming",
  },
  {
    title: "Data Structures",
    datetime: "July 14, 2026 - 6:00PM GMT",
    iconBg: "bg-[#EF4444]",
    status: "Upcoming",
  },
];

export default function UpcomingLiveSessions() {
  return (
    <article className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 h-full">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#0F172A]">Upcoming Live Session</h3>
        <Link
          href="/dashboard-light/live-sessions"
          className="text-xs font-semibold text-[#FF5D2A] hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-[#F8FAFC] pb-3 last:border-0 last:pb-0"
          >
            <div className="flex items-center gap-3.5">
              {/* Calendar Icon Circle */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white ${session.iconBg}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>

              {/* Title & DateTime */}
              <div className="text-left">
                <h4 className="text-sm font-bold text-[#0F172A] leading-tight hover:text-[#00B98A] cursor-pointer transition-colors">
                  {session.title}
                </h4>
                <p className="mt-1 text-xs font-medium text-[#94A3B8]">
                  {session.datetime}
                </p>
              </div>
            </div>

            {/* Status Badge */}
            <span className="rounded-full bg-[#DCFCE7] px-2.5 py-1 text-[11px] font-bold text-[#166534] shrink-0">
              {session.status}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
