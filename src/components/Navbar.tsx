"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/NavBar/logo-2.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav id= "top-section" className="relative z-50 w-full border-t border-[#31CA92]/30 bg-[#061C19]">
      <div className="mx-auto flex h-[96px] w-full max-w-[1260px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
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

        {/* Desktop Navigation */}
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

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-5 md:flex">
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

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative flex h-[40px] w-[40px] items-center justify-center md:hidden"
        >
          <span
            className={`absolute h-[2px] w-[15px] rounded-full bg-[#31CA92] transition-all duration-300 ${
              menuOpen
                ? "rotate-45"
                : "-translate-y-[5px]"
            }`}
          />

          <span
            className={`absolute h-[2px] w-[15px] rounded-full bg-[#31CA92] transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute h-[2px] w-[15px] rounded-full bg-[#31CA92] transition-all duration-300 ${
              menuOpen
                ? "-rotate-45"
                : "translate-y-[5px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
                {/* Mobile Navigation Drawer */}
          <div
            className={`absolute right-0 top-full z-[100] w-[100%] max-w-[100%] md:hidden transform bg-[#061C19] shadow-[-12px_12px_35px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="border-t border-[#31CA92]/20 px-6 pb-7 pt-3">

              {/* Scholarship */}
              <a
                href="#scholarship"
                onClick={closeMenu}
                className="block border-b border-[#31CA92]/10 py-4 text-[13px] font-normal text-[#7DE0BF] transition-opacity hover:opacity-80"
              >
                Scholarship
              </a>

              {/* About Us */}
              <Link
                href="/dashboard-light"
                onClick={closeMenu}
                className="block border-b border-[#31CA92]/10 py-4 text-[13px] font-normal text-[#7DE0BF] transition-opacity hover:opacity-80"
              >
                About Us
              </Link>

              {/* Contact Us */}
              <a
                href="#contact"
                onClick={closeMenu}
                className="block border-b border-[#31CA92]/10 py-4 text-[13px] font-normal text-[#7DE0BF] transition-opacity hover:opacity-80"
              >
                Contact Us
              </a>

              {/* Student Log In */}
              <Link
                href="/dashboard"
                onClick={closeMenu}
                className="mt-5 block rounded-full bg-[#31CA92] px-[27px] py-[14px] text-center text-[12px] font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Student Log In
              </Link>

              {/* Apply Now */}
              <a
                href="#scholarship-form"
                onClick={closeMenu}
                className="mt-3 block rounded-full bg-[#0C4538] px-[34px] py-[14px] text-center text-[12px] font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Apply Now
              </a>
            </div>
          </div>
    </nav>
  );
}