"use client";

import { useMemo, useState } from "react";
import ContinueLearningBanner from "./ContinueLearningBanner";
import CoursePlayer from "./CoursePlayer";
import MyCourseCard from "./MyCourseCard";
import { continueLearningCourse, myCourses, type Course } from "./coursesData";

const categories = ["All Categories", "AI Engineering", "Growth", "Creative"];
const sorts = ["Sort By Recent", "Sort By Title"];

export default function CoursesScreen() {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [sortBy, setSortBy] = useState(sorts[0]);

  const filteredCourses = useMemo(() => {
    const q = query.trim().toLowerCase();
    const next = myCourses.filter((course) => {
      const matchesQuery =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.subtitle.toLowerCase().includes(q);
      const matchesCategory =
        category === "All Categories" || course.track === category;
      return matchesQuery && matchesCategory;
    });

    if (sortBy === "Sort By Title") {
      return [...next].sort((a, b) => a.title.localeCompare(b.title));
    }
    return next;
  }, [query, category, sortBy]);

  if (activeCourse) {
    return (
      <CoursePlayer course={activeCourse} onBack={() => setActiveCourse(null)} />
    );
  }

  return (
    <div className="animate-in fade-in duration-300">
      <div className="mb-6 flex flex-col gap-4 border-b border-[#8ff9d1] pb-6 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-[28px] font-bold tracking-[-0.5px] text-[#154535]">
          Courses{" "}
          <span className="font-semibold text-[#94A3B8]">({myCourses.length})</span>
        </h1>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
              <SearchIcon />
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              className="h-10 w-full rounded-full border border-[#E2E8F0] bg-white py-2 pr-4 pl-9 text-sm text-[#0F172A] outline-none placeholder:text-[#94A3B8] focus:border-[#31CA92] sm:w-48"
            />
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="h-10 rounded-full border border-[#E2E8F0] bg-white px-3 text-sm text-[#475569] outline-none focus:border-[#31CA92]"
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="h-10 rounded-full border border-[#E2E8F0] bg-white px-3 text-sm text-[#475569] outline-none focus:border-[#31CA92]"
          >
            {sorts.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-3 mt-1">
        <h2 className="text-[18px] font-bold text-[#154535]">
          Continue Learning
        </h2>
      </div>

      <ContinueLearningBanner
        course={continueLearningCourse}
        onContinue={setActiveCourse}
      />

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold text-[#154535]">My courses</h2>
        {filteredCourses.length === 0 ? (
          <p className="rounded-2xl bg-white p-6 text-sm text-[#64748B]">
            No courses match your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <MyCourseCard
                key={course.id}
                course={course}
                onStart={setActiveCourse}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 19 19" fill="none" aria-hidden="true">
      <path
        d="M13.1602 13.1582L16.2562 16.2542"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.7084 8.51436C14.7084 5.09456 11.9361 2.32227 8.51631 2.32227C5.09651 2.32227 2.32422 5.09456 2.32422 8.51436C2.32422 11.9342 5.09651 14.7064 8.51631 14.7064C11.9361 14.7064 14.7084 11.9342 14.7084 8.51436Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
      />
    </svg>
  );
}