"use client";

import Link from "next/link";
import { useState } from "react";
import { Cohort, STATUS_STYLES } from "./cohortsData";

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChevronLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {dir === "left" ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
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

function EditSquareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00B98A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1.2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.87-.87a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2z" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function EditCohortIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

function NewCohortIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function ArchiveIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect x="1" y="3" width="22" height="5" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  );
}

// ─── Activity Icon by type ─────────────────────────────────────────────────────

const ACTIVITY_CONFIG: Record<string, { bg: string; icon: string }> = {
  session:    { bg: "#9E90F2", icon: "/activity-session.png"    }, // Live session scheduled
  assignment: { bg: "#31CA92", icon: "/activity-assignment.png" }, // Assignment Created
  student:    { bg: "#FF9E00", icon: "/activity-student.png"    }, // New Student Enrolled
  update:     { bg: "#1A7959", icon: "/activity-update.png"     }, // Cohort Update by Admin User
};

function ActivityDot({ type }: { type: string }) {
  const config = ACTIVITY_CONFIG[type] ?? { bg: "#A0A5B0", icon: "" };
  return (
    <span
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full overflow-hidden"
      style={{ backgroundColor: config.bg }}
    >
      {config.icon ? (
        <img
          src={config.icon}
          alt={type}
          className="h-5 w-5 object-contain"
        />
      ) : (
        <span className="h-2 w-2 rounded-full bg-white" />
      )}
    </span>
  );
}

// ─── Cohort Detail Screen ─────────────────────────────────────────────────────

