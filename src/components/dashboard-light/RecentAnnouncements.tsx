"use client";

import Link from "next/link";

type Announcement = {
  category: string;
  timeAgo: string;
  title: string;
  description: string;
};

const announcements: Announcement[] = [
  {
    category: "Course Update",
    timeAgo: "2 hours ago",
    title: "Welcome to AI Colony Academy! 🥳",
    description: "We're excited to have you on this journey. Explore your courses, join live sessions, and connect with our community.",
  },
  {
    category: "Course Update",
    timeAgo: "2 days ago",
    title: "New module Added: AI Agent Memory",
    description: "A new module has been added to the AI engineering course.",
  },
  {
    category: "Live Sessions",
    timeAgo: "1 day ago",
    title: "Upcoming Live Session: Building AI Agents",
    description: "Join us this Saturday for an exclusive live session with David Smith, Don't miss out!",
  },
];

export default function RecentAnnouncements() {
  return (
    <article className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 h-full">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#0F172A]">Recent Announcement</h3>
        <Link
          href="/dashboard-light/announcements"
          className="text-xs font-semibold text-[#FF5D2A] hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="flex flex-1 flex-col gap-3.5">
        {announcements.map((item, index) => (
          <div
            key={index}
            className="group rounded-xl border border-[#F1F5F9] bg-[#F8FAFC] p-3.5 hover:border-[#DCFCE7] hover:bg-[#F0FDF4]/30 transition-all duration-300"
          >
            {/* Meta: Category & Time */}
            <div className="flex items-center gap-2 text-[10px] font-medium text-[#94A3B8]">
              <span className="font-semibold uppercase tracking-wider text-[#64748B]">
                {item.category}
              </span>
              <span>•</span>
              <span>{item.timeAgo}</span>
            </div>

            {/* Title */}
            <h4 className="mt-1.5 text-sm font-bold text-[#0F172A] text-[#154535] transition-colors leading-tight">
              {item.title}
            </h4>

            {/* Description */}
            <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
