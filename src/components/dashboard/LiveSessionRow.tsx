type LiveSessionRowProps = {
  title: string;
  host: string;
  datetime: string;
  status: "Upcoming" | "Live" | "Recorded";
};

export default function LiveSessionRow({
  title,
  host,
  datetime,
  status,
}: LiveSessionRowProps) {
  const statusClass =
    status === "Live"
      ? "bg-[#FEE2E2] text-[#DC2626]"
      : status === "Upcoming"
        ? "bg-[#DCFCE7] text-[#166534]"
        : "bg-[#F1F5F9] text-[#64748B]";

  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <span
          className={`mb-2 inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusClass}`}
        >
          {status}
        </span>
        <h2 className="text-base font-bold text-[#0F172A]">{title}</h2>
        <p className="mt-1 text-sm text-[#64748B]">With {host}</p>
        <p className="mt-2 text-xs text-[#94A3B8]">{datetime}</p>
      </div>
      <button
        type="button"
        className="rounded-full bg-[#00B98A] px-4 py-2.5 text-sm font-semibold text-white"
      >
        {status === "Recorded" ? "Watch Replay" : "Join Via Zoom"}
      </button>
    </article>
  );
}
