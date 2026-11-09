"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import defaultAvatar from "@/assets/hero-images/Hero2.jpg";
import deleteIcon from "@/assets/icons/student-delete-icon.png";
import editIcon from "@/assets/icons/student-edit-icon.png";
import { StudentRecord, StudentStatus } from "./studentsData";

export function StudentStatusBadge({ status }: { status: StudentStatus }) {
  const styles: Record<StudentStatus, { color: string; backgroundColor: string }> = {
    Active: { color: "#31CA92", backgroundColor: "#8FF9D145" },
    Inactive: { color: "#FE4F08", backgroundColor: "#FE4F0845" },
  };
  const style = styles[status] || styles.Active;

  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
      style={{ color: style.color, backgroundColor: style.backgroundColor }}
    >
      {status}
    </span>
  );
}

interface StudentsTableProps {
  students: StudentRecord[];
  onDeleteClick: (student: StudentRecord) => void;
  onEditClick: (student: StudentRecord) => void;
}

export default function StudentsTable({
  students,
  onDeleteClick,
  onEditClick,
}: StudentsTableProps) {
  return (
    /*
     * Outer container: #F9F9F9 with 16px top padding and 2px left/right padding, matching ApplicationsTable
     */
    <div
      className="overflow-x-auto rounded-t-xl"
      style={{ backgroundColor: "#F9F9F9", padding: "16px 2px 0 2px" }}
    >
      <table
        className="w-full min-w-[800px] text-sm font-semibold"
        style={{ borderCollapse: "separate", borderSpacing: 0 }}
      >
        <thead>
          {/* ── White header row — floating on #F9F9F9 with rounded ends ── */}
          <tr className="bg-white">
            <th
              className="rounded-l-lg px-4 py-[13px] text-left font-bold"
              style={{ color: "#154535" }}
            >
              Student
            </th>
            <th
              className="pr-4 py-[13px] text-left font-bold"
              style={{ color: "#154535" }}
            >
              Email
            </th>
            <th
              className="pr-4 py-[13px] text-left font-bold"
              style={{ color: "#154535" }}
            >
              Cohort
            </th>
            <th
              className="pr-4 py-[13px] text-left font-bold"
              style={{ color: "#154535" }}
            >
              Attendance
            </th>
            <th
              className="pr-4 py-[13px] text-left font-bold"
              style={{ color: "#154535" }}
            >
              Submission
            </th>
            <th
              className="pr-4 py-[13px] text-left font-bold"
              style={{ color: "#154535" }}
            >
              Activity Point
            </th>
            <th
              className="pr-4 py-[13px] text-left font-bold"
              style={{ color: "#154535" }}
            >
              Status
            </th>
            <th
              className="rounded-r-lg pr-4 py-[13px] text-left font-bold"
              style={{ color: "#154535" }}
            >
              Actions
            </th>
          </tr>

          {/* ── 10px gap — #F9F9F9 space between white header and first table row ── */}
          <tr aria-hidden="true" style={{ height: "10px", backgroundColor: "#F9F9F9" }}>
            <td colSpan={8} />
          </tr>
        </thead>

        <tbody>
          {students.map((student, idx) => (
            <tr
              key={`${student.id}-${idx}`}
              className="transition-colors hover:opacity-90"
              style={{ backgroundColor: "#F9F9F9" }}
            >
              {/* Student (Avatar + Name) */}
              <td className="px-4 py-3.5">
                <Link
                  href={`/dashboard-light/students/${student.id}`}
                  className="flex items-center gap-2.5 group cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={defaultAvatar}
                      alt={student.name}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-bold group-hover:underline" style={{ color: "#154535" }}>
                    {student.name}
                  </span>
                </Link>
              </td>

              {/* Email */}
              <td className="py-3.5 pr-4 font-bold" style={{ color: "#154535" }}>
                {student.email}
              </td>

              {/* Cohort */}
              <td className="py-3.5 pr-4 font-semibold" style={{ color: "#A0A5B0" }}>
                {student.cohort}
              </td>

              {/* Attendance */}
              <td className="py-3.5 pr-4 font-semibold" style={{ color: "#A0A5B0" }}>
                {student.attendance}
              </td>

              {/* Submission */}
              <td className="py-3.5 pr-4 font-semibold" style={{ color: "#A0A5B0" }}>
                {student.submission}
              </td>

              {/* Activity Point */}
              <td className="py-3.5 pr-4 font-semibold" style={{ color: "#A0A5B0" }}>
                {student.activityPoint}
              </td>

              {/* Status */}
              <td className="py-3.5 pr-4">
                <StudentStatusBadge status={student.status} />
              </td>

              {/* Actions */}
              <td className="py-3.5 pr-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onDeleteClick(student)}
                    aria-label={`Delete ${student.name}`}
                    className="transition-opacity hover:opacity-70 cursor-pointer flex items-center justify-center"
                  >
                    <Image
                      src={deleteIcon}
                      alt="Delete"
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => onEditClick(student)}
                    aria-label={`Edit ${student.name}`}
                    className="transition-opacity hover:opacity-70 cursor-pointer flex items-center justify-center"
                  >
                    <Image
                      src={editIcon}
                      alt="Edit"
                      width={16}
                      height={16}
                      className="h-4 w-4 object-contain"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {students.length === 0 && (
            <tr>
              <td
                colSpan={8}
                className="py-16 text-center text-sm font-semibold"
                style={{ color: "#A0A5B0" }}
              >
                No enrolled students found matching your search and filter criteria.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
