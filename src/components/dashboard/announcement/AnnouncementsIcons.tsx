import Image from "next/image";
import colonyIcon from "../../../assets/NavBar/colony-icon.png";

export function ColonyLogoBadge({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <Image
      src={colonyIcon}
      alt="The AI Colony"
      width={36}
      height={36}
      className={`object-contain ${className}`}
      priority
    />
  );
}

export function OpenBookIcon({
  className = "w-7 h-7 text-white",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 4.5C2 3.67 2.67 3 3.5 3H10C11.1 3 12 3.9 12 5V20.5C11.2 20.2 10.3 20 9.5 20H3.5C2.67 20 2 19.33 2 18.5V4.5Z" />
      <path d="M22 4.5C22 3.67 21.33 3 20.5 3H14C12.9 3 12 3.9 12 5V20.5C12.8 20.2 13.7 20 14.5 20H20.5C21.33 20 22 19.33 22 18.5V4.5Z" />
    </svg>
  );
}

export function CalendarBadgeIcon({
  className = "w-7 h-7 text-white",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="17" rx="3" />
      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2.4" />
      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2.4" />
      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" />
    </svg>
  );
}

export function MetaCalendarIcon({
  className = "w-3.5 h-3.5 text-[#94A3B8]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function MetaClockIcon({
  className = "w-3.5 h-3.5 text-[#94A3B8]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function ChevronDownIcon({
  className = "w-3.5 h-3.5",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
