import React from "react";
import type { AssignmentStatus } from "./assignmentsData";

export function SearchIcon({
  className = "h-4 w-4",
  color = "#A0A5B0",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 19 19" fill="none" aria-hidden="true">
      <path
        d="M13.1602 13.1582L16.2562 16.2542"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7084 8.51436C14.7084 5.09456 11.9361 2.32227 8.51631 2.32227C5.09651 2.32227 2.32422 5.09456 2.32422 8.51436C2.32422 11.9342 5.09651 14.7064 8.51631 14.7064C11.9361 14.7064 14.7084 11.9342 14.7084 8.51436Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({
  className = "h-3.5 w-3.5",
  color = "#A0A5B0",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 4.25L6 7.75L9.5 4.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PaperclipIcon({
  className = "h-3.5 w-3.5",
  color = "#626262",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13.66 7.43L7.86 13.23C6.46 14.63 4.19 14.63 2.79 13.23C1.39 11.83 1.39 9.56 2.79 8.16L8.92 2.03C9.85 1.1 11.37 1.1 12.3 2.03C13.23 2.96 13.23 4.48 12.3 5.41L6.16 11.55C5.69 12.02 4.94 12.02 4.47 11.55C4.01 11.08 4.01 10.33 4.47 9.86L9.95 4.38"
        stroke={color}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloseCircleIcon({
  className = "h-6 w-6",
  color = "#141B34",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth="1.6" />
      <path
        d="M9.2 9.2L14.8 14.8M14.8 9.2L9.2 14.8"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DescriptionDocIcon({
  className = "h-3.5 w-3.5",
  color = "#A0A5B0",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M7.5 2.5H4.5C3.39543 2.5 2.5 3.39543 2.5 4.5V11.5C2.5 12.6046 3.39543 13.5 4.5 13.5H11.5C12.6046 13.5 13.5 12.6046 13.5 11.5V8.5"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7 2.8C12.1 2.4 12.7 2.4 13.1 2.8C13.5 3.2 13.5 3.8 13.1 4.2L8.3 9L6.5 9.5L7 7.7L11.7 2.8Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckCircleOutlineIcon({
  className = "h-4 w-4",
  color = "#31CA92",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.25" stroke={color} strokeWidth="1.3" />
      <path
        d="M5.4 8.1L7.1 9.8L10.7 6.2"
        stroke={color}
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DownloadIcon({
  className = "h-3.5 w-3.5",
  color = "#FF9E00",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 2.5V10.25M8 10.25L5.25 7.5M8 10.25L10.75 7.5"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 11.25V12.25C2.5 12.9404 3.05964 13.5 3.75 13.5H12.25C12.9404 13.5 13.5 12.9404 13.5 12.25V11.25"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PdfFileBadgeIcon({
  className = "h-8 w-8",
  color = "#9E90F2",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8 3.5H19L25.5 10V26.5C25.5 27.6046 24.6046 28.5 23.5 28.5H8C6.89543 28.5 6 27.6046 6 26.5V5.5C6 4.39543 6.89543 3.5 8 3.5Z"
        fill="white"
        stroke={color}
        strokeWidth="1.4"
      />
      <path
        d="M19 3.5V10H25.5"
        stroke={color}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <text
        x="15.75"
        y="21.5"
        textAnchor="middle"
        fill={color}
        fontSize="7"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
      >
        PDF
      </text>
    </svg>
  );
}

export function UploadTrayIcon({
  className = "h-6 w-6",
  color = "#31CA92",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 15.5V4.5M12 4.5L8.25 8.25M12 4.5L15.75 8.25"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 15.5V17.5C4 18.6046 4.89543 19.5 6 19.5H18C19.1046 19.5 20 18.6046 20 17.5V15.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ExternalLinkIcon({
  className = "h-4 w-4",
  color = "#154535",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6.66699 3.33337H3.33366C2.96547 3.33337 2.66699 3.63185 2.66699 4.00004V12.6667C2.66699 13.0349 2.96547 13.3334 3.33366 13.3334H12.0003C12.3685 13.3334 12.667 13.0349 12.667 12.6667V9.33337"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33301 2.66663H13.333V6.66663"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66699 9.33337L13.3337 2.66663"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Confirmation checkbox that tracks the submission state,
 * using the rounded-square checkbox shape from the assignments list
 * with the state colors from ConfirmActionModal.
 */
export function SubmissionStateCheckbox({ status }: { status: AssignmentStatus }) {
  if (status === "Pending") {
    return (
      <span
        title="Pending submission"
        aria-label="Pending submission"
        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border-[1.5px] border-[#31CA92] bg-white"
      />
    );
  }

  if (status === "Submitted") {
    return (
      <span
        title="Submitted — awaiting instructor review"
        aria-label="Submitted — awaiting instructor review"
        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border-[1.5px] border-[#31CA92]"
        style={{ backgroundColor: "#E1F8EC" }}
      >
        <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            d="M3.5 8.2L6.5 11.2L12.5 4.8"
            stroke="#31CA92"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  if (status === "Graded") {
    return (
      <span
        title="Graded by instructor"
        aria-label="Graded by instructor"
        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border-[1.5px] border-[#9E90F2]"
        style={{ backgroundColor: "rgba(158, 144, 242, 0.16)" }}
      >
        <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
          <path
            d="M3.5 8.2L6.5 11.2L12.5 4.8"
            stroke="#9E90F2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }

  // Rejected — orange-red confirmation checkbox matching confirm-reject
  return (
    <span
      title="Submission rejected — revision required"
      aria-label="Submission rejected — revision required"
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[5px] border-[1.5px] border-[#FE4F08]"
      style={{ backgroundColor: "#FFEAE5" }}
    >
      <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
        <path
          d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5"
          stroke="#FE4F08"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
