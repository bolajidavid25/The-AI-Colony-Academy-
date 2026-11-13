"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CalendarBadgeIcon,
  ChevronDownIcon,
  ColonyLogoBadge,
  MetaCalendarIcon,
  MetaClockIcon,
  OpenBookIcon,
} from "./AnnouncementsIcons";
import type { AnnouncementItem } from "./announcementsData";

interface AnnouncementCardProps {
  announcement: AnnouncementItem;
}

export default function AnnouncementCard({
  announcement,
}: AnnouncementCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Category label text color based on screenshot
  // Card 2: orange "Course Update"
  // Card 3: mint "Live Sessions"
  // Card 1: muted slate "Course Update"
  const isCourseUpdateOrange =
    announcement.category === "Course Update" &&
    announcement.iconType === "book";
  const isLiveSessions = announcement.category === "Live Sessions";

  let categoryTextColor = "text-[#64748B]";
  if (isCourseUpdateOrange) {
    categoryTextColor = "text-[#FF5D2A]";
  } else if (isLiveSessions) {
    categoryTextColor = "text-[#31CA92]";
  }

  return (
    <article className="group relative flex flex-col gap-4 rounded-[20px] bg-[#F9F9F9] p-5 transition-all duration-200 hover:bg-[#F3F6F4] sm:flex-row sm:items-start sm:gap-5 sm:px-6 sm:py-5">
      {/* ── Left Icon Badge Box ── */}
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] transition-transform duration-200 group-hover:scale-105 sm:h-[62px] sm:w-[62px] ${announcement.iconBg}`}
      >
        {announcement.iconType === "logo" && (
          <ColonyLogoBadge className="h-8 w-8 sm:h-9 sm:w-9" />
        )}
        {announcement.iconType === "book" && (
          <OpenBookIcon className="h-7 w-7 text-white" />
        )}
        {announcement.iconType === "calendar" && (
          <CalendarBadgeIcon className="h-7 w-7 text-white" />
        )}
      </div>

      {/* ── Right Content Section ── */}
      <div className="min-w-0 flex-1 pt-0.5">
        {/* Category & Time Meta */}
        <div className="flex items-center gap-1.5 text-xs font-medium">
          <span className={`font-medium ${categoryTextColor}`}>
            {announcement.category}
          </span>
          <span className="text-[#94A3B8]">-</span>
          <span className="text-[#94A3B8]">{announcement.timeAgo}</span>
        </div>

        {/* Title */}
        <h2 className="mt-1 text-[18px] font-bold leading-snug text-[#154535] sm:text-[19px]">
          {announcement.title}
        </h2>

        {/* Description */}
        <p className="mt-1 text-xs leading-relaxed text-[#64748B] sm:text-[13px]">
          {announcement.description}
        </p>

        {/* Expandable Extended Text */}
        {announcement.extendedText && (
          <div className="mt-2">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-xs font-medium text-[#64748B] transition-colors hover:text-[#154535]"
            >
              <span>{isExpanded ? "Read less" : "Read more"}</span>
              <ChevronDownIcon
                className={`h-3 w-3 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {isExpanded && (
              <div className="mt-3 rounded-xl border border-[#8FF9D1]/50 bg-white p-4 text-xs leading-relaxed text-[#475569] shadow-xs animate-in fade-in duration-200 sm:text-[13px]">
                <p className="whitespace-pre-line">{announcement.extendedText}</p>

                {announcement.linkHref && (
                  <div className="mt-3 flex items-center justify-end">
                    <Link
                      href={announcement.linkHref}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#154535] px-4 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                    >
                      <span>{announcement.linkText || "View details"}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Bottom Event Metadata (for Live Sessions / Event announcements) */}
        {(announcement.eventDate || announcement.eventTime) && (
          <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] font-medium text-[#94A3B8] sm:text-xs">
            {announcement.eventDate && (
              <span className="inline-flex items-center gap-1.5">
                <MetaCalendarIcon />
                <span>{announcement.eventDate}</span>
              </span>
            )}
            {announcement.eventTime && (
              <span className="inline-flex items-center gap-1.5">
                <MetaClockIcon />
                <span>{announcement.eventTime}</span>
              </span>
            )}

            {announcement.linkHref && (
              <Link
                href={announcement.linkHref}
                className="ml-auto inline-flex items-center gap-1 font-semibold text-[#31CA92] transition-colors hover:underline"
              >
                <span>{announcement.linkText || "Join"}</span>
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
