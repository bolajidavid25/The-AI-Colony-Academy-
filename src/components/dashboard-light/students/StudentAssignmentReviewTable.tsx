"use client";

import React from "react";
import { EyeIcon } from "./StudentDetailIcons";
import { StudentDetail } from "./studentDetailData";

interface StudentAssignmentReviewTableProps {
  assignments: StudentDetail["assignmentReviews"];
  onViewAssignment?: (assignment: StudentDetail["assignmentReviews"][0]) => void;
}

export function AssignmentStatusBadge({
  status,
}: {
  status: StudentDetail["assignmentReviews"][0]["status"];
}) {
  const styles: Record<
    StudentDetail["assignmentReviews"][0]["status"],
    { color: string; backgroundColor: string }
  > = {
    Approved: { color: "#31CA92", backgroundColor: "#8FF9D145" },
    Reviewed: { color: "#9E90F2", backgroundColor: "#9E90F21A" },
    "Not Submitted": { color: "#FE4F08", backgroundColor: "#FE4F0845" },
    Submitted: { color: "#FF9E00", backgroundColor: "#FF9E001A" },
  };
  const style = styles[status] || { color: "#154535", backgroundColor: "#F1F5F9" };

  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
      style={{ color: style.color, backgroundColor: style.backgroundColor }}
    >
      {status}
    </span>
  );
}

export default function StudentAssignmentReviewTable({
  assignments,
  onViewAssignment,
}: StudentAssignmentReviewTableProps) {
  return (
    /*
     * Outer container: #F9F9F9 card matching the Applications table style
     */
    <div
      className="rounded-xl p-5 border-0 shadow-none overflow-hidden"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <h2 className="mb-4 text-base font-bold" style={{ color: "#154535" }}>
        Assignment Review
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
                Assignment
              </th>
              <th
                className="pr-4 py-[13px] text-left font-bold"
                style={{ color: "#154535" }}
              >
                Due Date
              </th>
              <th
                className="pr-4 py-[13px] text-left font-bold"
                style={{ color: "#154535" }}
              >
                Status
              </th>
              <th
                className="pr-4 py-[13px] text-left font-bold"
                style={{ color: "#154535" }}
              >
                Reviewed by
              </th>
              <th
                className="pr-4 py-[13px] text-left font-bold"
                style={{ color: "#154535" }}
              >
                Score
              </th>
              <th
                className="rounded-r-lg pr-4 py-[13px] text-center font-bold"
                style={{ color: "#154535" }}
              >
                Actions
              </th>
            </tr>

            {/* ── 10px gap — #F9F9F9 space between white header and first table row ── */}
            <tr aria-hidden="true" style={{ height: "10px", backgroundColor: "#F9F9F9" }}>
              <td colSpan={6} />
            </tr>
          </thead>

          <tbody>
            {assignments.map((item) => (
              <tr
                key={item.id}
                className="transition-colors hover:opacity-90"
                style={{ backgroundColor: "#F9F9F9" }}
              >
                {/* Assignment */}
                <td className="px-4 py-3.5 font-bold" style={{ color: "#154535" }}>
                  {item.assignment}
                </td>

                {/* Due Date */}
                <td className="py-3.5 pr-4 font-semibold" style={{ color: "#A0A5B0" }}>
                  {item.dueDate}
                </td>

                {/* Status Badge */}
                <td className="py-3.5 pr-4">
                  <AssignmentStatusBadge status={item.status} />
                </td>

                {/* Reviewed by */}
                <td className="py-3.5 pr-4 font-semibold" style={{ color: "#154535" }}>
                  {item.reviewedBy}
                </td>

                {/* Score */}
                <td className="py-3.5 pr-4 font-semibold" style={{ color: "#A0A5B0" }}>
                  {item.score}
                </td>

                {/* Actions */}
                <td className="py-3.5 pr-4 text-center">
                  <button
                    type="button"
                    onClick={() => onViewAssignment?.(item)}
                    aria-label={`View ${item.assignment}`}
                    className="p-1 transition-opacity hover:opacity-70 cursor-pointer inline-flex items-center justify-center border-0 bg-transparent"
                    style={{ color: "#626262" }}
                  >
                    <EyeIcon className="h-4 w-4" color="#626262" />
                  </button>
                </td>
              </tr>
            ))}

            {assignments.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="py-8 text-center text-sm font-semibold"
                  style={{ color: "#A0A5B0" }}
                >
                  No assignment review records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
