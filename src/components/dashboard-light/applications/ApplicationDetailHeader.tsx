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
    
      <p className="mb-1 text-xs text-[#94A3B8]">Admin Dashboard/Applications</p>

     
      <Link
        href={backUrl}
        className="mb-2 inline-flex items-center gap-1 text-sm text-[#00B98A] hover:underline"
      >
        <ChevronLeftIcon /> Back to Applications
      </Link>

      {/* Title & Actions Row */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[#0F172A]">Applications Details</h1>
            <ApplicationStatusBadge status={status} />
          </div>
          <p className="mt-1 text-sm text-[#64748B]">Submitted on Jul 12, 2026 – 12:45 PM</p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-sm text-[#64748B] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
          >
            <ChevronLeftIcon /> Previous
          </button>
          <button
            type="button"
            className="flex items-center gap-1 rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-sm text-[#64748B] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
          >
            Next <ChevronRightIcon />
          </button>

          {/* Action Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-lg bg-[#00B98A] px-4 py-2 text-sm font-medium text-white hover:bg-[#00A07A] transition-colors cursor-pointer"
            >
              Action
              <ChevronDownIcon color="white" />
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-52 rounded-xl border border-[#E2E8F0] bg-white shadow-lg animate-in fade-in zoom-in-95 duration-150">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(false)}
                  className="absolute right-3 top-3 text-[#94A3B8] hover:text-[#0F172A] cursor-pointer"
                >
                  ✕
                </button>
                <div className="p-2 pt-8">
                  <button
                    type="button"
                    onClick={() => {
                      onStatusChange("Approved");
                      setIsDropdownOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                  >
                    <span className="text-[#00B98A]">
                      <AcceptIcon />
                    </span>
                    Accept Application
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onStatusChange("Waitlisted");
                      setIsDropdownOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                  >
                    <span className="text-[#64748B]">
                      <WaitlistIcon />
                    </span>
                    Waitlist Application
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onStatusChange("Rejected");
                      setIsDropdownOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-[#0F172A] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                  >
                    <span className="text-[#DC2626]">
                      <RejectIcon />
                    </span>
                    Reject Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
