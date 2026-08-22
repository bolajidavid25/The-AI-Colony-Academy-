"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useMobileMenu } from "./MobileMenuContext";

type NavItem = {
  href: string;
  label: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};

const navItems: NavItem[] = [
  {
    href: "/dashboard-light",
    label: "Dashboard",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M7 4.5C7 3.11929 5.88071 2 4.5 2C3.11929 2 2 3.11929 2 4.5C2 5.88071 3.11929 7 4.5 7C5.88071 7 7 5.88071 7 4.5Z" stroke="white" strokeWidth="1.5"/>
          <path d="M14 11.5C14 10.1193 12.8807 9 11.5 9C10.1193 9 9 10.1193 9 11.5C9 12.8807 10.1193 14 11.5 14C12.8807 14 14 12.8807 14 11.5Z" stroke="white" strokeWidth="1.5"/>
          <path d="M7 11.5C7 10.1193 5.88071 9 4.5 9C3.11929 9 2 10.1193 2 11.5C2 12.8807 3.11929 14 4.5 14C5.88071 14 7 12.8807 7 11.5Z" stroke="white" strokeWidth="1.5"/>
          <path d="M13.7921 2.62263L13.3771 2.20755C13.1003 1.93082 12.6517 1.93082 12.3749 2.20754L10.1424 4.44005C9.84567 4.73681 9.64341 5.11478 9.56107 5.52631L9.33301 6.66667L10.4733 6.43859C10.8849 6.35629 11.2629 6.15401 11.5596 5.85725L13.7921 3.62474C14.0689 3.34801 14.0689 2.89935 13.7921 2.62263Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: "/dashboard-light/applications",
    label: "Applications",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4.60791 4.55859L6.56926 5.71821C7.7127 6.39427 8.16977 6.39427 9.31324 5.71821L11.2746 4.55859" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.94141 11.5586C9.94141 11.5586 10.2747 11.5586 10.6081 12.2253C10.6081 12.2253 11.6669 10.5586 12.6081 10.2253" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.6668 6.87453L14.6394 4.29219C14.632 3.30856 14.101 1.34131 12.0361 1.34131H4.07034C3.15806 1.27422 1.3335 1.56478 1.3335 4.76153V9.50093C1.3335 10.3147 1.51502 11.41 2.40736 12.0703C2.98401 12.4971 3.74094 12.5366 4.45627 12.572L5.95426 12.6461" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.6541 11.3059C14.6541 13.1618 13.1566 14.6663 11.3092 14.6663C9.46189 14.6663 7.96436 13.1618 7.96436 11.3059C7.96436 9.44986 9.46189 7.94533 11.3092 7.94533C13.1566 7.94533 14.6541 9.44986 14.6541 11.3059Z" stroke="white" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: "/dashboard-light/cohorts",
    label: "Cohorts",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 6V10H6V6H10Z" stroke="white" strokeLinejoin="round"/>
          <path d="M10 10H12C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12V10Z" stroke="white" strokeLinejoin="round"/>
          <path d="M6 10.0013H4C2.89543 10.0013 2 10.8967 2 12.0013C2 13.1059 2.89543 14.0013 4 14.0013C5.10457 14.0013 6 13.1059 6 12.0013V10.0013Z" stroke="white" strokeLinejoin="round"/>
          <path d="M10 6V4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6H10Z" stroke="white" strokeLinejoin="round"/>
          <path d="M6 6V4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6H6Z" stroke="white" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: "/dashboard-light/students",
    label: "Students",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12.6668 3.33334L8.00016 1.33334L3.3335 3.33334L5.66683 4.33334V5.66668C5.66683 5.66668 6.44461 5.33334 8.00016 5.33334C9.5557 5.33334 10.3335 5.66668 10.3335 5.66668V4.33334L12.6668 3.33334ZM12.6668 3.33334V6.00001" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.3332 5.66666V6.33332C10.3332 7.62199 9.2885 8.66666 7.99984 8.66666C6.71117 8.66666 5.6665 7.62199 5.6665 6.33332V5.66666" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.18854 11.1355C4.45495 11.5919 2.53154 12.5236 3.70302 13.6895C4.27529 14.259 4.91264 14.6663 5.71395 14.6663H10.2864C11.0877 14.6663 11.725 14.259 12.2973 13.6895C13.4688 12.5236 11.5454 11.5919 10.8118 11.1355C9.09156 10.0655 6.90876 10.0655 5.18854 11.1355Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: "/dashboard-light/live-sessions",
    label: "Live Sessions",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10.3586 12.3947C9.62096 13 8.52516 13 6.3335 13C4.14184 13 3.04602 13 2.30845 12.3947C2.17342 12.2839 2.04962 12.1601 1.9388 12.0251C1.3335 11.2875 1.3335 10.1917 1.3335 8C1.3335 5.80835 1.3335 4.71252 1.9388 3.97495C2.04962 3.83993 2.17342 3.71612 2.30845 3.60531C3.04602 3 4.14184 3 6.3335 3C8.52516 3 9.62096 3 10.3586 3.60531C10.4936 3.71612 10.6174 3.83993 10.7282 3.97495C11.3335 4.71252 11.3335 5.80835 11.3335 8C11.3335 10.1917 11.3335 11.2875 10.7282 12.0251C10.6174 12.1601 10.4936 12.2839 10.3586 12.3947Z" stroke="white" strokeLinejoin="round"/>
          <path d="M11.3335 8.66666V7.33332L13.0668 5.02221C13.2347 4.79838 13.4982 4.66666 13.778 4.66666C14.2688 4.66666 14.6668 5.06462 14.6668 5.55554V10.4445C14.6668 10.9353 14.2688 11.3333 13.778 11.3333C13.4982 11.3333 13.2347 11.2016 13.0668 10.9778L11.3335 8.66666Z" stroke="white" strokeLinejoin="round"/>
          <path d="M6.3335 9C6.88576 9 7.3335 8.55227 7.3335 8C7.3335 7.44773 6.88576 7 6.3335 7M6.3335 9C5.78121 9 5.3335 8.55227 5.3335 8C5.3335 7.44773 5.78121 7 6.3335 7M6.3335 9V7" stroke="white" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: "/dashboard-light/assignments",
    label: "Assignments",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
        <path d="M0.5 6.5C0.5 4.00018 0.5 2.75027 1.13661 1.87405C1.34221 1.59107 1.59107 1.34221 1.87405 1.13661C2.75027 0.5 4.00018 0.5 6.5 0.5C8.9998 0.5 10.2497 0.5 11.1259 1.13661C11.4089 1.34221 11.6578 1.59107 11.8634 1.87405C12.5 2.75027 12.5 4.00018 12.5 6.5V7.83333C12.5 10.3331 12.5 11.5831 11.8634 12.4593C11.6578 12.7423 11.4089 12.9911 11.1259 13.1967C10.2497 13.8333 8.9998 13.8333 6.5 13.8333C4.00018 13.8333 2.75027 13.8333 1.87405 13.1967C1.59107 12.9911 1.34221 12.7423 1.13661 12.4593C0.5 11.5831 0.5 10.3331 0.5 7.83333V6.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: "/dashboard-light/certificates",
    label: "Certificates",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M7.66667 14.6667C4.99537 14.6667 3.65973 14.6667 2.82987 13.6903C2 12.7141 2 11.1427 2 8.00001C2 4.85732 2 3.28596 2.82987 2.30966C3.65973 1.33334 4.99537 1.33334 7.66667 1.33334C10.3379 1.33334 11.6736 1.33334 12.5035 2.30966C13.1715 3.09556 13.3018 4.26704 13.3272 6.33334" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.3335 5.33334H10.0002M5.3335 8.66668H7.3335" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.073 12.0703C13.6349 11.6612 14.0002 10.9983 14.0002 10.25C14.0002 9.00733 12.9928 8 11.7502 8H11.5835C10.3408 8 9.3335 9.00733 9.3335 10.25C9.3335 10.9983 9.69876 11.6612 10.2607 12.0703M13.073 12.0703C12.7017 12.3405 12.2446 12.5 11.7502 12.5H11.5835C11.0891 12.5 10.632 12.3405 10.2607 12.0703M13.073 12.0703L13.4615 13.2936C13.6097 13.7602 13.6838 13.9935 13.6636 14.1388C13.6214 14.4411 13.3748 14.6656 13.0836 14.6667C12.9438 14.6672 12.7342 14.5572 12.315 14.3373C12.1353 14.2429 12.0454 14.1957 11.9535 14.168C11.7662 14.1115 11.5675 14.1115 11.3802 14.168C11.2882 14.1957 11.1984 14.2429 11.0186 14.3373C10.5995 14.5572 10.3899 14.6672 10.25 14.6667C9.9589 14.6656 9.7123 14.4411 9.6701 14.1388C9.64983 13.9935 9.72396 13.7602 9.87216 13.2936L10.2607 12.0703" stroke="white"/>
      </svg>
    ),
  },
  {
    href: "/dashboard-light/announcements",
    label: "Announcements",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4.6665 6V10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.66667 6.00002H4C3.37875 6.00002 3.06812 6.00002 2.82309 6.10151C2.49639 6.23684 2.23682 6.49641 2.10149 6.82309C2 7.06815 2 7.37875 2 8.00002C2 8.62129 2 8.93189 2.10149 9.17695C2.23682 9.50362 2.49639 9.76322 2.82309 9.89855C3.06812 10 3.37875 10 4 10H4.66667L10.0531 11.616C10.6861 11.8058 11.0026 11.9008 11.2838 12.0676L11.2973 12.0757C11.5775 12.2442 11.8111 12.4778 12.2785 12.9452L12.3905 13.0572C12.4701 13.1368 12.5098 13.1765 12.554 13.2082C12.6374 13.2681 12.7335 13.308 12.8349 13.3246C12.8885 13.3334 12.9447 13.3334 13.0572 13.3334C13.3142 13.3334 13.4427 13.3334 13.5464 13.2984C13.7437 13.2318 13.8985 13.077 13.965 12.8798C14 12.7761 14 12.6476 14 12.3906V3.60949C14 3.35246 14 3.22395 13.965 3.12028C13.8985 2.92303 13.7437 2.76819 13.5464 2.70165C13.4427 2.66669 13.3142 2.66669 13.0572 2.66669C12.9447 2.66669 12.8885 2.66669 12.8349 2.67549C12.7335 2.69212 12.6374 2.73193 12.554 2.79183C12.5098 2.82353 12.4701 2.86329 12.3905 2.94283L12.2785 3.05489C11.8111 3.52219 11.5775 3.75585 11.2973 3.92435L11.2838 3.93239C11.0026 4.09925 10.6861 4.19419 10.0531 4.38409L4.66667 6.00002Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.3335 10.3333V12.0305C5.3335 12.75 5.91677 13.3333 6.63627 13.3333C7.07183 13.3333 7.47863 13.1156 7.72023 12.7532L8.66683 11.3333" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: "/dashboard-light/instructors",
    label: "Instructors",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M16 11h6" />
      </svg>
    ),
  },
  {
    href: "/dashboard-light/permissions",
    label: "Permissions",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    href: "/dashboard-light/settings",
    label: "Settings",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { isOpen, close } = useMobileMenu();

  // Close drawer whenever route changes
  useEffect(() => {
    close();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay — mobile only */}
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      {/* Sidebar / drawer */}
        <aside
               className={`fixed top-0 left-0 z-50 h-screen w-[240px] shrink-0 overflow-hidden bg-[#061C19] px-3 py-6 transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0`}
                  >         
        {/* Close button — mobile only, same size and colour as hamburger */}
        <button
          type="button"
          onClick={close}
          aria-label="Close menu"
          className="mb-4 ml-1 flex h-9 w-9 items-center justify-center rounded-lg color-[#31CA92] md:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4L12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <nav className="flex flex-col gap-1.5">
          {/* Dashboard */}
          {navItems
            .filter((item) => item.label === "Dashboard")
            .map((item) => {
              const Icon = item.icon;
              const isActive = pathname === "/dashboard-light";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-semibold select-none transition-all ${
                    isActive
                      ? "bg-[#0E3A34] text-white"
                      : "text-[#94A3B8] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="absolute top-2 bottom-2 left-0 w-[4px] rounded-r-full bg-[#00B98A]" />
                  )}
                  <Icon
                    className={`h-[18px] w-[18px] transition-colors ${
                      isActive ? "text-[#00B98A]" : "text-current"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}

          {/* Applications, Cohorts, Students, Live Sessions */}
          <div className="mt-5 flex flex-col gap-1.5">
            {navItems
              .filter((item) =>
                ["Applications", "Cohorts", "Students", "Live Sessions"].includes(item.label)
              )
              .map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-semibold select-none transition-all ${
                      isActive
                        ? "bg-[#0E3A34] text-white"
                        : "text-[#94A3B8] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute top-2 bottom-2 left-0 w-[4px] rounded-r-full bg-[#00B98A]" />
                    )}
                    <Icon
                      className={`h-[18px] w-[18px] transition-colors ${
                        isActive ? "text-[#00B98A]" : "text-current"
                      }`}
                    />
                    {item.label}
                  </Link>
                );
              })}
          </div>

          {/* Assignments, Certificates, Announcements */}
          <div className="mt-5 flex flex-col gap-1.5">
            {navItems
              .filter((item) =>
                ["Assignments", "Certificates", "Announcements"].includes(item.label)
              )
              .map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-semibold select-none transition-all ${
                      isActive
                        ? "bg-[#0E3A34] text-white"
                        : "text-[#94A3B8] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute top-2 bottom-2 left-0 w-[4px] rounded-r-full bg-[#00B98A]" />
                    )}
                    <Icon
                      className={`h-[18px] w-[18px] transition-colors ${
                        isActive ? "text-[#00B98A]" : "text-current"
                      }`}
                    />
                    {item.label}
                  </Link>
                );
              })}
          </div>

          {/* Instructors, Permissions, Settings */}
          <div className="mt-5 flex flex-col gap-1.5">
            {navItems
              .filter((item) => ["Instructors", "Permissions", "Settings"].includes(item.label))
              .map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative flex items-center gap-3.5 rounded-xl px-4 py-3 text-sm font-semibold select-none transition-all ${
                      isActive
                        ? "bg-[#0E3A34] text-white"
                        : "text-[#94A3B8] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute top-2 bottom-2 left-0 w-[4px] rounded-r-full bg-[#00B98A]" />
                    )}
                    <Icon
                      className={`h-[18px] w-[18px] transition-colors ${
                        isActive ? "text-[#00B98A]" : "text-current"
                      }`}
                    />
                    {item.label}
                  </Link>
                );
              })}
          </div>
        </nav>
      </aside>
    </>
  );
}