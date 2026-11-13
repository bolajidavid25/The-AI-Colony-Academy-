"use client";

import { useState } from "react";
import EditProfileTab from "./EditProfileTab";
import NotificationsTab from "./NotificationsTab";
import SecurityTab from "./SecurityTab";

export type SettingsTabId = "edit-profile" | "security" | "notifications";

interface TabConfig {
  id: SettingsTabId;
  label: string;
}

const TABS: TabConfig[] = [
  { id: "edit-profile", label: "Edit Profile" },
  { id: "security", label: "Security" },
  { id: "notifications", label: "Notifications" },
];

export default function SettingsScreen() {
  const [activeTab, setActiveTab] = useState<SettingsTabId>("edit-profile");

  return (
    <div className="animate-in fade-in duration-300">
      {/* ── Page Header ── */}
      <div>
        <h1 className="text-[28px] font-bold tracking-[-0.5px] text-[#154535]">
          Settings
        </h1>
        <p className="mt-1 text-xs font-medium text-[#A0A5B0] sm:text-sm">
          View and download all certificate you&apos;ve earned from completed courses
        </p>
      </div>

      {/* ── Segmented Tab Strip ── */}
      <div className="mt-5 w-full overflow-x-auto border-y border-[#E2E8F0] bg-[#F4F7F5]">
        <div className="flex min-w-max items-center">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative cursor-pointer px-7 py-3 text-xs sm:text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? "bg-[#8FF9D1] text-[#154535] shadow-xs"
                    : "text-[#64748B] hover:bg-black/5 hover:text-[#154535]"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#154535]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Active Tab Content ── */}
      <div className="mt-6">
        {activeTab === "edit-profile" && <EditProfileTab />}
        {activeTab === "security" && <SecurityTab />}
        {activeTab === "notifications" && <NotificationsTab />}
      </div>
    </div>
  );
}
