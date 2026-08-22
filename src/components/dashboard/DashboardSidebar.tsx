"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  // Close the drawer automatically whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll while the drawer is open on mobile
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger button — only visible below md breakpoint */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="fixed top-4 left-4 z-40 flex h-10 w-10 items-center justify-center rounded-lg  shadow-md md:hidden"
      >
        <span className="flex flex-col items-center justify-center gap-[5px]">
          <span className="h-[3px] w-5 rounded-full bg-[#31CA92]" />
          <span className="h-[3px] w-5 rounded-full bg-[#31CA92]" />
          <span className="h-[3px] w-5 rounded-full bg-[#31CA92]" />
        </span>
      </button>

      {/* Backdrop overlay for mobile, shown only when drawer is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Sidebar / drawer */}
      <aside
        className={`fixed top-[-10px] left-0 z-50 h-screen w-[232px] shrink-0 overflow-hidden bg-[#F1F5F9] px-3 py-6 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0`}
      >
        {/* Close button — mobile only */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="mb-4 ml-1 flex h-8 w-8 items-center justify-center rounded-md text-[#31CA92] text-xl font-bold md:hidden"
        >
          ✕
        </button>

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
                  isActive ? "bg-[#DCFCE7] text-[#166534]" : "text-[#475569]"
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
    </>
  );
}
