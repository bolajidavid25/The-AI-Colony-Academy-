"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../assets/NavBar/logo-2.png";

export default function Navbar() {
  return (
    <nav className="relative z-50 w-full border-t border-[#31CA92]/30 bg-[#061C19]">
      <div className="mx-auto flex h-[96px] w-full max-w-[1260px] items-center justify-between px-6 lg:px-8">
        <div className="flex items-center">
          <Image
            src={logo}
            alt="The AI Colony Academy"
            width={125}
            height={55}
            priority
            className="h-auto w-[125px] object-contain"
          />
        </div>

        <div className="hidden items-center gap-[52px] md:flex">
          <a
            href="#scholarship"
            className="text-[13px] font-normal text-[#7DE0BF] transition-opacity hover:opacity-80"
          >
            Scholarship
          </a>

          <Link
            href="/dashboard-light"
            className="text-[13px] font-normal text-[#7DE0BF] transition-opacity hover:opacity-80"
          >
            About Us
          </Link>

          <a
            href="#contact"
            className="text-[13px] font-normal text-[#7DE0BF] transition-opacity hover:opacity-80"
          >
            Contact Us
          </a>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/dashboard"
            className="rounded-full bg-[#31CA92] px-[27px] py-[15px] text-[12px] font-bold text-white transition-transform hover:scale-[1.02]"
          >
            Student Log In
          </Link>

          <a
            href="#scholarship-form"
            className="rounded-full bg-[#0C4538] px-[34px] py-[15px] text-[12px] font-bold text-white transition-transform hover:scale-[1.02]"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
