"use client";

import Link from "next/link";
import { useState } from "react";
import { COHORTS_DATA, STATUS_STYLES, CohortStatus } from "./cohortsData";

// ─── Icons ────────────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.1602 13.1582L16.2562 16.2542" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.7084 8.51436C14.7084 5.09456 11.9361 2.32227 8.51631 2.32227C5.09651 2.32227 2.32422 5.09456 2.32422 8.51436C2.32422 11.9342 5.09651 14.7064 8.51631 14.7064C11.9361 14.7064 14.7084 11.9342 14.7084 8.51436Z" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ExportIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

// ─── Status Badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: CohortStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  );
}

// ─── Cohorts Screen ───────────────────────────────────────────────────────────

export default function CohortsScreen() {
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("All Courses");
  const [sortBy, setSortBy] = useState("Sort By Newest");

  const filtered = COHORTS_DATA.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full">
      {/* ── Header ── */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A]">Cohorts</h1>
          <p className="mt-1 text-sm text-[#64748B]">Create and manage your training cohorts</p>
        </div>
        <Link
          href="/dashboard-light/cohorts/new"
          className="inline-flex items-center gap-2 rounded-lg bg-[#00B98A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#009E76] transition-colors"
        >
          New Cohorts
          <span className="text-base leading-none">+</span>
        </Link>
      </div>

      {/* ── Toolbar ── */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        {/* Search */}
        <label className="relative flex-1 min-w-[200px] max-w-sm">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
            <SearchIcon />
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="h-10 w-full rounded-lg border border-[#E2E8F0] bg-white py-2 pl-9 pr-4 text-sm text-[#0F172A] outline-none placeholder:text-[#94A3B8] focus:border-[#00B98A] transition-colors"
          />
        </label>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Course Filter */}
        <div className="relative">
          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="h-10 appearance-none rounded-lg border border-[#E2E8F0] bg-white py-2 pl-4 pr-8 text-sm text-[#0F172A] outline-none focus:border-[#00B98A] cursor-pointer"
          >
            <option>All Courses</option>
            <option>AI Engineering</option>
            <option>AI Marketing</option>
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8]">
            <ChevronDownIcon />
          </span>
        </div>

        {/* Sort */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-10 appearance-none rounded-lg border border-[#E2E8F0] bg-white py-2 pl-4 pr-8 text-sm text-[#0F172A] outline-none focus:border-[#00B98A] cursor-pointer"
          >
            <option>Sort By Newest</option>
            <option>Sort By Oldest</option>
            <option>Sort By Name</option>
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8]">
            <ChevronDownIcon />
          </span>
        </div>

        {/* Export */}
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-4 text-sm font-medium text-[#0F172A] hover:bg-[#F8FAFC] transition-colors"
        >
          Export
          <ExportIcon />
        </button>
      </div>

      {/* ── Table ── */}
      <div className="rounded-xl overflow-hidden border border-[#F1F5F9]">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#F1F5F9] bg-white">
              <th className="px-5 py-4 text-left text-sm font-semibold text-[#0F172A]">Cohorts Name</th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-[#0F172A]">Status</th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-[#0F172A]">Student Seats</th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-[#0F172A]">Starts Date</th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-[#0F172A]">End Date</th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-[#0F172A]">Courses</th>
              <th className="px-5 py-4 text-left text-sm font-semibold text-[#0F172A]">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-[#F8FAFC]">
            {filtered.map((cohort) => (
              <tr key={cohort.id} className="hover:bg-[#FAFAFA] transition-colors">
                <td className="px-5 py-4">
                  <Link
                    href={`/dashboard-light/cohorts/${cohort.id}`}
                    className="font-semibold text-[#0F172A] hover:text-[#00B98A] transition-colors"
                  >
                    {cohort.name}
                  </Link>
                </td>
                <td className="px-5 py-4">
                  <StatusBadge status={cohort.status} />
                </td>
                <td className="px-5 py-4 text-[#475569]">
                  {cohort.studentSeats.enrolled}/{cohort.studentSeats.total}
                </td>
                <td className="px-5 py-4 text-[#475569]">{cohort.startDate}</td>
                <td className="px-5 py-4 text-[#475569]">{cohort.endDate}</td>
                <td className="px-5 py-4 text-[#475569]">{cohort.courses}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Delete cohort"
                      className="text-[#94A3B8] hover:text-[#EF4444] transition-colors"
                    >
                      <TrashIcon />
                    </button>
                    <Link
                      href={`/dashboard-light/cohorts/${cohort.id}/edit`}
                      aria-label="Edit cohort"
                      className="text-[#94A3B8] hover:text-[#00B98A] transition-colors"
                    >
                      <EditIcon />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-sm text-[#94A3B8]">
            No cohorts found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
