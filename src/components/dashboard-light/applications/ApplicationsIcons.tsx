export function SearchIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M11.333 11.333L13.9997 13.9997"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6663 7.33333C12.6663 4.38781 10.2785 2 7.33301 2C4.38749 2 1.99967 4.38781 1.99967 7.33333C1.99967 10.2789 4.38749 12.6667 7.33301 12.6667C10.2785 12.6667 12.6663 10.2789 12.6663 7.33333Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ExportIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M8 2V10M8 2L5.33333 4.66667M8 2L10.6667 4.66667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66699 10.6667V12.0001C2.66699 12.7365 3.26395 13.3334 4.00033 13.3334H12.0003C12.7367 13.3334 13.3337 12.7365 13.3337 12.0001V10.6667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
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

export function ExternalLinkIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className={className}>
      <path
        d="M6.66699 3.33337H3.33366C2.96547 3.33337 2.66699 3.63185 2.66699 4.00004V12.6667C2.66699 13.0349 2.96547 13.3334 3.33366 13.3334H12.0003C12.3685 13.3334 12.667 13.0349 12.667 12.6667V9.33337"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33301 2.66663H13.333V6.66663"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66699 9.33337L13.3337 2.66663"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

{/* Accept Icon matching media_1790015824524.png: Circle with checkmark */}
export function AcceptIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M17.5 9.58333V10A7.5 7.5 0 1 1 13.0583 3.14167"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 3.75L10 11.2583L7.5 8.75833"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

{/* Waitlist Icon matching media_1790015846670.png: User outline with menu lines */}
export function WaitlistIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className={className}>
      <circle
        cx="7.5"
        cy="6.66667"
        r="3.33333"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 16.6667C2.5 13.9052 4.73858 11.6667 7.5 11.6667C10.2614 11.6667 12.5 13.9052 12.5 16.6667"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.167 6.66667H17.5M14.167 10H17.5M15.833 13.3333H17.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

{/* Reject Icon matching media_1790015889094.png: Archive / ballot box with 'X' */}
export function RejectIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className={className}>
      <rect
        x="3"
        y="3"
        width="14"
        height="3"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.5 6V15C4.5 15.8284 5.17157 16.5 6 16.5H14C14.8284 16.5 15.5 15.8284 15.5 15V6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.5L12 13.5M12 9.5L8 13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

{/* Close Circle Icon matching media_1790015998624.png: Circle with 'X' */}
export function CloseCircleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M7.5 7.5L12.5 12.5M12.5 7.5L7.5 12.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
