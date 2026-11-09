"use client";

import React from "react";
import {
  SearchIcon,
  ChevronDownIcon,
  ExportIcon,
} from "./StudentsIcons";
import {
  COHORT_OPTIONS,
  COURSE_OPTIONS,
  SORT_OPTIONS,
} from "./studentsData";

interface StudentsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  cohortFilter: string;
  onCohortFilterChange: (value: string) => void;
  courseFilter: string;
  onCourseFilterChange: (value: string) => void;
  sortBy: string;
  onSortByChange: (value: string) => void;
  onExport: () => void;
}

export default function StudentsToolbar({
  search,
  onSearchChange,
  cohortFilter,
  onCohortFilterChange,
  courseFilter,
  onCourseFilterChange,
  sortBy,
  onSortByChange,
  onExport,
}: StudentsToolbarProps) {
  return (
    <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      {/* ── Search Input (Left) ── */}
      <div className="relative w-full max-w-sm min-w-[220px]">
        <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A0A5B0]">
          <SearchIcon className="h-4 w-4" />
        </span>
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-10 w-full rounded-lg border border-[#E2E8F0] bg-[#F9F9F9] py-2 pr-4 pl-10 text-sm font-medium text-[#154535] placeholder-[#A0A5B0] outline-none transition-all focus:border-[#31CA92] focus:ring-1 focus:ring-[#31CA92]"
        />
      </div>

      {/* ── Filter & Action Controls (Right) ── */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        {/* All Cohorts Dropdown */}
        <div className="relative">
          <select
            value={cohortFilter}
            onChange={(e) => onCohortFilterChange(e.target.value)}
            className="h-10 appearance-none rounded-lg border border-[#E2E8F0] bg-[#F9F9F9] py-2 pr-8 pl-3.5 text-sm font-medium text-[#A0A5B0] outline-none transition-all hover:opacity-90 focus:border-[#31CA92] cursor-pointer"
          >
            {COHORT_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="text-[#0F172A]">
                {opt}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#A0A5B0]">
            <ChevronDownIcon className="h-3.5 w-3.5" />
          </span>
        </div>

        {/* All Courses Dropdown */}
        <div className="relative">
          <select
            value={courseFilter}
            onChange={(e) => onCourseFilterChange(e.target.value)}
            className="h-10 appearance-none rounded-lg border border-[#E2E8F0] bg-[#F9F9F9] py-2 pr-8 pl-3.5 text-sm font-medium text-[#A0A5B0] outline-none transition-all hover:opacity-90 focus:border-[#31CA92] cursor-pointer"
          >
            {COURSE_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="text-[#0F172A]">
                {opt}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#A0A5B0]">
            <ChevronDownIcon className="h-3.5 w-3.5" />
          </span>
        </div>

        {/* Sort By Newest Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value)}
            className="h-10 appearance-none rounded-lg border border-[#E2E8F0] bg-[#F9F9F9] py-2 pr-8 pl-3.5 text-sm font-medium text-[#A0A5B0] outline-none transition-all hover:opacity-90 focus:border-[#31CA92] cursor-pointer"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="text-[#0F172A]">
                {opt}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#A0A5B0]">
            <ChevronDownIcon className="h-3.5 w-3.5" />
          </span>
        </div>

        {/* Export Button */}
        <button
          type="button"
          onClick={onExport}
          className="inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-semibold transition-all hover:opacity-90 active:scale-[0.98] cursor-pointer select-none"
          style={{ backgroundColor: "#8FF9D1", color: "#154535" }}
        >
          <span>Export</span>
          <ExportIcon className="h-4 w-4" color="#154535" />
        </button>
      </div>
    </div>
  );
}
