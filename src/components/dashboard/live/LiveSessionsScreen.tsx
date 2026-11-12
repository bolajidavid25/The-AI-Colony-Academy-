"use client";

import { useState } from "react";
import { LIVE_SESSIONS, type LiveSessionItem } from "./liveSessionsData";

function downloadCalendarInvite(session: LiveSessionItem) {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//The AI Colony Academy//Live Sessions//EN",
    "BEGIN:VEVENT",
    `UID:${session.id}@aicolonyacademy.com`,
    `DTSTART:${session.isoStart}`,
    `DTEND:${session.isoEnd}`,
    `SUMMARY:${session.title}`,
    `DESCRIPTION:${session.title} (${session.host})`,
    `LOCATION:${session.zoomUrl}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${session.title.toLowerCase().replace(/\s+/g, "-")}-${session.month.toLowerCase()}-${session.day}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function LiveSessionsScreen() {
  const [addedIds, setAddedIds] = useState<string[]>([]);

  function handleAction(session: LiveSessionItem) {
    if (session.actionType === "zoom") {
      window.open(session.zoomUrl, "_blank", "noopener,noreferrer");
      return;
    }

    downloadCalendarInvite(session);
    setAddedIds((prev) =>
      prev.includes(session.id) ? prev : [...prev, session.id]
    );
  }

  return (
    <div className="animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="mb-6 border-b border-[#8FF9D1] pb-5">
        <h1 className="text-[28px] font-bold tracking-[-0.5px] text-[#154535]">
          Live Sessions
        </h1>
      </div>

      {/* Sessions List */}
      <div className="max-w-[920px] space-y-4">
        {LIVE_SESSIONS.map((session) => {
          const isZoom = session.actionType === "zoom";
          const isAdded = addedIds.includes(session.id);

          return (
            <article
              key={session.id}
              className="flex flex-col gap-4 rounded-2xl bg-[#F9F9F9] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5"
            >
              {/* Left: Date Badge + Title & Host */}
              <div className="flex items-center gap-5 min-w-0 sm:flex-[1.3]">
                <div className="flex h-[54px] w-10 shrink-0 flex-col items-center justify-center rounded-[10px] border-[2.5px] border-[#31CA92] bg-white">
                  <span className="text-[11px] font-bold leading-none text-[#31CA92]">
                    {session.month}
                  </span>
                  <span className="mt-1 text-[20px] font-black leading-none text-[#31CA92]">
                    {session.day}
                  </span>
                </div>

                <div className="min-w-0">
                  <h2 className="text-[16px] font-bold leading-snug text-[#154535]">
                    {session.title}
                  </h2>
                  <p className="mt-0.5 text-xs font-medium text-[#626262]">
                    {session.host}
                  </p>
                </div>
              </div>

              {/* Middle: Date & Time Metadata */}
              <div className="flex flex-col gap-1.5 pl-[60px] text-xs font-medium text-[#A0A5B0] sm:flex-1 sm:pl-0">
                <span className="inline-flex items-center gap-2">
                  <SessionCalendarIcon />
                  <span>{session.dateLabel}</span>
                </span>
                <span className="inline-flex items-center gap-2">
                  <SessionClockIcon />
                  <span>{session.timeLabel}</span>
                </span>
              </div>

              {/* Right: Action CTA Button */}
              <div className="flex shrink-0 pl-[60px] sm:justify-end sm:pl-0">
                {isZoom ? (
                  <button
                    type="button"
                    onClick={() => handleAction(session)}
                    className="min-w-[144px] cursor-pointer rounded-full border-0 bg-[#31CA92] px-6 py-2.5 text-center text-xs font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    {session.actionLabel}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleAction(session)}
                    title={isAdded ? "Calendar invite downloaded" : "Download .ics invite"}
                    className={`min-w-[144px] cursor-pointer rounded-full border px-6 py-2.5 text-center text-xs font-semibold transition-colors ${
                      isAdded
                        ? "border-[#31CA92] bg-[#E1F8EC] text-[#154535]"
                        : "border-[#31CA92] bg-white text-[#31CA92] hover:bg-[#F0FDF9]"
                    }`}
                  >
                    {session.actionLabel}
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function SessionCalendarIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function SessionClockIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M7 4V7L9 8.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
