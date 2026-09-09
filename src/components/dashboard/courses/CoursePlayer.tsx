"use client";

import { useState } from "react";
import Image from "next/image";
import type { Course } from "./coursesData";
import { instructor, learnings, modules } from "./coursesData";

type CoursePlayerProps = {
  course: Course;
  onBack: () => void;
};

export default function CoursePlayer({ course, onBack }: CoursePlayerProps) {
  const [tab, setTab] = useState<"overview" | "transcript">("overview");
  const [playing, setPlaying] = useState(false);
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);


  return (
    <div className="animate-in fade-in duration-200">
      <div className="mb-6 grid grid-cols-1 items-end gap-4 xl:grid-cols-[2.7fr_390px] xl:max-w-7xl">
        <div>
          <p className="text-sm text-[#94A3B8]">Module 4 - Lesson 2</p>
          <h1 className="mt-1 text-[28px] font-bold tracking-[-0.5px] text-[#154535]">
            Agent Architecture
          </h1>
        </div>
        
{/* Change made here: Removed the fixed margin and added responsive layout utility */}
        <div className="flex items-center justify-end xl:justify-end">

        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full bg-[#D1FAE5] px-5 py-2 text-sm font-semibold  text-[#154535]"
        >
          <span aria-hidden="true">‹</span>
          Back
        </button>
      </div>
    </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2.7fr_390px] xl:max-w-7xl">
        <div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-black">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 70vw"
            />
            <button
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? "Pause lesson" : "Play lesson"}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                {playing ? (
                  <span className="flex gap-1">
                    <span className="h-5 w-1.5 rounded-sm bg-[#154535]" />
                    <span className="h-5 w-1.5 rounded-sm bg-[#154535]" />
                  </span>
                ) : (
                  <span className="ml-1 border-y-[10px] border-l-[16px] border-y-transparent border-l-[#154535]" />
                )}
              </span>
            </button>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-10 text-white">
              <div className="mb-2 flex items-center justify-between text-xs font-medium">
                <span>Module 4</span>
                <span>70% Complete</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/30">
                <div className="h-full w-[70%] rounded-full bg-[#31CA92]" />
              </div>
            </div>
          </div>

                    <div className="mt-4 flex flex-wrap gap-2">
            {/* Intermediate Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F1F5F9] px-3 py-1.5 text-xs font-medium text-[#64748B]">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-3.5 w-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 3 18.375v-5.25ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125v-9.75ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
              Intermediate
            </span>

            {/* Time Frame Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F1F5F9] px-3 py-1.5 text-xs font-medium text-[#64748B]">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-3.5 w-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              8 Weeks
            </span>

            {/* Certificate Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#F1F5F9] px-3 py-1.5 text-xs font-medium text-[#64748B] border border-[#64748A]">
              <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-3.5 w-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 0 0-1.125 1.125v3.375m9 0ZM9 10.5h.008v.008H9V10.5Zm6 0h.008v.008H15V10.5Zm-6 3h.008v.008H9v-.008Zm6 0h.008v.008H15v-.008ZM6.75 22.5V4.125c0-.621.504-1.125 1.125-1.125h8.25c.621 0 1.125.504 1.125 1.125V22.5" />
              </svg>
              Certificates
            </span>
          </div>


          <div className="mt-6">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setTab("overview")}
                className={`rounded-t-lg px-4 py-2 text-sm font-semibold ${
                  tab === "overview"
                    ? "bg-[#D1FAE5] text-[#154535]"
                    : "text-[#64748B]"
                }`}
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => setTab("transcript")}
                className={`rounded-t-lg px-4 py-2 text-sm font-semibold ${
                  tab === "transcript"
                    ? "bg-[#D1FAE5] text-[#154535]"
                    : "text-[#64748B]"
                }`}
              >
                Transcript
              </button>
            </div>

            <div className="rounded-b-2xl rounded-tr-2xl border border-[#E2E8F0] bg-white p-5">
              {tab === "overview" ? (
                <>
                  <h2 className="text-base font-bold text-[#154535]">
                    About this Lesson
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  </p>

                  <h3 className="mt-6 text-base font-bold text-[#154535]">
                    What you&apos;ll learn
                  </h3>
                  <ul className="mt-3 flex flex-col gap-3">
                    {learnings.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#475569]">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#31CA92] text-[10px] font-bold text-white">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="space-y-3 text-sm leading-6 text-[#64748B]">
                  <p>
                    Welcome back. In this lesson we look at agent architecture —
                    the pieces you need before you write prompts or connect tools.
                  </p>
                  <p>
                    Start with a goal, add a planner, then give the agent tools
                    and a place to store memory. That is the loop you will reuse
                    across {course.title}.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-4">
          <section className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
            <div className="flex items-center justify-between bg-[#D1FAE5] px-4 py-3">
              <h2 className="text-sm font-bold text-[#154535]">Modules</h2>
              <p className="text-xs font-medium text-[#154535]">
                12 Lessons • 4h 30m
              </p>
            </div>
            <ul>
              {modules.map((module) => {
                const isExpanded = expandedModuleId === module.id;
                
                return (
                  <li key={module.id} className="border-t border-[#F1F5F9]">
                    {/* Clickable header row */}
                    <button
                      type="button"
                      onClick={() => setExpandedModuleId(isExpanded ? null : module.id)}
                      className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-[#F8FAFC]"
                    >
                      <div className="flex items-start gap-3">
                        <ModuleStatusIcon status={module.status} />
                        <div>
                          <p className="text-sm font-semibold text-[#0F172A]">
                            {module.title}
                          </p>
                          <p className="mt-0.5 text-xs text-[#94A3B8]">{module.detail}</p>
                        </div>
                      </div>
                      
                      {/* Scaleable SVG Chevron Icon: Modify h-5 w-5 to h-6 w-6 or higher if you want it even bigger */}
                      <svg
                        xmlns="http://w3.org"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className={`h-5 w-5 text-[#94A3B8] transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>

                    {/* Expandable Specific Details Panel */}
                    {isExpanded && (
                      <div className="bg-[#F8FAFC] border-t border-[#F1F5F9] px-11 py-3 text-xs text-[#64748B] space-y-2 animate-in fade-in slide-in-from-top-1 duration-150">
                        {module.lessons && module.lessons.length > 0 ? (
                          module.lessons.map((lesson: any, index: number) => (
                            <div key={index} className="flex justify-between items-center py-1">
                              <span>{lesson.title || "Lesson Breakdown"}</span>
                              <span className="text-[#94A3B8]">{lesson.duration || "15m"}</span>
                            </div>
                          ))
                        ) : (
                          <p>No extra details available for this module.</p>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>




          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
            <h2 className="text-sm font-bold text-[#154535]">Instructor</h2>
            <div className="mt-4 flex items-center gap-3">
              <Image
                src={instructor.photo}
                alt={instructor.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-[#0F172A]">
                  {instructor.name}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#94A3B8]">
                  {instructor.role}
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#64748B]">{instructor.bio}</p>
                        {/* Social Profile Media Links */}
            <div className="mt-5 flex items-center gap-4 text-[#64748B]">
              {/* X / Twitter */}
              <a href="#" aria-label="Instructor's X Account" className="text-[#000] transition-colors duration-150">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" aria-label="Instructor's Instagram" className="text-[#000] transition-colors duration-150">
                <svg className="h-4.5 w-4.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="Instructor's LinkedIn" className="text-[#000] transition-colors duration-150">
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

          </section>
        </aside>
      </div>
    </div>
  );
}

function ModuleStatusIcon({
  status,
}: {
  status: "complete" | "in-progress" | "locked";
}) {
  if (status === "complete") {
    return (
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#31CA92] text-[10px] font-bold text-white">
        ✓
      </span>
    );
  }

  if (status === "in-progress") {
    return (
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-white">
        <span className="ml-0.5 border-y-[5px] border-l-[8px] border-y-transparent border-l-white" />
      </span>
    );
  }

  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E2E8F0] text-[#94A3B8]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
      </svg>
    </span>
  );
}

function SocialIcon({ label }: { label: string }) {
  return (
    <span
      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F1F5F9] text-[10px] font-bold"
      aria-label={label}
    >
      {label === "X" ? "X" : label === "Instagram" ? "Ig" : "in"}
    </span>
  );
}