"use client";

import React from "react";
import { StudentDetail } from "./studentDetailData";

interface StudentRecentActivityTableProps {
  activities: StudentDetail["recentActivities"];
}

export default function StudentRecentActivityTable({
  activities,
}: StudentRecentActivityTableProps) {
  return (
    /*
     * Outer container: #F9F9F9 card matching the Applications table style
     */
    <div
      className="rounded-xl p-5 border-0 shadow-none overflow-hidden"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <h2 className="mb-4 text-base font-bold" style={{ color: "#154535" }}>
        Recent Activity
      </h2>

      <div className="overflow-x-auto">
        <table
          className="w-full min-w-[550px] text-sm font-semibold"
          style={{ borderCollapse: "separate", borderSpacing: 0 }}
        >
          <thead>
            {/* ── White header row — floating on #F9F9F9 with rounded ends ── */}
            <tr className="bg-white">
              <th
                className="rounded-l-lg px-4 py-[13px] text-left font-bold"
                style={{ color: "#154535" }}
              >
                Requirement
              </th>
              <th
                className="pr-4 py-[13px] text-left font-bold"
                style={{ color: "#154535" }}
              >
                Date and Time
              </th>
              <th
                className="rounded-r-lg pr-4 py-[13px] text-left font-bold"
                style={{ color: "#154535" }}
              >
                Details
              </th>
            </tr>

            {/* ── 10px gap — #F9F9F9 space between white header and first table row ── */}
            <tr aria-hidden="true" style={{ height: "10px", backgroundColor: "#F9F9F9" }}>
              <td colSpan={3} />
            </tr>
          </thead>

          <tbody>
            {activities.map((item) => (
              <tr
                key={item.id}
                className="transition-colors hover:opacity-90"
                style={{ backgroundColor: "#F9F9F9" }}
              >
                <td className="px-4 py-3.5 font-bold" style={{ color: "#154535" }}>
                  {item.requirement}
                </td>
                <td className="py-3.5 pr-4 font-semibold" style={{ color: "#A0A5B0" }}>
                  {item.dateTime}
                </td>
                <td className="py-3.5 pr-4 font-semibold" style={{ color: "#A0A5B0" }}>
                  {item.details}
                </td>
              </tr>
            ))}

            {activities.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="py-8 text-center text-sm font-semibold"
                  style={{ color: "#A0A5B0" }}
                >
                  No recent activities recorded.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
