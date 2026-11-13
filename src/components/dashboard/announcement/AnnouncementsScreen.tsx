"use client";

import { useState } from "react";
import AnnouncementCard from "./AnnouncementCard";
import {
  INITIAL_ANNOUNCEMENTS,
  type AnnouncementItem,
} from "./announcementsData";

export default function AnnouncementsScreen() {
  const [announcements] = useState<AnnouncementItem[]>(INITIAL_ANNOUNCEMENTS);

  return (
    <div className="animate-in fade-in duration-300">
      {/* ── Page Header ── */}
      <div className="mb-6 border-b border-[#8FF9D1] pb-5">
        <h1 className="text-[28px] font-bold tracking-[-0.5px] text-[#154535]">
          Announcement
        </h1>
        <p className="mt-1 text-xs font-medium text-[#A0A5B0] sm:text-sm">
          Complete your profile to get the best learning experience
        </p>
      </div>

      {/* ── Announcement Cards List ── */}
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            announcement={announcement}
          />
        ))}

        {announcements.length === 0 && (
          <div className="rounded-2xl bg-[#F9F9F9] p-8 text-center text-sm text-[#64748B]">
            No announcements available at this time.
          </div>
        )}
      </div>
    </div>
  );
}
