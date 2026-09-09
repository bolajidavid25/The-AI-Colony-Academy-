import Image from "next/image";
import type { Course } from "./coursesData";

type MyCourseCardProps = {
  course: Course;
  onStart: (course: Course) => void;
};

export default function MyCourseCard({ course, onStart }: MyCourseCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl  bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={course.image}
          alt=""
          fill
          className="object-cover object-center border rounded-2xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="text-[18px] font-bold leading-snug text-[#154535]">
          {course.title}
        </h3>
        <p className="mt-1 text-[13px] text-[#5A7A72]">{course.subtitle}</p>
        <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.04em] text-[#9CA3AF]">
          {course.audience}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <div className="flex flex-col gap-1.5 text-[12px] text-[#6B7280]">
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon />
              {course.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <SessionsIcon />
              {course.sessions}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onStart(course)}
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#31CA92] px-4 py-2 text-[12px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            Start Learning
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M7 4V7L9 8.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SessionsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="11" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5.5 6.5L8.5 8L5.5 9.5V6.5Z" fill="currentColor" />
    </svg>
  );
}