export default function CohortDetailScreen({ cohort }: { cohort: Cohort }) {
  const [actionOpen, setActionOpen] = useState(false);

  return (
    <div className="min-h-screen w-full">
      {/* ── Back + Title ── */}
      <div className="mb-4">
        <Link
          href="/dashboard-light/cohorts"
          className="inline-flex items-center gap-1 text-xs font-medium hover:underline mb-3"
          style={{ color: "#FE4F08" }}
        >
          <ChevronLeftIcon />
          Back to Cohort
        </Link>

        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-2xl font-bold text-[#154535]">{cohort.name}</h1>
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[cohort.status]}`}>
                {cohort.status}
              </span>
            </div>
            <p className="mt-1 text-sm text-[#154535]">Overview and key details of this cohort</p>
          </div>

          {/* Prev / Next / Action */}
          <div className="relative flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-1 h-9 px-3 rounded-lg border border-[#E2E8F0] text-xs font-medium transition-colors hover:opacity-80"
              style={{ backgroundColor: "#F9F9F9", color: "#A0A5B0" }}
            >
              <ChevronIcon dir="left" />
              Prev
            </button>
            <button
              type="button"
              className="flex items-center gap-1 h-9 px-3 rounded-lg border border-[#E2E8F0] text-xs font-medium transition-colors hover:opacity-80"
              style={{ backgroundColor: "#F9F9F9", color: "#A0A5B0" }}
            >
              Next
              <ChevronIcon dir="right" />
            </button>
            <button
              type="button"
              onClick={() => setActionOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: "#31CA92" }}
            >
              Action
              <ChevronDownIcon />
            </button>

            {/* Action Dropdown */}
            {actionOpen && (
              <div className="absolute right-0 top-12 z-50 w-56 rounded-2xl border border-[#E2E8F0] bg-white p-3 shadow-xl">
                <div className="flex justify-end pb-1">
                  <button
                    type="button"
                    onClick={() => setActionOpen(false)}
                    className="text-[#A0A5B0] hover:text-[#475569] transition-colors"
                    aria-label="Close menu"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                    </svg>
                  </button>
                </div>
                <div className="space-y-1">
                  <Link
                    href={`/dashboard-light/cohorts/${cohort.id}/edit`}
                    onClick={() => setActionOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-bold text-[#154535] hover:bg-[#F8FAFC] rounded-lg transition-colors"
                  >
                    <img src="/icon-edit-cohort.png" alt="Edit" className="h-5 w-5 object-contain" />
                    Edit Cohort
                  </Link>
                  <div className="border-b border-[#F1F5F9] my-1" />
                  <Link
                    href="/dashboard-light/cohorts/new"
                    onClick={() => setActionOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-bold text-[#154535] hover:bg-[#F8FAFC] rounded-lg transition-colors"
                  >
                    <img src="/icon-new-cohort.png" alt="New" className="h-5 w-5 object-contain" />
                    New Cohort
                  </Link>
                  <button
                    type="button"
                    onClick={() => setActionOpen(false)}
                    className="flex w-full items-center gap-3 px-3 py-2 text-sm font-bold text-[#154535] hover:bg-[#F8FAFC] rounded-lg transition-colors"
                  >
                    <img src="/icon-archive-cohort.png" alt="Archive" className="h-5 w-5 object-contain" />
                    Archive Cohort
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Three-column grid ── */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[320px_1fr_280px]">
        {/* ── Col 1: Applicant Info ── */}
        <div className="rounded-xl border border-[#F1F5F9] bg-[#F9F9F9] p-5">
          <div className="mb-2 flex items-center justify-between pb-3 border-b border-[#E7EBE9]">
            <h2 className="text-sm font-bold text-[#154535]">Applicant Info</h2>
            <span className="text-xs" style={{ color: "#828282" }}>#tacca-2026-123</span>
          </div>

          <dl className="text-sm">
            {[
              { label: "Name", value: cohort.name },
              {
                label: "Status",
                value: (
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES["Active"]}`}>
                    Active
                  </span>
                ),
              },
              { label: "Think fic Course ID", value: cohort.thinkficCourseId },
              { label: "Start Date", value: "Jun 01,\n2026" },
              { label: "End Date", value: "Aug 31,\n2026" },
              { label: "Duration", value: cohort.duration },
              { label: "Capacity", value: `${cohort.capacity}\nStudents` },
              { label: "Enrolled Student", value: `${cohort.enrolledStudents} Students` },
              {
                label: "Sponsor",
                value: (
                  <span style={{ color: "#9E90F2", fontWeight: 700, fontSize: "14px" }}>{cohort.sponsor}</span>
                ),
              },
              {
                label: "Circle Space ID",
                value: (
                  <span className="flex items-center gap-1.5">
                    {cohort.circleSpaceId}
                    <button type="button" aria-label="Copy" className="text-[#A0A5B0] hover:text-[#475569]">
                      <CopyIcon />
                    </button>
                  </span>
                ),
              },
              { label: "Created at", value: cohort.createdAt },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-start justify-between gap-3 py-3.5 border-b border-[#E7EBE9]"
              >
                <dt className="shrink-0" style={{ color: "#154535" }}>{label}</dt>
                <dd
                  className="text-right whitespace-pre-line"
                  style={{ color: "#A0A5B0", fontWeight: 700, fontSize: "14px", fontFamily: "Inter, sans-serif" }}
                >
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ── Col 2: Description + Instructors ── */}
        <div className="space-y-5">
          {/* Cohort Description */}
          <div className="rounded-xl border border-[#F1F5F9] bg-[#F9F9F9] p-5">
            <div className="mb-3 pb-3 border-b border-[#E7EBE9] flex items-center justify-between">
              <h2 className="text-sm font-bold" style={{ color: "#154535" }}>Cohort Description</h2>
              <button type="button" className="hover:opacity-80 transition-opacity">
                <img src="/edit-icon.png" alt="Edit" className="h-7 w-7 object-contain" />
              </button>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#154535" }}>{cohort.description}</p>
          </div>

          {/* Instructors */}
          <div className="rounded-xl border border-[#F1F5F9] bg-[#F9F9F9] p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-bold" style={{ color: "#154535" }}>
                Instructors ({cohort.instructors.length})
              </h2>
              <button type="button" className="text-xs font-semibold underline hover:opacity-80" style={{ color: "#009261" }}>
                Manage Instructors
              </button>
            </div>

            <div className="space-y-4">
              {cohort.instructors.map((ins, idx) => (
                <div
                  key={ins.id}
                  className={`flex items-start gap-3 ${idx < cohort.instructors.length - 1 ? "pb-3.5 border-b border-[#E7EBE9]" : ""}`}
                >
                  {/* Avatar */}
                  <div className="h-10 w-10 shrink-0 rounded-full overflow-hidden">
                    <img
                      src="/instructor-avatar.png"
                      alt={ins.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-sm" style={{ color: "#154535" }}>{ins.name}</span>
                      <span
                        style={
                          ins.role === "Lead Instructor"
                            ? { backgroundColor: "#4FD9A650", color: "#154535" }
                            : { backgroundColor: "#9E90F238", color: "#9E90F2" }
                        }
                        className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      >
                        {ins.role}
                      </span>
                    </div>
                    <p className="text-xs text-[#A0A5B0] mt-0.5">{ins.title}</p>
                    <div className="mt-1.5 flex flex-wrap items-center gap-4 text-xs text-[#A0A5B0]">
                      <span className="flex items-center gap-1">
                        <MailIcon />
                        {ins.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <PhoneIcon />
                        {ins.phone}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Instructor */}
            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-colors hover:opacity-90"
              style={{ backgroundColor: "#31CA9224", color: "#154535" }}
            >
              <PlusIcon />
              Add Instructor
            </button>
          </div>
        </div>

        {/* ── Col 3: Session Schedule + Recent Activity ── */}
        <div className="space-y-5">
          {/* Session Schedule */}
          <div className="rounded-xl border border-[#F1F5F9] bg-[#F9F9F9] p-5">
            <h2 className="mb-4 text-sm font-bold text-[#154535]">Session Schedule</h2>
            <div className="space-y-3">
              {cohort.sessions.map((s, idx) => (
                <div
                  key={s.id}
                  className={`py-1.5 ${idx < cohort.sessions.length - 1 ? "pb-3 border-b border-[#E7EBE9]" : ""}`}
                >
                  <p className="text-xs font-semibold text-[#154535]">{s.title}</p>
                  <p className="mt-0.5 text-xs text-[#A0A5B0]">
                    {s.date} — {s.time}
                  </p>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-[#F0FDF9] py-2.5 text-xs font-semibold text-[#154535] hover:bg-[#DCFCE7] transition-colors"
            >
              <PlusIcon />
              Add Session
            </button>
          </div>

          {/* Recent Activity */}
          <div className="rounded-xl border border-[#F1F5F9] bg-[#F9F9F9] p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-bold text-[#154535]">Recent Activity</h2>
              <button type="button" className="text-xs font-semibold text-[#154535] hover:underline">
                View All
              </button>
            </div>
            <div className="space-y-3">
              {cohort.recentActivity.map((a, idx) => (
                <div
                  key={a.id}
                  className={`flex items-start gap-3 ${idx < cohort.recentActivity.length - 1 ? "pb-3 border-b border-[#E7EBE9]" : ""}`}
                >
                  <ActivityDot type={a.type} />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#154535] leading-tight">{a.label}</p>
                    <p className="mt-0.5 text-xs text-[#A0A5B0]">
                      {a.date} — {a.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
