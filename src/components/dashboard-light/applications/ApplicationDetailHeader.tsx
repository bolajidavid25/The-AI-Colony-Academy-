"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  AcceptIcon,
  WaitlistIcon,
  RejectIcon,
  CloseCircleIcon,
} from "./ApplicationsIcons";
import { ApplicationStatusBadge } from "./ApplicationsTable";
import { Status } from "./applicationsData";

interface ApplicationDetailHeaderProps {
  status: Status;
  onStatusChange: (status: Status) => void;
  backUrl?: string;
}

export default function ApplicationDetailHeader({
  status,
  onStatusChange,
  backUrl = "/dashboard-light/applications",
}: ApplicationDetailHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicked outside
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
    <div>
      {/* Back to Applications */}
      <Link
        href={backUrl}
        className="mb-2 inline-flex items-center gap-1 text-sm hover:underline"
        style={{ color: "#FE4F08" }}
      >
        <ChevronLeftIcon /> Back to Applications
      </Link>

      {/* Title & Actions Row */}
      <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold" style={{ color: "#154535" }}>Applications Details</h1>
            <ApplicationStatusBadge status={status} />
          </div>
          <p className="mt-1 text-sm" style={{ color: "#154535" }}>Submitted on Jul 12, 2026 – 12:45 PM</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Previous button */}
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg border-0 px-3 py-2 text-sm transition-colors cursor-pointer"
            style={{ backgroundColor: "#F9F9F9", color: "#A0A5B0" }}
          >
            <ChevronLeftIcon /> Previous
          </button>
          {/* Next button */}
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg border-0 px-3 py-2 text-sm transition-colors cursor-pointer"
            style={{ backgroundColor: "#F9F9F9", color: "#A0A5B0" }}
          >
            Next <ChevronRightIcon />
          </button>

          {/* Action Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-lg border-0 px-4 py-2 text-sm font-medium transition-colors cursor-pointer"
              style={{ backgroundColor: "#31CA92", color: "#fff" }}
            >
              Action
              <ChevronDownIcon color="white" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-2xl border-0 bg-white p-3 pt-5 shadow-xl animate-in fade-in zoom-in-95 duration-150">
                {/* Close Button placed precisely at the top right matching media_1790016694840.png */}
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(false)}
                  className="absolute right-2.5 top-2.5 transition-opacity hover:opacity-70 cursor-pointer"
                  style={{ color: "#141B34" }}
                  aria-label="Close"
                >
                  <CloseCircleIcon className="h-4 w-4" />
                </button>

                <div className="flex flex-col gap-1">
                  {/* Accept Application */}
                  <button
                    type="button"
                    onClick={() => {
                      onStatusChange("Approved");
                      setIsDropdownOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm font-bold hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                    style={{ color: "#154535" }}
                  >
                    <span style={{ color: "#154535" }}>
                      <AcceptIcon className="h-5 w-5" />
                    </span>
                    Accept Application
                  </button>

                  {/* Waitlist Application */}
                  <button
                    type="button"
                    onClick={() => {
                      onStatusChange("Waitlisted");
                      setIsDropdownOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm font-bold hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                    style={{ color: "#154535" }}
                  >
                    <span style={{ color: "#154535" }}>
                      <WaitlistIcon className="h-5 w-5" />
                    </span>
                    Waitlist Application
                  </button>

                  {/* Reject Application */}
                  <button
                    type="button"
                    onClick={() => {
                      onStatusChange("Rejected");
                      setIsDropdownOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-sm font-bold hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                    style={{ color: "#154535" }}
                  >
                    <span style={{ color: "#154535" }}>
                      <RejectIcon className="h-5 w-5" />
                    </span>
                    Reject Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Thin line under Submitted date — #8FF9D1 */}
      <div className="mb-6" style={{ height: "2px", backgroundColor: "#8FF9D1" }} />
    </div>
  );
}
