import React from "react";

export function ChevronDownIcon({
  className = "h-3 w-3",
  color = "#A0A5B0",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" aria-hidden="true">
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

export function StarXpIcon({
  className = "h-5 w-5",
  color = "#FF9E00",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full ${className}`}
      style={{ backgroundColor: "#FF9E0026" }}
    >
      <svg className="h-[58%] w-[58%]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M8 1.9L9.85 5.65L14 6.25L11 9.18L11.71 13.3L8 11.35L4.29 13.3L5 9.18L2 6.25L6.15 5.65L8 1.9Z"
          fill="#FF9E0030"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function FlameStreakIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8.7 1.8C9.1 3.7 7.9 4.9 7.1 5.8C6.4 6.6 6.1 7.3 6.3 8.1C5.4 7.6 5 6.8 5 5.9C3.4 7.1 2.7 9 3.1 10.9C3.5 12.8 5.2 14.2 7.5 14.2C10.4 14.2 12.6 12.1 12.6 9.1C12.6 6.2 10.8 3.6 8.7 1.8Z"
        fill="#FE4F08"
      />
      <path
        d="M8.1 8.4C8.4 9.5 7.7 10.3 7.2 10.9C6.8 11.4 6.9 12.4 7.8 12.7C8.8 13 9.9 12.2 10 11.1C10.1 10 9.1 9 8.1 8.4Z"
        fill="#FF9E00"
      />
    </svg>
  );
}

export function CodeBadgeIcon({
  className = "h-3 w-3",
  color = "#9E90F2",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M5.5 4.5L2 8L5.5 11.5M10.5 4.5L14 8L10.5 11.5M9 3.5L7 12.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CodeBadgeCircleIcon({
  className = "h-3.5 w-3.5",
  bgColor = "#9E90F2",
}: {
  className?: string;
  bgColor?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7.5" fill={bgColor} />
      <path
        d="M5.6 5.8L3.4 8L5.6 10.2M10.4 5.8L12.6 8L10.4 10.2M8.7 5L7.3 11"
        stroke="#FFFFFF"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SpeedBadgeCircleIcon({
  className = "h-3.5 w-3.5",
  bgColor = "#FE4F08",
}: {
  className?: string;
  bgColor?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7.5" fill={bgColor} />
      <path
        d="M8.85 3.6L5.1 8.45H7.95L7.15 12.4L10.9 7.55H8.05L8.85 3.6Z"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MedalBadgeIcon({
  className = "h-4 w-4",
  color = "#154535",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="6.5" r="4" stroke={color} strokeWidth="1.4" />
      <path
        d="M5.8 10L5 14L8 12.5L11 14L10.2 10"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
