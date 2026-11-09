import React from "react";

export function SearchIcon({
  className = "w-4 h-4",
  color = "#A0A5B0",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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
  className = "w-3.5 h-3.5",
  color = "#A0A5B0",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ExportIcon({
  className = "w-4 h-4",
  color = "#154535",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 10.5v2.5a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2.5" />
      <polyline points="5 5 8 2 11 5" />
      <line x1="8" y1="2" x2="8" y2="10.5" />
    </svg>
  );
}

export function TrashIcon({
  className = "w-4 h-4",
  color = "#A0A5B0",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 4.2L12.08 12.18C12.01 13.56 11.97 14.25 11.58 14.75C11.39 15 11.14 15.2 10.86 15.35C10.29 15.67 9.53 15.67 8 15.67C6.47 15.67 5.71 15.67 5.14 15.35C4.86 15.2 4.61 15 4.42 14.75C4.03 14.25 3.99 13.56 3.92 12.18L3.5 4.2"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M2 4.2H14M6.2 4.2V2.6C6.2 2 6.65 1.5 7.25 1.5H8.75C9.35 1.5 9.8 2 9.8 2.6V4.2"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 7.5V12M9.5 7.5V12"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function EditPencilIcon({
  className = "w-4 h-4",
  color = "#A0A5B0",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.333 2.00004C11.5081 1.82494 11.716 1.68605 11.9448 1.59129C12.1736 1.49653 12.4188 1.44775 12.6663 1.44775C12.9139 1.44775 13.1591 1.49653 13.3879 1.59129C13.6167 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17514 14.3137 2.38304 14.4084 2.61184C14.5032 2.84064 14.552 3.08584 14.552 3.33337C14.552 3.58091 14.5032 3.82611 14.4084 4.05491C14.3137 4.28371 14.1748 4.49161 13.9997 4.66671L5.33301 13.3334L1.99967 14.3334L2.99967 11L11.333 2.00004Z"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
