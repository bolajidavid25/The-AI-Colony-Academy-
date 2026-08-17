"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/NavBar/logo-2.png";
import avatar from "../../assets/hero-images/Hero2.jpg";
import { BellIcon, SearchIcon } from "./DashboardIcons";

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between bg-[#061C19] px-5 lg:px-8">
      <Link href="/dashboard" className="flex items-center gap-3">
        <Image
          src={logo}
          alt="The AI Colony Academy"
          width={140}
          height={40}
          className="h-9 w-auto object-contain"
          priority
        />
      </Link>

      <div className="flex items-center gap-4">
        <label className="relative hidden sm:block">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
            <SearchIcon />
          </span>
          <input
            type="search"
            placeholder="Search."
            className="h-10 w-56 rounded-full border-0 bg-white py-2 pr-4 pl-9 text-sm text-[#0F172A] outline-none placeholder:text-[#94A3B8]"
          />
        </label>

        <button
          type="button"
          aria-label="Notifications"
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F172A]"
        >
          <BellIcon />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-[#0F172A]" />
        </button>

        <Image
          src={avatar}
          alt="Profile"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
