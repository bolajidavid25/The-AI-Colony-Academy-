import Image, { type StaticImageData } from "next/image";

type EnrolledCourseCardProps = {
  title: string;
  module: string;
  progress: number;
  image: StaticImageData;
  status: "In progress" | "Not started" | "Completed";
};

export default function EnrolledCourseCard({
  title,
  module,
  progress,
  image,
  status,
}: EnrolledCourseCardProps) {
  const statusColor =
    status === "Completed"
      ? "text-[#00B98A]"
      : status === "In progress"
        ? "text-[#F59E0B]"
        : "text-[#94A3B8]";

  return (
    <article className="overflow-hidden rounded-2xl border border-[#F1F5F9] bg-white">
      <div className="relative h-36 w-full">
        <Image src={image} alt="" fill className="object-cover" sizes="400px" />
      </div>
      <div className="p-5">
        <p className={`text-xs font-semibold ${statusColor}`}>{status}</p>
        <h2 className="mt-1 text-lg font-bold text-[#0F172A]">{title}</h2>
        <p className="mt-1 text-sm text-[#64748B]">{module}</p>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#E2E8F0]">
          <div
            className="h-full rounded-full bg-[#00B98A]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-[#94A3B8]">{progress}% complete</p>
        <button
          type="button"
          className="mt-4 w-full rounded-full bg-[#00B98A] py-2.5 text-sm font-semibold text-white"
        >
          {status === "Not started" ? "Start Course" : "Continue"}
        </button>
      </div>
    </article>
  );
}
