"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { COHORTS_DATA, STATUS_STYLES, CohortStatus } from "./cohortsData";
import editIcon from "@/assets/icons/edit-icon.png";

// ─── Icons ────────────────────────────────────────────────────────────────────

function DeleteIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5899 3.26855L11.2215 9.22766L11.2214 9.22844C11.1273 10.7504 11.0803 11.5115 10.6987 12.0588C10.51 12.3293 10.2671 12.5577 9.98534 12.7293C9.41554 13.0765 8.65284 13.0765 7.12739 13.0765H7.12738C5.59998 13.0765 4.83626 13.0765 4.26606 12.7287C3.98416 12.5568 3.74116 12.328 3.55254 12.0569C3.17104 11.5087 3.12501 10.7464 3.03298 9.22177L2.67358 3.26855" strokeWidth="0.891627" strokeLinecap="round" stroke="#141B34"/>
      <path d="M1.7832 3.26845H4.78675M4.78675 3.26845H9.54375M4.78675 3.26845L5.14678 2.47862C5.40953 1.90221 5.5409 1.61401 5.77608 1.43358C5.82821 1.3936 5.88356 1.358 5.94156 1.32715C6.2033 1.18799 6.52 1.18799 7.15347 1.18799C7.77143 1.18799 8.08041 1.18799 8.33785 1.32155C8.39498 1.35118 8.4496 1.38539 8.50114 1.42386C8.73362 1.59726 8.86843 1.87529 9.138 2.43135L9.54375 3.26845M9.54375 3.26845H12.4827" strokeWidth="0.891627" strokeLinecap="round" stroke="#141B34"/>
      <path d="M5.64648 9.80723V6.24072" strokeWidth="0.891627" strokeLinecap="round" stroke="#141B34"/>
      <path d="M8.6189 9.80735V6.24084" strokeWidth="0.891627" strokeLinecap="round" stroke="#141B34"/>
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.1602 13.1582L16.2562 16.2542" stroke="#A0A5B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.7084 8.51436C14.7084 5.09456 11.9361 2.32227 8.51631 2.32227C5.09651 2.32227 2.32422 5.09456 2.32422 8.51436C2.32422 11.9342 5.09651 14.7064 8.51631 14.7064C11.9361 14.7064 14.7084 11.9342 14.7084 8.51436Z" stroke="#A0A5B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
    /* Entire page background #FFFFFF */
    <div className="min-h-screen w-full" style={{ backgroundColor: "#FFFFFF" }}>

      {/* ── Page Header (with bottom border) ── */}
      <div
        className="mb-6 flex items-center justify-between pb-5"
        style={{ borderBottom: "1px solid #8FF9D1" }}
      >
        <div>
          {/* Cohorts: Inter 700 Bold 32px, colour #154535 */}
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "32px",
              color: "#154535",
              lineHeight: 1.2,
            }}
          >
            Cohorts
          </h1>
          {/* Subtitle: Inter 400 Regular 16px, colour #154535 */}
          <p
            className="mt-1"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              color: "#154535",
            }}
          >
            Create and manage your training cohorts
          </p>
        </div>

        {/* New Cohort button: bg #31CA92, text #FFF */}
        <Link
          href="/dashboard-light/cohorts/new"
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors"
          style={{ backgroundColor: "#31CA92", color: "#FFF" }}
        >
          New Cohort
          <span className="text-base leading-none">+</span>
        </Link>
      </div>

      {/* ── Toolbar ── */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        {/* Search — bg #F9F9F9, text/placeholder #A0A5B0 */}
        <label className="relative flex-1 min-w-[200px] max-w-sm">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
            <SearchIcon />
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="h-10 w-full rounded-lg border border-[#E2E8F0] py-2 pl-9 pr-4 text-sm outline-none focus:border-[#31CA92] transition-colors"
            style={{ backgroundColor: "#F9F9F9", color: "#A0A5B0" }}
          />
        </label>

        {/* Spacer */}
        <div className="flex-1" />

        {/* All Courses — bg #F9F9F9, color #A0A5B0 */}
        <div className="relative">
          <select
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            className="h-10 appearance-none rounded-lg border border-[#E2E8F0] py-2 pl-4 pr-8 text-sm outline-none focus:border-[#31CA92] cursor-pointer"
            style={{ backgroundColor: "#F9F9F9", color: "#A0A5B0" }}
          >
            <option>All Courses</option>
            <option>AI Engineering</option>
            <option>AI Marketing</option>
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" style={{ color: "#A0A5B0" }}>
            <ChevronDownIcon />
          </span>
        </div>

        {/* Sort By Newest — bg #F9F9F9, color #A0A5B0 */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-10 appearance-none rounded-lg border border-[#E2E8F0] py-2 pl-4 pr-8 text-sm outline-none focus:border-[#31CA92] cursor-pointer"
            style={{ backgroundColor: "#F9F9F9", color: "#A0A5B0" }}
          >
            <option>Sort By Newest</option>
            <option>Sort By Oldest</option>
            <option>Sort By Name</option>
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" style={{ color: "#A0A5B0" }}>
            <ChevronDownIcon />
          </span>
        </div>

        {/* Export — bg #8FF9D1, text #154535 */}
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors"
          style={{ backgroundColor: "#8FF9D1", color: "#154535" }}
        >
          Export
          <ExportIcon />
        </button>
      </div>

      {/* ── Table ── */}
      {/*
        Outer wrapper: width 1208px, height 388px, border-radius 8px
        Inner padding positions thead at top: 24.97px, left: 29px
      */}
      <div
        style={{
          width: "100%",
          minHeight: "388px",
          borderRadius: "8px",
          backgroundColor: "#F9F9F9",
          padding: "24.97px 29px 29px 29px",
          overflow: "hidden",
        }}
      >
        {/*
          border-collapse: separate + border-spacing: 0 10.645px
          → creates exactly 21.29px gap between each tbody row
            (10.645px below one row + 10.645px above the next)
        */}
        <table
          style={{
            width: "100%",           /* = ~1150px inside the 1208px wrapper with 29px side padding */
            borderCollapse: "separate",
            borderSpacing: "0 10.645px",
            fontSize: "0.875rem",
          }}
        >
          <thead>
            {/*
              thead row:
              height: 41.95px  |  border-radius: 4px
              padding: 11.97px top/bottom, 15.96px left/right
            */}
            <tr>
              {(
                ["Cohorts Name", "Status", "Student Seats", "Starts Date", "End Date", "Courses", "Actions"] as const
              ).map((heading, i) => (
                <th
                  key={heading}
                  style={{
                    color: "#154535",
                    backgroundColor: "#FFF",
                    paddingTop: "11.97px",
                    paddingBottom: "11.97px",
                    paddingLeft: "15.96px",
                    paddingRight: "15.96px",
                    height: "41.95px",
                    textAlign: "left",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    whiteSpace: "nowrap",
                    /* border-radius on first and last th to round the header row */
                    borderRadius: i === 0 ? "4px 0 0 4px" : i === 6 ? "0 4px 4px 0" : undefined,
                  }}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filtered.map((cohort) => (
              /*
                Each data row:
                height: 25px  |  padding-left/right: 15.96px
                gap between rows: 21.29px (handled by border-spacing above)
              */
              <tr
                key={cohort.id}
                className="hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#F9F9F9" }}
              >
                {/* Cohort name: colour #154535 */}
                <td
                  style={{
                    paddingLeft: "15.96px",
                    paddingRight: "15.96px",
                    paddingTop: "14px",
                    paddingBottom: "14px",
                    verticalAlign: "middle",
                    borderBottom: "1px solid #E7EBE9",
                  }}
                >
                  <Link
                    href={`/dashboard-light/cohorts/${cohort.id}`}
                    className="font-semibold transition-colors"
                    style={{ color: "#154535" }}
                  >
                    {cohort.name}
                  </Link>
                </td>

                {/* Status badge */}
                <td
                  style={{
                    paddingLeft: "15.96px",
                    paddingRight: "15.96px",
                    paddingTop: "14px",
                    paddingBottom: "14px",
                    verticalAlign: "middle",
                    borderBottom: "1px solid #E7EBE9",
                  }}
                >
                  <StatusBadge status={cohort.status} />
                </td>

                {/* Data cells: colour #A0A5B0 */}
                <td
                  style={{
                    paddingLeft: "15.96px",
                    paddingRight: "15.96px",
                    paddingTop: "14px",
                    paddingBottom: "14px",
                    verticalAlign: "middle",
                    color: "#A0A5B0",
                    borderBottom: "1px solid #E7EBE9",
                  }}
                >
                  {cohort.studentSeats.enrolled}/{cohort.studentSeats.total}
                </td>
                <td
                  style={{
                    paddingLeft: "15.96px",
                    paddingRight: "15.96px",
                    paddingTop: "14px",
                    paddingBottom: "14px",
                    verticalAlign: "middle",
                    color: "#A0A5B0",
                    borderBottom: "1px solid #E7EBE9",
                  }}
                >
                  {cohort.startDate}
                </td>
                <td
                  style={{
                    paddingLeft: "15.96px",
                    paddingRight: "15.96px",
                    paddingTop: "14px",
                    paddingBottom: "14px",
                    verticalAlign: "middle",
                    color: "#A0A5B0",
                    borderBottom: "1px solid #E7EBE9",
                  }}
                >
                  {cohort.endDate}
                </td>
                <td
                  style={{
                    paddingLeft: "15.96px",
                    paddingRight: "15.96px",
                    paddingTop: "14px",
                    paddingBottom: "14px",
                    verticalAlign: "middle",
                    color: "#A0A5B0",
                    borderBottom: "1px solid #E7EBE9",
                  }}
                >
                  {cohort.courses}
                </td>

                {/* Actions */}
                <td
                  style={{
                    paddingLeft: "15.96px",
                    paddingRight: "15.96px",
                    paddingTop: "14px",
                    paddingBottom: "14px",
                    verticalAlign: "middle",
                    borderBottom: "1px solid #E7EBE9",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Delete cohort"
                      className="transition-opacity hover:opacity-70"
                    >
                      <DeleteIcon />
                    </button>
                    <Link
                      href={`/dashboard-light/cohorts/${cohort.id}/edit`}
                      aria-label="Edit cohort"
                      className="transition-opacity hover:opacity-70"
                    >
                      <Image
                        src={editIcon}
                        alt="Edit"
                        width={15}
                        height={15}
                        style={{ objectFit: "contain" }}
                      />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-sm" style={{ color: "#A0A5B0" }}>
            No cohorts found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
