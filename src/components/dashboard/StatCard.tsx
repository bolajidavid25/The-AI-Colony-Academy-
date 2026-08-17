import type { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  iconBg: string;
  label: string;
  value: string;
  detail?: ReactNode;
  detailClassName?: string;
  progress?: number;
};

export default function StatCard({
  icon,
  iconBg,
  label,
  value,
  detail,
  detailClassName = "text-[#94A3B8]",
  progress,
}: StatCardProps) {
  return (
    <article className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${iconBg}`}
        >
          {icon}
        </div>
        <p className="text-sm font-medium text-[#64748B]">{label}</p>
      </div>
      <p className="text-[26px] font-bold leading-none text-[#0F172A]">{value}</p>
      {detail && (
        <p className={`mt-2 text-xs font-medium ${detailClassName}`}>{detail}</p>
      )}
      {typeof progress === "number" && (
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#E2E8F0]">
          <div
            className="h-full rounded-full bg-[#00B98A]"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </article>
  );
}
