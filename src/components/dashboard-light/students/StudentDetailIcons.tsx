import React from "react";

export function ChevronLeftIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M10 12L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({
  color = "currentColor",
  size = 12,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path
        d="M2.5 4L6 7.5L9.5 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExternalLinkIcon({
  className = "h-4 w-4",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M6.66699 3.33337H3.33366C2.96547 3.33337 2.66699 3.63185 2.66699 4.00004V12.6667C2.66699 13.0349 2.96547 13.3334 3.33366 13.3334H12.0003C12.3685 13.3334 12.667 13.0349 12.667 12.6667V9.33337"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2H14V6"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66699 9.33333L13.867 2.13333"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({
  className = "h-3.5 w-3.5",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function PhoneIcon({
  className = "h-3.5 w-3.5",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function UserIcon({
  className = "h-3.5 w-3.5",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function EyeIcon({
  className = "h-4 w-4",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function AwardCertificateIcon({
  className = "h-4 w-4",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
    >
      <path
        d="M7.66667 14.6667C4.99537 14.6667 3.65973 14.6667 2.82987 13.6903C2 12.7141 2 11.1427 2 8.00001C2 4.85732 2 3.28596 2.82987 2.30966C3.65973 1.33334 4.99537 1.33334 7.66667 1.33334C10.3379 1.33334 11.6736 1.33334 12.5035 2.30966C13.1715 3.09556 13.3018 4.26704 13.3272 6.33334"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.3335 5.33334H10.0002M5.3335 8.66668H7.3335"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.073 12.0703C13.6349 11.6612 14.0002 10.9983 14.0002 10.25C14.0002 9.00733 12.9928 8 11.7502 8H11.5835C10.3408 8 9.3335 9.00733 9.3335 10.25C9.3335 10.9983 9.69876 11.6612 10.2607 12.0703M13.073 12.0703C12.7017 12.3405 12.2446 12.5 11.7502 12.5H11.5835C11.0891 12.5 10.632 12.3405 10.2607 12.0703M13.073 12.0703L13.4615 13.2936C13.6097 13.7602 13.6838 13.9935 13.6636 14.1388C13.6214 14.4411 13.3748 14.6656 13.0836 14.6667C12.9438 14.6672 12.7342 14.5572 12.315 14.3373C12.1353 14.2429 12.0454 14.1957 11.9535 14.168C11.7662 14.1115 11.5675 14.1115 11.3802 14.168C11.2882 14.1957 11.1984 14.2429 11.0186 14.3373C10.5995 14.5572 10.3899 14.6672 10.25 14.6667C9.9589 14.6656 9.7123 14.4411 9.6701 14.1388C9.64983 13.9935 9.72396 13.7602 9.87216 13.2936L10.2607 12.0703"
        stroke={color}
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function EditPencilDetailIcon({
  className = "h-3.5 w-3.5",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M11.333 2.00004C11.5081 1.82494 11.716 1.68605 11.9448 1.59129C12.1736 1.49653 12.4188 1.44775 12.6663 1.44775C12.9139 1.44775 13.1591 1.49653 13.3879 1.59129C13.6167 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17514 14.3137 2.38304 14.4084 2.61184C14.5032 2.84064 14.552 3.08584 14.552 3.33337C14.552 3.58091 14.5032 3.82611 14.4084 4.05491C14.3137 4.28371 14.1748 4.49161 13.9997 4.66671L5.33301 13.3334L1.99967 14.3334L2.99967 11L11.333 2.00004Z"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
