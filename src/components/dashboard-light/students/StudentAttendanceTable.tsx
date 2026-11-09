"use client";

import React from "react";
import { EditPencilDetailIcon } from "./StudentDetailIcons";
import { StudentDetail } from "./studentDetailData";

interface StudentAttendanceTableProps {
  sessions: StudentDetail["attendanceSessions"];
  onEditSession?: (session: StudentDetail["attendanceSessions"][0]) => void;
}

export function AttendanceStatusBadge({ status }: { status: "Present" | "Absent" }) {
  const styles: Record<"Present" | "Absent", { color: string; backgroundColor: string }> = {
    Present: { color: "#31CA92", backgroundColor: "#8FF9D145" },
    Absent: { color: "#FE4F08", backgroundColor: "#FE4F0845" },
  };
  const style = styles[status] || styles.Present;

  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
      style={{ color: style.color, backgroundColor: style.backgroundColor }}
    >
      {status}
    </span>
  );
}

export default function StudentAttendanceTable({
  sessions,
  onEditSession,
}: StudentAttendanceTableProps) {
  return (
    /*
     * Outer container: #F9F9F9 card matching the Applications table style
     */
    <div
      className="rounded-xl p-5 border-0 shadow-none overflow-hidden"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <h2 className="mb-4 text-base font-bold" style={{ color: "#154535" }}>
        Attendance Marking
      </h2>

      <div className="overflow-x-auto">
        <table
          className="w-full min-w-[500px] text-sm font-semibold"
          style={{ borderCollapse: "separate", borderSpacing: 0 }}
        >
          <thead>
            {/* ── White header row — floating on #F9F9F9 with rounded ends ── */}
            <tr className="bg-white">
              <th
                className="rounded-l-lg px-4 py-[13px] text-left font-bold"
                style={{ color: "#154535" }}
              >
                Session
              </th>
              <th
                className="pr-4 py-[13px] text-left font-bold"
                style={{ color: "#154535" }}
              >
                Starts Date
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
                Source
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
              <td colSpan={5} />
            </tr>
          </thead>

          <tbody>
            {sessions.map((item) => (
              <tr
                key={item.id}
                className="transition-colors hover:opacity-90"
                style={{ backgroundColor: "#F9F9F9" }}
              >
                {/* Session */}
                <td className="px-4 py-3.5 font-bold" style={{ color: "#154535" }}>
                  {item.session}
                </td>

                {/* Starts Date */}
                <td className="py-3.5 pr-4 font-semibold" style={{ color: "#A0A5B0" }}>
                  {item.startsDate}
                </td>

                {/* Status */}
                <td className="py-3.5 pr-4">
                  <AttendanceStatusBadge status={item.status} />
                </td>

                {/* Source */}
                <td className="py-3.5 pr-4 font-semibold" style={{ color: "#A0A5B0" }}>
                  {item.source}
                </td>

                {/* Actions */}
                <td className="py-3.5 pr-4 text-center">
                  <button
                    type="button"
                    onClick={() => onEditSession?.(item)}
                    aria-label={`Edit ${item.session} attendance`}
                    className="p-1 transition-opacity hover:opacity-70 cursor-pointer inline-flex items-center justify-center border-0 bg-transparent"
                    style={{ color: "#626262" }}
                  >
                    <EditPencilDetailIcon className="h-4 w-4" color="#626262" />
                  </button>
                </td>
              </tr>
            ))}

            {sessions.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="py-8 text-center text-sm font-semibold"
                  style={{ color: "#A0A5B0" }}
                >
                  No attendance records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
