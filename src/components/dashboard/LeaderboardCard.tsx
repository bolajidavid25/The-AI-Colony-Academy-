import Image from "next/image";
import Link from "next/link";
import { CrownIcon } from "./DashboardIcons";
import { leaderboardEntries } from "./leaderboardData";

export default function LeaderboardCard() {
  const preview = leaderboardEntries.slice(0, 5);

  return (
    <article className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#0F172A]">Leaderboard</h2>
        <Link
          href="/dashboard/leaderboard"
          className="text-xs font-semibold text-[#00B98A]"
        >
          View All
        </Link>
      </div>

      <ul className="space-y-2">
        {preview.map((entry) => (
          <li
            key={`${entry.rank}-${entry.name}`}
            className={`flex items-center gap-3 rounded-xl px-2 py-2 ${
              entry.isYou ? "bg-[#F0FDF4]" : ""
            }`}
          >
            <span className="relative w-5 text-center text-xs font-semibold text-[#64748B]">
              {entry.rank === 1 && (
                <span className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <CrownIcon />
                </span>
              )}
              {entry.rank}
            </span>
            <Image
              src={entry.avatar}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[#0F172A]">
                {entry.name}
              </p>
              <p className="text-[11px] text-[#94A3B8]">{entry.streak}</p>
            </div>
            <span className="text-xs font-semibold text-[#0F172A]">{entry.xp}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
