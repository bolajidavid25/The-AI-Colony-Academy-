"use client";

import Link from "next/link";

type Assignment = {
  name: string;
  description: string;
  score: string;
  percentage: number;
};

const assignments: Assignment[] = [
  {
    name: "Deep learning Fundamentals",
    description: "Introduction to neural networks and backpropagation.",
    score: "80/100",
    percentage: 80,
  },
  {
    name: "Deep learning Fundamentals",
    description: "Introduction to neural networks and backpropagation.",
    score: "80/100",
    percentage: 80,
  },
  {
    name: "Deep learning Fundamentals",
    description: "Introduction to neural networks and backpropagation.",
    score: "80/100",
    percentage: 80,
  },
  {
    name: "Deep learning Fundamentals",
    description: "Introduction to neural networks and backpropagation.",
    score: "80/100",
    percentage: 80,
  },
];

export default function AssignmentsList() {
  return (
    <article className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 h-full">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#0F172A]">Assignment</h3>
        <Link
          href="/dashboard-light/assignments"
          className="text-xs font-semibold text-[#FF5D2A] hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="flex flex-1 flex-col">
        {/* Table Header */}
        <div className="flex justify-between border-b border-[#F1F5F9] pb-3 text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
          <span className="text-[#154535]">Name</span>
          <span className="pr-4 text-[#154535]">Submission</span>
        </div>

        {/* List of Rows */}
        <div className="flex flex-1 flex-col justify-between gap-3.5 mt-3.5">
          {assignments.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-[#F8FAFC] pb-3 last:border-0 last:pb-0"
            >
              {/* Assignment Details */}
              <div className="text-left pr-4">
                <h4 className="text-sm font-bold leading-tight text-[#154535] cursor-pointer transition-colors">
                  {item.name}
                </h4>
                <p className="mt-1 text-xs text-[#154535]">
                  {item.description}
                </p>
              </div>

              {/* Submission Score */}
              <span className="text-sm font-bold text-[#94A3B8] shrink-0 whitespace-nowrap">
                {item.score} <span className="font-semibold text-[#94A3B8]">({item.percentage}%)</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
