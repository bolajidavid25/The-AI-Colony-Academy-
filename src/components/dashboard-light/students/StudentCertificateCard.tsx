"use client";

import React from "react";
import { AwardCertificateIcon } from "./StudentDetailIcons";
import { StudentDetail } from "./studentDetailData";

interface StudentCertificateCardProps {
  certificateEligibility: StudentDetail["certificateEligibility"];
  onIssueCertificate?: () => void;
}

export default function StudentCertificateCard({
  certificateEligibility,
  onIssueCertificate,
}: StudentCertificateCardProps) {
  return (
    <div
      className="rounded-xl p-5 border-0 shadow-none flex flex-col justify-between"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <div>
        {/* ── Card Header ── */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold" style={{ color: "#154535" }}>
            Certificate Eligibility
          </h2>
          <button
            type="button"
            onClick={onIssueCertificate}
            className="text-xs font-bold transition-opacity hover:opacity-80 cursor-pointer border-0 bg-transparent hover:underline"
            style={{ color: "#FE4F08" }}
          >
            Issue Certificate
          </button>
        </div>

        {/* ── Criteria List ── */}
        <div className="space-y-2.5">
          {/* Module Completion */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "#20C997" }}
              />
              <span className="font-semibold" style={{ color: "#154535" }}>
                Module Completion : {certificateEligibility.moduleCompletion}
              </span>
            </div>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{ color: "#20C997", backgroundColor: "#8FF9D160" }}
            >
              {certificateEligibility.moduleStatus}
            </span>
          </div>

          {/* Attendance */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "#20C997" }}
              />
              <span className="font-semibold" style={{ color: "#154535" }}>
                Attendance : {certificateEligibility.attendance}
              </span>
            </div>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{ color: "#20C997", backgroundColor: "#8FF9D160" }}
            >
              {certificateEligibility.attendanceStatus}
            </span>
          </div>

          {/* Capstone Project */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full shrink-0"
                style={{ backgroundColor: "#20C997" }}
              />
              <span className="font-semibold" style={{ color: "#154535" }}>
                Capstone Project : {certificateEligibility.capstoneProject}
              </span>
            </div>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
              style={{ color: "#20C997", backgroundColor: "#8FF9D160" }}
            >
              {certificateEligibility.capstoneStatus}
            </span>
          </div>
        </div>

        {/* Eligibility Status */}
        <div className="mt-6 mb-4 text-[17px] font-bold" style={{ color: "#64748B" }}>
          Eligibility:{" "}
          <span className="font-bold" style={{ color: "#20C997" }}>
            {certificateEligibility.eligibility}
          </span>
        </div>
      </div>

      {/* ── Issue Certificate Main Action Button ── */}
      <button
        type="button"
        onClick={onIssueCertificate}
        className="w-full rounded-lg py-3 px-4 text-sm font-bold text-white transition-opacity hover:opacity-95 cursor-pointer shadow-none flex items-center justify-center gap-2 border-0"
        style={{ backgroundColor: "#20C997" }}
      >
        <AwardCertificateIcon className="h-5 w-5" color="#FFFFFF" />
        Issue Certificate
      </button>
    </div>
  );
}
