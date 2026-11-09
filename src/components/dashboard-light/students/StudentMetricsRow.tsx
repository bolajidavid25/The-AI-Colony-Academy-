"use client";

import React from "react";
import { StudentDetail } from "./studentDetailData";

interface StudentMetricsRowProps {
  metrics: StudentDetail["metrics"];
}

export default function StudentMetricsRow({ metrics }: StudentMetricsRowProps) {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* ── 1. Attendance ── */}
      <div
        className="rounded-xl p-5 border-0 shadow-none flex flex-col justify-between min-h-[96px]"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <span className="text-xs font-medium" style={{ color: "#A0A5B0" }}>
          Attendance
        </span>
        <div className="mt-2 text-3xl font-bold tracking-tight" style={{ color: "#154535" }}>
          {metrics.attendance}
        </div>
      </div>

      {/* ── 2. Certificate Eligibility ── */}
      <div
        className="rounded-xl p-5 border-0 shadow-none flex flex-col justify-between min-h-[96px]"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <span className="text-xs font-medium" style={{ color: "#A0A5B0" }}>
          Certificate Eligibility
        </span>
        <div className="mt-2 flex flex-col items-start gap-1">
          <span
            className="inline-flex items-center rounded-full px-3.5 py-1 text-sm font-bold"
            style={{ color: "#154535", backgroundColor: "#8FF9D1" }}
          >
            {metrics.certificateEligibility}
          </span>
          <span className="text-[11px] font-medium" style={{ color: "#154535" }}>
            {metrics.certificateSubtext}
          </span>
        </div>
      </div>

      {/* ── 3. Assignment Submissions ── */}
      <div
        className="rounded-xl p-5 border-0 shadow-none flex flex-col justify-between min-h-[96px]"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <span className="text-xs font-medium" style={{ color: "#A0A5B0" }}>
          Assignment Submissions
        </span>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-3xl font-bold tracking-tight" style={{ color: "#154535" }}>
            {metrics.assignmentSubmissions}
          </span>
          <span className="text-lg font-bold" style={{ color: "#A0A5B0" }}>
            /{metrics.assignmentSubmissionsTotal}
          </span>
        </div>
      </div>

      {/* ── 4. Leaderboard Ranking ── */}
      <div
        className="rounded-xl p-5 border-0 shadow-none flex flex-col justify-between min-h-[96px]"
        style={{ backgroundColor: "#F9F9F9" }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium" style={{ color: "#A0A5B0" }}>
            Leaderboard Ranking
          </span>
          <span className="text-xs font-medium" style={{ color: "#A0A5B0" }}>
            {metrics.topPercent ?? "Top 9%"}
          </span>
        </div>
        <div className="mt-2 flex items-baseline justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold tracking-tight" style={{ color: "#31CA92" }}>
              {metrics.leaderboardRank}
            </span>
            <span className="text-lg font-bold" style={{ color: "#A0A5B0" }}>
              /{metrics.leaderboardRankTotal}
            </span>
          </div>
          <div className="text-right">
            <span className="block text-[10px] font-semibold" style={{ color: "#A0A5B0" }}>
              Total Points
            </span>
            <span className="text-xs font-bold" style={{ color: "#154535" }}>
              {metrics.totalPoints}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
