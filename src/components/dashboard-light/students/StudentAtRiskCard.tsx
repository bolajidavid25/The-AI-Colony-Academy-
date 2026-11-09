"use client";

import React from "react";
import { StudentDetail } from "./studentDetailData";

interface StudentAtRiskCardProps {
  atRisk: StudentDetail["atRisk"];
}

export default function StudentAtRiskCard({ atRisk }: StudentAtRiskCardProps) {
  // SVG Donut dimensions matching design: flat/butt edges, no rounded caps
  const size = 132;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // Orange segment starts at 3 o'clock (0°) and spans ~14.5% clockwise (to ~52°).
  // Green segment covers the remaining ~85.5% clockwise back to 3 o'clock.
  const orangeFraction = 0.145;
  const orangeStroke = circumference * orangeFraction;
  const greenStroke = circumference * (1 - orangeFraction);

  return (
    <div
      className="rounded-xl p-5 border-0 shadow-none flex flex-col justify-between"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <h2 className="mb-4 text-base font-bold" style={{ color: "#154535" }}>
        At-risk View
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* ── Donut Chart (Flat / Butt edges with seamless junction) ── */}
        <div className="relative shrink-0 flex items-center justify-center">
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
          >
            {/* Orange segment in bottom-right: starts at 3 o'clock and extends clockwise */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="#FE9A00"
              strokeWidth={strokeWidth}
              strokeDasharray={`${orangeStroke} ${circumference}`}
              strokeDashoffset={0}
              strokeLinecap="butt"
            />
            {/* Primary Green segment: continues seamlessly clockwise back to 3 o'clock */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="#20C997"
              strokeWidth={strokeWidth}
              strokeDasharray={`${greenStroke} ${circumference}`}
              strokeDashoffset={-orangeStroke}
              strokeLinecap="butt"
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none pointer-events-none">
            <span
              className="text-[20px] font-black leading-tight tracking-tight"
              style={{ color: "#154535" }}
            >
              Low
            </span>
            <span
              className="text-[20px] font-black leading-tight tracking-tight"
              style={{ color: "#154535" }}
            >
              Risk
            </span>
          </div>
        </div>

        {/* ── Metrics List ── */}
        <div className="flex-1 w-full space-y-2.5">
          {/* Attendance */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "#20C997" }}
              />
              <span className="font-semibold" style={{ color: "#154535" }}>
                Attendance : {atRisk.attendance}
              </span>
            </div>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{ color: "#20C997", backgroundColor: "#8FF9D160" }}
            >
              {atRisk.attendanceStatus}
            </span>
          </div>

          {/* Submission */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "#20C997" }}
              />
              <span className="font-semibold" style={{ color: "#154535" }}>
                Submission : {atRisk.submission}
              </span>
            </div>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{ color: "#20C997", backgroundColor: "#8FF9D160" }}
            >
              {atRisk.submissionStatus}
            </span>
          </div>

          {/* Activity points */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "#20C997" }}
              />
              <span className="font-semibold" style={{ color: "#154535" }}>
                Activity points : {atRisk.activityPoints}
              </span>
            </div>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{ color: "#20C997", backgroundColor: "#8FF9D160" }}
            >
              {atRisk.activityPointsStatus}
            </span>
          </div>

          {/* Risk Level */}
          <div className="pt-1.5 text-xs font-semibold" style={{ color: "#64748B" }}>
            Risk level :{" "}
            <span className="font-bold" style={{ color: "#20C997" }}>
              {atRisk.riskLevel}
            </span>
          </div>

          {/* Divider */}
          <div className="my-2 border-t border-[#E2E8F0] w-full" />

          {/* Criteria Formula / Note */}
          <p
            className="text-[11px] leading-relaxed"
            style={{ color: "#94A3B8" }}
          >
            {atRisk.criteriaNote}
          </p>
        </div>
      </div>
    </div>
  );
}
