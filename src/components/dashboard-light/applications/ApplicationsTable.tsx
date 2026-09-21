import Link from "next/link";
import { Application, Status } from "./applicationsData";

export function ApplicationStatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, { color: string; backgroundColor: string }> = {
    Approved: { color: "#31CA92", backgroundColor: "#8FF9D145" },
    Waitlisted: { color: "#9E90F2", backgroundColor: "#9E90F21A" },
    Pending: { color: "#FF9E00", backgroundColor: "#FF9E001A" },
    Rejected: { color: "#DC2626", backgroundColor: "#FEE2E2" },
  };
  const style = styles[status];
  return (
    <span
      className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
      style={{ color: style.color, backgroundColor: style.backgroundColor }}
    >
      {status}
    </span>
  );
}

interface ApplicationsTableProps {
  applications: Application[];
  baseDetailUrl?: string;
}

export default function ApplicationsTable({
  applications,
  baseDetailUrl = "/dashboard-light/applications",
}: ApplicationsTableProps) {
  return (
    /*
     * Outer container: #F9F9F9 with increased top padding (16px) and reduced left/right padding (2px)
     */
    <div
      className="overflow-x-auto rounded-t-xl"
      style={{ backgroundColor: "#F9F9F9", padding: "16px 2px 0 2px" }}
    >
      <table
        className="w-full min-w-[800px] text-sm font-semibold"
        style={{ borderCollapse: "separate", borderSpacing: 0 }}
      >
        <thead>
          {/* ── White header row — floating on #F9F9F9 with rounded ends ── */}
          <tr className="bg-white">
            <th className="rounded-l-lg px-4 py-[13px] text-left font-bold" style={{ color: "#154535" }}>
              Name
            </th>
            <th className="pr-4 py-[13px] text-left font-bold" style={{ color: "#154535" }}>
              Email
            </th>
            <th className="pr-4 py-[13px] text-left font-bold" style={{ color: "#154535" }}>
              Course
            </th>
            <th className="pr-4 py-[13px] text-left font-bold" style={{ color: "#154535" }}>
              Sample Score
            </th>
            <th className="pr-4 py-[13px] text-left font-bold" style={{ color: "#154535" }}>
              Motivation Score
            </th>
            <th className="pr-4 py-[13px] text-left font-bold" style={{ color: "#154535" }}>
              Status
            </th>
            <th className="pr-4 py-[13px] text-left font-bold" style={{ color: "#154535" }}>
              Date Applied
            </th>
            <th className="rounded-r-lg pr-4 py-[13px] text-left font-bold" style={{ color: "#154535" }}>
              Actions
            </th>
          </tr>

          {/* ── 10px gap — #F9F9F9 space between white header and first table row ── */}
          <tr aria-hidden="true" style={{ height: "10px", backgroundColor: "#F9F9F9" }}>
            <td colSpan={8} />
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr
              key={app.id}
              className="transition-colors"
              style={{ backgroundColor: "#F9F9F9" }}
            >
              {/* Name */}
              <td className="px-4 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CBD5E1] text-xs font-bold"
                    style={{ color: "#154535" }}
                  >
                    {app.avatarInitial}
                  </span>
                  <span className="font-bold" style={{ color: "#154535" }}>
                    {app.name}
                  </span>
                </div>
              </td>

              {/* Email */}
              <td className="py-3.5 pr-4 font-bold" style={{ color: "#154535" }}>
                {app.email}
              </td>

              {/* Course */}
              <td className="py-3.5 pr-4 font-semibold" style={{ color: "#A0A5B0" }}>
                {app.course}
              </td>

              {/* Sample Score */}
              <td className="py-3.5 pr-4 font-bold" style={{ color: "#154535" }}>
                {app.sampleScore ?? "–"}
              </td>

              {/* Motivation Score */}
              <td className="py-3.5 pr-4 font-bold" style={{ color: "#154535" }}>
                {app.motivationScore ?? "–"}
              </td>

              {/* Status */}
              <td className="py-3.5 pr-4">
                <ApplicationStatusBadge status={app.status} />
              </td>

              {/* Date Applied */}
              <td className="py-3.5 pr-4 font-semibold" style={{ color: "#A0A5B0" }}>
                {app.dateApplied}
              </td>

              {/* Actions */}
              <td className="py-3.5 pr-4">
                <Link
                  href={`${baseDetailUrl}/${app.id}`}
                  className="inline-flex h-8 items-center rounded-full border px-4 text-xs font-bold transition-opacity hover:opacity-80"
                  style={{ borderColor: "#154535", color: "#154535" }}
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
