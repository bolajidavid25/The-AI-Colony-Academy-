"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/NavBar/logo-2.png";
import avatar from "../../assets/hero-images/Hero2.jpg";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between bg-[#061C19] px-5 lg:px-8">
      {/* Logo */}
      <Link href="/dashboard-light" className="flex items-center gap-3">
        <Image
          src={logo}
          alt="The AI Colony Academy"
          width={140}
          height={40}
          className="h-9 w-auto object-contain"
          priority
        />
      </Link>

      {/* Right Side Controls */}
      <div className="relative flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M13.1602 13.1582L16.2562 16.2542"
                stroke="#94A3B8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.7084 8.51436C14.7084 5.09456 11.9361 2.32227 8.51631 2.32227C5.09651 2.32227 2.32422 5.09456 2.32422 8.51436C2.32422 11.9342 5.09651 14.7064 8.51631 14.7064C11.9361 14.7064 14.7084 11.9342 14.7084 8.51436Z"
                stroke="#94A3B8"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="search"
            placeholder="Search"
            className="h-10 w-64 rounded-full border border-transparent bg-white/10 py-2 pr-4 pl-10 text-sm text-white outline-none focus:border-[#00B98A] focus:bg-white focus:text-[#0F172A] transition-all placeholder:text-[#94A3B8]"
          />
        </div>

        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M14.7094 13.9349V7.35447C14.7094 4.36155 12.2832 1.9353 9.29026 1.9353C6.29734 1.9353 3.87109 4.36155 3.87109 7.35447V13.9349"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8718 13.9351H2.71094"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4512 15.4833C10.4512 16.1247 9.93123 16.6446 9.28991 16.6446M9.28991 16.6446C8.64859 16.6446 8.12866 16.1247 8.12866 15.4833M9.28991 16.6446V15.4833"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-[#00B98A]" />
        </button>

        {/* User Profile Avatar Button */}
        <button
          type="button"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/20 hover:border-[#00B98A] transition-colors focus:outline-none"
        >
          <Image
            src={avatar}
            alt="Profile Avatar"
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </button>

        {/* Profile Dropdown Overlay Card */}
        {isProfileOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-14 w-[300px] rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsProfileOpen(false)}
              className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full text-[#94A3B8] hover:bg-[#F1F5F9] hover:text-[#475569] transition-all"
              aria-label="Close profile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Profile Info */}
            <div className="mb-5 flex items-center gap-3 border-b border-[#F1F5F9] pb-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={avatar}
                  alt="Profile Avatar"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#00B98A]" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-bold text-[#0F172A]">James Rodriguez</h4>
                <p className="text-xs text-[#94A3B8]">James.rodriguez@gmail</p>
              </div>
            </div>

            {/* Navigation Options */}
            <ul className="flex flex-col gap-1.5">
              <li>
                <Link
                  href="/dashboard-light/profile"
                  className="flex items-center gap-3.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A] transition-all"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard-light/settings"
                  className="flex items-center gap-3.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A] transition-all"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  Setting
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard-light/logout"
                  className="flex items-center gap-3.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-[#EF4444] hover:bg-[#FEF2F2] hover:text-[#DC2626] transition-all"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
