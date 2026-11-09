"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  AwardCertificateIcon,
} from "./StudentDetailIcons";

interface StudentDetailHeaderProps {
  status?: "Pending" | "Active" | "Completed";
  submittedDate?: string;
  backUrl?: string;
  onActionSelect?: (action: string) => void;
}

export default function StudentDetailHeader({
  status = "Pending",
  submittedDate = "Submitted on Jul 12, 2026 - 12:45 PM",
  backUrl = "/dashboard-light/students",
  onActionSelect,
}: StudentDetailHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="mb-6 pb-5 w-full"
      style={{ borderBottom: "1px solid #8FF9D1" }}
    >
      {/* Back to Students Breadcrumb */}
      <Link
        href={backUrl}
        className="mb-2 inline-flex items-center gap-1 text-sm font-medium hover:underline"
        style={{ color: "#FE4F08" }}
      >
        <ChevronLeftIcon className="h-4 w-4" /> Back to Students
      </Link>

      {/* Title & Actions Row */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight" style={{ color: "#154535" }}>
              Student Details
            </h1>
            <span
              className="inline-flex items-center rounded-full px-3 py-0.5 text-xs font-bold"
              style={{
                color: status === "Pending" ? "#FF9E00" : "#31CA92",
                backgroundColor: status === "Pending" ? "rgba(255, 158, 0, 0.15)" : "#8FF9D145",
              }}
            >
              {status}
            </span>
          </div>
          <p className="mt-1 text-sm font-medium" style={{ color: "#154535" }}>
            {submittedDate}
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Previous button */}
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg border-0 px-3.5 py-2 text-sm font-medium transition-colors hover:opacity-80 cursor-pointer"
            style={{ backgroundColor: "#F9F9F9", color: "#A0A5B0" }}
          >
            <ChevronLeftIcon className="h-4 w-4" /> Previous
          </button>

          {/* Next button */}
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg border-0 px-3.5 py-2 text-sm font-medium transition-colors hover:opacity-80 cursor-pointer"
            style={{ backgroundColor: "#F9F9F9", color: "#A0A5B0" }}
          >
            Next <ChevronRightIcon className="h-4 w-4" />
          </button>

          {/* Action Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-lg border-0 px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-95 cursor-pointer shadow-none"
              style={{ backgroundColor: "#31CA92" }}
            >
              Action
              <ChevronDownIcon color="white" size={12} />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full z-40 mt-2 w-56 rounded-2xl border-0 bg-white p-2 shadow-xl animate-in fade-in zoom-in-95 duration-150">
                <button
                  type="button"
                  onClick={() => {
                    onActionSelect?.("issue-certificate");
                    setIsDropdownOpen(false);
                  }}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold hover:bg-[#F8FAFC] transition-colors cursor-pointer text-left"
                  style={{ color: "#154535" }}
                >
                  <AwardCertificateIcon className="h-4 w-4" color="#31CA92" />
                  Issue Certificate
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onActionSelect?.("toggle-status");
                    setIsDropdownOpen(false);
                  }}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold hover:bg-[#F8FAFC] transition-colors cursor-pointer text-left"
                  style={{ color: "#154535" }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#FE4F08" }} />
                  Change Status
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onActionSelect?.("export");
                    setIsDropdownOpen(false);
                  }}
                  className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold hover:bg-[#F8FAFC] transition-colors cursor-pointer text-left"
                  style={{ color: "#154535" }}
                >
                  <span className="text-xs">📥</span>
                  Export Record
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
