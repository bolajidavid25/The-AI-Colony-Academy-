"use client";

import type { AssignmentItem, AssignmentStatus } from "./assignmentsData";
import { PaperclipIcon, SubmissionStateCheckbox } from "./AssignmentsIcons";

export const STATUS_TEXT_COLOR: Record<AssignmentStatus, string> = {
  Pending: "#FF9E00",
  Submitted: "#31CA92",
  Graded: "#9E90F2",
  Rejected: "#FE4F08",
};

export const STATUS_BADGE_STYLE: Record<
  AssignmentStatus,
  { color: string; backgroundColor: string }
> = {
  Pending: { color: "#FF9E00", backgroundColor: "#FFF3E0" },
  Submitted: { color: "#31CA92", backgroundColor: "#E1F8EC" },
  Graded: { color: "#9E90F2", backgroundColor: "rgba(158, 144, 242, 0.14)" },
  Rejected: { color: "#FE4F08", backgroundColor: "#FFEAE5" },
};

function getCtaConfig(assignment: AssignmentItem): { label: string; bg: string } {
  switch (assignment.status) {
    case "Pending":
      return { label: "Upload Assignment", bg: "#FE4F08" };
    case "Submitted":
      return { label: "View Submission", bg: "#31CA92" };
    case "Graded":
      return assignment.feedback
        ? { label: "View Feedback", bg: "#FF9E00" }
        : { label: "View Submission", bg: "#31CA92" };
    case "Rejected":
      return { label: "Resubmit", bg: "#FE4F08" };
  }
}

interface AssignmentRowCardProps {
  assignment: AssignmentItem;
  onSelect: (assignment: AssignmentItem) => void;
}

export default function AssignmentRowCard({
  assignment,
  onSelect,
}: AssignmentRowCardProps) {
  const cta = getCtaConfig(assignment);
  const statusColor = STATUS_TEXT_COLOR[assignment.status];

  return (
    <article
      onClick={() => onSelect(assignment)}
      className="flex cursor-pointer flex-col gap-4 rounded-2xl bg-[#F9F9F9] px-5 py-4 transition-colors hover:bg-[#F3F6F5] lg:flex-row lg:items-center lg:gap-6 lg:px-6 lg:py-5"
    >
      {/* Left: Submission State Confirmation Checkbox + Title & Module */}
      <div className="flex min-w-0 flex-[1.55] items-center gap-4">
        <div className="flex w-6 shrink-0 items-center justify-center">
          <SubmissionStateCheckbox status={assignment.status} />
        </div>

        <div className="min-w-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(assignment);
            }}
            className="cursor-pointer border-0 bg-transparent p-0 text-left text-[15px] font-bold leading-snug text-[#154535] hover:underline"
          >
            {assignment.title}
          </button>
          <p className="mt-1 text-xs font-medium text-[#A0A5B0]">
            {assignment.courseModule}
          </p>
        </div>
      </div>

      {/* Middle + Right Metadata & CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 pl-10 lg:flex-[2] lg:flex-nowrap lg:pl-0">
        {/* Due Info */}
        <div className="min-w-[140px] lg:w-[165px]">
          <p className="text-[10px] font-medium text-[#A0A5B0]">Due In</p>
          <p className="text-sm font-bold leading-tight text-[#154535]">
            {assignment.dueIn}
          </p>
          <p className="mt-0.5 text-[10px] font-medium text-[#A0A5B0]">
            {assignment.dueDate}
          </p>
        </div>

        {/* Attachments Count */}
        <div className="flex min-w-[115px] items-center gap-1.5 text-xs font-medium text-[#626262]">
          <PaperclipIcon className="h-3.5 w-3.5 shrink-0" color="#626262" />
          <span>{assignment.attachments.length} attachments</span>
        </div>

        {/* Status Text */}
        <div className="min-w-[80px] text-left lg:text-center">
          <span className="text-xs font-semibold" style={{ color: statusColor }}>
            {assignment.status}
          </span>
        </div>

        {/* Action CTA Pill Button */}
        <div className="flex shrink-0 justify-end lg:w-[160px]">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(assignment);
            }}
            className="min-w-[142px] cursor-pointer rounded-full border-0 px-5 py-2.5 text-center text-xs font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: cta.bg }}
          >
            {cta.label}
          </button>
        </div>
      </div>
    </article>
  );
}
