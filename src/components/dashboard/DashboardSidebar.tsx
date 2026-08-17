"use client";

import { usePathname } from "next/navigation";
import {
  AnnouncementIcon,
  AssignmentsIcon,
  CertificateIcon,
  CoursesIcon,
  HomeIcon,
  LeaderboardIcon,
  LiveIcon,
  SettingsIcon,
} from "./DashboardIcons";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: HomeIcon },
  { href: "/dashboard/courses", label: "Courses", icon: CoursesIcon },
  { href: "/dashboard/assignments", label: "Assignments", icon: AssignmentsIcon },
  { href: "/dashboard/live", label: "Live sessions", icon: LiveIcon },
  { href: "/dashboard/leaderboard", label: "Leaderboard", icon: LeaderboardIcon },
  { href: "/dashboard/certificate", label: "Certificate", icon: CertificateIcon },
  { href: "/dashboard/announcement", label: "Announcement", icon: AnnouncementIcon },
  { href: "/dashboard/settings", label: "Settings", icon: SettingsIcon },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-[calc(100vh-64px)] w-[232px] shrink-0 bg-[#F1F5F9] px-3 py-6 md:block">
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <div
              key={item.href}
              className={`relative flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium select-none ${
                isActive
                  ? "bg-[#DCFCE7] text-[#166534]"
                  : "text-[#475569]"
              }`}
            >
              {isActive && (
                <span className="absolute top-1.5 bottom-1.5 left-0 w-[3px] rounded-r-full bg-[#00B98A]" />
              )}
              <Icon />
              {item.label}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
