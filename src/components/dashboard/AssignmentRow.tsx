type AssignmentRowProps = {
  title: string;
  course: string;
  due: string;
  status: "Not Submitted" | "Submitted" | "Graded";
};

export default function AssignmentRow({
  title,
  course,
  due,
  status,
}: AssignmentRowProps) {
  const statusClass =
    status === "Not Submitted"
      ? "text-[#F59E0B]"
      : status === "Submitted"
        ? "text-[#00B98A]"
        : "text-[#00B98A]";

  return (
    <article className="flex flex-col gap-4 rounded-2xl bg-[#E2E8F0] p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-base font-bold text-[#0F172A]">{title}</h2>
        <p className="mt-1 text-sm text-[#64748B]">{course}</p>
        <p className="mt-2 text-xs text-[#94A3B8]">{due}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className={`text-xs font-semibold ${statusClass}`}>{status}</span>
        <button
          type="button"
          className="rounded-full bg-[#00B98A] px-4 py-2 w-30 text-sm font-semibold text-white"
        >
          {status === "Not Submitted" ? "Upload" : "View"}
        </button>
      </div>
    </article>
  );
}
