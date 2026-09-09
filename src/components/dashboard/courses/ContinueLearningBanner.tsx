import type { Course } from "./coursesData";
import RobotMascot from "./RobotMascot";

type ContinueLearningBannerProps = {
  course: Course;
  onContinue: (course: Course) => void;
};

export default function ContinueLearningBanner({
  course,
  onContinue,
}: ContinueLearningBannerProps) {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[#F1F5F9] px-6 py-7 sm:px-8">
      <p className="text-sm font-medium text-[#154535]">{course.track}</p>
      <h2 className="mt-1 max-w-[420px] text-[28px] font-bold leading-tight text-[#154535] sm:text-[32px]">
        Building Autonomous Agents
      </h2>

      <div className="mt-6 max-w-[360px]">
        <div className="h-2 overflow-hidden rounded-full bg-[#E2E8F0]">
          <div
            className="h-full rounded-full bg-[#31CA92]"
            style={{ width: `${course.progress}%` }}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => onContinue(course)}
        className="mt-6 rounded-full bg-[#154535] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Continue Learning
      </button>

      <div
        className="pointer-events-none absolute right-4 bottom-0 hidden sm:block lg:right-10"
        aria-hidden="true"
      >
        <RobotMascot />
      </div>
    </article>
  );
}
