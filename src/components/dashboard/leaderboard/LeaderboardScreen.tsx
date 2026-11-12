"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ChevronDownIcon,
  CodeBadgeCircleIcon,
  FlameStreakIcon,
  MedalBadgeIcon,
  SpeedBadgeCircleIcon,
  StarXpIcon,
} from "./LeaderboardIcons";
import {
  LEADERBOARD_PERIODS,
  LEADERBOARD_ROWS,
  TOP_THREE_LEARNERS,
  type LeaderboardPeriod,
} from "./leaderboardScreenData";

export default function LeaderboardScreen() {
  const [period, setPeriod] = useState<LeaderboardPeriod>("This Month");
  const [perPage, setPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredRows = useMemo(
    () => LEADERBOARD_ROWS.filter((row) => row.period.includes(period)),
    [period]
  );

  const totalCount = filteredRows.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / perPage));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedRows = useMemo(() => {
    const start = (safePage - 1) * perPage;
    return filteredRows.slice(start, start + perPage);
  }, [filteredRows, safePage, perPage]);

  const startItem = totalCount === 0 ? 0 : (safePage - 1) * perPage + 1;
  const endItem = Math.min(safePage * perPage, totalCount);

  return (
    <div className="animate-in fade-in duration-300">
      {/* Page Header */}
      <div className="mb-6 flex flex-col gap-4 border-b border-[#8FF9D1] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-[28px] font-bold tracking-[-0.5px] text-[#154535]">
          Leader Board
        </h1>

        <div className="relative w-fit">
          <select
            aria-label="Filter leaderboard by timeframe"
            value={period}
            onChange={(e) => {
              setPeriod(e.target.value as LeaderboardPeriod);
              setCurrentPage(1);
            }}
            className="h-9 appearance-none rounded-full border border-[#F1F5F9] bg-[#F9F9F9] py-1.5 pr-9 pl-4 text-xs font-medium text-[#A0A5B0] outline-none transition-colors focus:border-[#31CA92] cursor-pointer"
          >
            {LEADERBOARD_PERIODS.map((opt) => (
              <option key={opt} value={opt} className="text-[#154535]">
                {opt}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
            <ChevronDownIcon className="h-3 w-3" color="#A0A5B0" />
          </span>
        </div>
      </div>

      {/* Hero Gradient Banner */}
      <section
        className="rounded-2xl px-6 py-6 text-white sm:px-8"
        style={{
          background:
            "linear-gradient(90deg, #154535 0%, #196B4F 55%, #27B37F 100%)",
        }}
      >
        <h2 className="text-xl font-bold leading-snug sm:text-[22px]">
          You&apos;re Closer than you think!
        </h2>
        <p className="mt-2 max-w-[390px] text-[13.11px] leading-relaxed text-white/90">
          Just 9 points from breaking into the Top 10!
          <br />
          Complete one more course or maintain your streak to boost your rank
        </p>
        <Link
          href="/dashboard/courses"
          className="mt-5 inline-flex items-center justify-center rounded-full bg-[#31CA92] px-6 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
        >
          Continue Learning
        </Link>
      </section>

      {/* Main Grid: Left (Top 3 + Table) | Right (Your Stats) */}
      <div className="mt-6 grid grid-cols-1 items-start gap-5 xl:grid-cols-[1fr_255px]">
        {/* Left Column */}
        <div className="min-w-0 space-y-5">
          {/* Top 3 Learner Cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {TOP_THREE_LEARNERS.map((learner) => (
              <article
                key={learner.id}
                className="rounded-xl bg-[#F9F9F9] p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      src={learner.avatar}
                      alt={learner.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <span
                      className="absolute -right-0.5 -bottom-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white ring-2 ring-white"
                      style={{ backgroundColor: learner.rankColor }}
                    >
                      {learner.rank}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#154535]">
                    <StarXpIcon className="h-5 w-5" />
                    {learner.xp}
                  </span>
                </div>

                <h3 className="mt-3 text-[17px] font-bold text-[#154535]">
                  {learner.name}
                </h3>

                <p className="mt-1 flex flex-wrap items-center gap-1 text-[10px] font-bold text-[#154535]">
                  <span>{learner.coursesCompleted}</span>
                  <span>•</span>
                  <FlameStreakIcon className="h-3 w-3 shrink-0" />
                  <span>{learner.streakText}</span>
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <BadgePill label="Code Streak" variant="code" />
                  <BadgePill label="Fast Learner" variant="fast" />
                  <span
                    className="inline-flex items-center rounded-[6px] px-2 py-1 text-[10px] font-semibold"
                    style={{ backgroundColor: "#F0F0F0", color: "#A0A5B0" }}
                  >
                    +{learner.extraBadgeCount}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Leaderboard Table Card */}
          <div className="rounded-xl bg-[#F9F9F9] p-4">
            <div className="overflow-x-auto">
              <table
                className="w-full min-w-[640px] text-xs font-semibold"
                style={{ borderCollapse: "separate", borderSpacing: 0 }}
              >
                <thead>
                  <tr className="bg-white">
                    <th className="rounded-l-lg px-4 py-3 text-left font-bold text-[#154535]">
                      Rank
                    </th>
                    <th className="pr-4 py-3 text-left font-bold text-[#154535]">
                      User
                    </th>
                    <th className="pr-4 py-3 text-left font-bold text-[#154535]">
                      Lessons Completed
                    </th>
                    <th className="pr-4 py-3 text-left font-bold text-[#154535]">
                      Streak
                    </th>
                    <th className="pr-4 py-3 text-left font-bold text-[#154535]">
                      Badge
                    </th>
                    <th className="rounded-r-lg pr-4 py-3 text-left font-bold text-[#154535]">
                      XP
                    </th>
                  </tr>
                  <tr
                    aria-hidden="true"
                    style={{ height: "10px", backgroundColor: "#F9F9F9" }}
                  >
                    <td colSpan={6} />
                  </tr>
                </thead>

                <tbody>
                  {paginatedRows.map((row) => (
                    <tr
                      key={row.id}
                      className="transition-colors hover:bg-white/60"
                    >
                      <td className="border-b border-[#E7EBE9] px-4 py-3.5 font-bold text-[#154535]">
                        {row.rank}
                      </td>
                      <td className="border-b border-[#E7EBE9] py-3.5 pr-4">
                        <div className="flex items-center gap-2.5">
                          <Image
                            src={row.avatar}
                            alt={row.user}
                            width={24}
                            height={24}
                            className="h-6 w-6 rounded-full object-cover"
                          />
                          <span className="font-bold text-[#154535]">
                            {row.user}
                          </span>
                        </div>
                      </td>
                      <td className="border-b border-[#E7EBE9] py-3.5 pr-4 font-medium text-[#A0A5B0]">
                        {row.lessonsCompleted}
                      </td>
                      <td className="border-b border-[#E7EBE9] py-3.5 pr-4 font-medium text-[#626262]">
                        <span className="inline-flex items-center gap-1">
                          <FlameStreakIcon className="h-3.5 w-3.5 shrink-0" />
                          <span>{row.streak}</span>
                        </span>
                      </td>
                      <td className="border-b border-[#E7EBE9] py-3.5 pr-4">
                        <div className="flex items-center gap-1.5">
                          <BadgePill label="Code Streak" variant="code" />
                          <BadgePill label="Fast Learner" variant="fast" />
                        </div>
                      </td>
                      <td className="border-b border-[#E7EBE9] py-3.5 pr-4 font-semibold text-[#626262]">
                        <span className="inline-flex items-center gap-1.5">
                          <StarXpIcon className="h-4 w-4 shrink-0" />
                          <span>{row.xp}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Pagination */}
            <div className="mt-4 flex flex-wrap items-center gap-5 px-2 pt-1 text-xs font-semibold text-[#626262]">
              <div className="flex items-center gap-2">
                <span>Result per page</span>
                <div className="relative">
                  <select
                    aria-label="Results per page"
                    value={perPage}
                    onChange={(e) => {
                      setPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="h-8 appearance-none rounded-lg border-0 bg-white pr-6 pl-2.5 text-xs font-bold text-[#154535] shadow-2xs outline-none cursor-pointer"
                  >
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={12}>12</option>
                  </select>
                  <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2">
                    <ChevronDownIcon className="h-3 w-3" color="#626262" />
                  </span>
                </div>
              </div>

              <span>
                {startItem}-{endItem} of {totalCount}
              </span>

              <div className="flex items-center gap-1.5">
                <PageButton
                  label="«"
                  ariaLabel="First page"
                  disabled={safePage === 1 || totalCount === 0}
                  onClick={() => setCurrentPage(1)}
                />
                <PageButton
                  label="‹"
                  ariaLabel="Previous page"
                  disabled={safePage === 1 || totalCount === 0}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                />
                <PageButton
                  label="›"
                  ariaLabel="Next page"
                  disabled={safePage >= totalPages || totalCount === 0}
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                />
                <PageButton
                  label="»"
                  ariaLabel="Last page"
                  disabled={safePage >= totalPages || totalCount === 0}
                  onClick={() => setCurrentPage(totalPages)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Your Stats */}
        <aside className="rounded-xl bg-[#F9F9F9] p-4">
          <h2 className="mb-3 text-sm font-bold text-[#154535]">Your Stats</h2>

          <div className="space-y-2.5">
            {/* Rank & Total XP */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl bg-white p-3">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[11px] font-medium text-[#A0A5B0]">
                    Rank
                  </span>
                  <span className="text-[9px] font-bold text-[#FE4F08]">
                    Top 12%
                  </span>
                </div>
                <p className="mt-2 text-[22px] font-bold leading-none text-[#154535]">
                  #11
                </p>
              </div>

              <div className="rounded-xl bg-white p-3">
                <span className="text-[11px] font-medium text-[#A0A5B0]">
                  Total XP
                </span>
                <p className="mt-2 text-[22px] font-bold leading-none text-[#154535]">
                  2,000
                </p>
              </div>
            </div>

            {/* Total Badges */}
            <div className="relative flex min-h-[96px] items-center justify-between overflow-hidden rounded-xl bg-white p-3.5">
              <div className="relative z-10">
                <p className="text-[11px] font-medium text-[#A0A5B0]">
                  Total Badges
                </p>
                <p className="mt-2 text-[24px] font-bold leading-none text-[#154535]">
                  03
                </p>
              </div>

              {/* Concentric floating badge cluster */}
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-[132px]"
                aria-hidden="true"
              >
                {/* First code icon */}
                <span
                  className="absolute flex h-[42px] w-[42px] items-center justify-center rounded-full"
                  style={{
                    top: "-6px",
                    right: "52px",
                    backgroundColor: "#31CA9275",
                    transform: "rotate(0deg)",
                  }}
                >
                  <CodeBadgeCircleIcon className="h-[25px] w-[25px]" bgColor="#31CA92" />
                </span>

                {/* Second code icon */}
                <span
                  className="absolute flex h-[44px] w-[44px] items-center justify-center rounded-full"
                  style={{
                    top: "48px",
                    right: "62px",
                    backgroundColor: "#9E90F25C",
                    transform: "rotate(6.99deg)",
                  }}
                >
                  <CodeBadgeCircleIcon className="h-[26px] w-[26px]" bgColor="#9E90F2" />
                </span>

                {/* Third speed icon */}
                <span
                  className="absolute flex h-[44px] w-[44px] items-center justify-center rounded-full"
                  style={{
                    top: "20px",
                    right: "6px",
                    backgroundColor: "#FF9E003B",
                    transform: "rotate(-7.49deg)",
                  }}
                >
                  <SpeedBadgeCircleIcon className="h-[26px] w-[26px]" bgColor="#FF9E00" />
                </span>
              </div>
            </div>

            {/* Next Badge */}
            <div className="rounded-xl bg-white p-3.5">
              <p className="text-[11px] font-medium text-[#A0A5B0]">
                Next Badge
              </p>

              <div className="mt-1.5 flex items-center gap-1.5">
                <MedalBadgeIcon
                  className="h-4 w-4 shrink-0"
                  color="#154535"
                />
                <span className="text-[13px] font-bold text-[#154535]">
                  Most Consistent
                </span>
              </div>

              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#E2E8F0]">
                <div className="h-full w-[65%] rounded-full bg-[#31CA92]" />
              </div>

              <p className="mt-2 text-[10px] leading-snug text-[#A0A5B0]">
                Complete 3 more live sessions to get badge
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function BadgePill({
  label,
  variant,
}: {
  label: string;
  variant: "code" | "fast";
}) {
  if (variant === "code") {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-[6px] px-2 py-1 text-[10px] font-semibold"
        style={{
          backgroundColor: "#F0F0F0",
          color: "#A0A5B0",
        }}
      >
        <CodeBadgeCircleIcon className="h-3.5 w-3.5 shrink-0" />
        <span>{label}</span>
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-[6px] px-2 py-1 text-[10px] font-semibold"
      style={{
        backgroundColor: "#F0F0F0",
        color: "#A0A5B0",
      }}
    >
      <SpeedBadgeCircleIcon className="h-3.5 w-3.5 shrink-0" />
      <span>{label}</span>
    </span>
  );
}

function PageButton({
  label,
  ariaLabel,
  disabled,
  onClick,
}: {
  label: string;
  ariaLabel: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border-0 bg-white text-sm font-bold text-[#626262] shadow-2xs transition-colors hover:bg-[#F1F5F9] disabled:cursor-not-allowed disabled:opacity-40"
    >
      {label}
    </button>
  );
}
