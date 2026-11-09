"use client";

import React from "react";
import Image from "next/image";
import defaultAvatar from "@/assets/hero-images/Hero2.jpg";
import { UserIcon, MailIcon, PhoneIcon } from "./StudentDetailIcons";
import { StudentDetail } from "./studentDetailData";

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
  isTag?: boolean;
}

function InfoRow({ label, value, isTag }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <span className="text-sm font-semibold" style={{ color: "#154535" }}>
        {label}
      </span>
      {isTag ? (
        value
      ) : (
        <span className="text-sm font-medium text-right" style={{ color: "#A0A5B0" }}>
          {value}
        </span>
      )}
    </div>
  );
}

interface StudentApplicantInfoCardProps {
  student: StudentDetail;
}

export default function StudentApplicantInfoCard({ student }: StudentApplicantInfoCardProps) {
  return (
    <div className="rounded-xl p-5 border-0 shadow-none" style={{ backgroundColor: "#F9F9F9" }}>
      {/* ── Card Header ── */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold" style={{ color: "#154535" }}>
          Applicant info
        </h2>
        <span className="text-xs font-bold" style={{ color: "#154535" }}>
          {student.courseId}
        </span>
      </div>

      {/* ── Profile Header Block ── */}
      <div className="mb-5 pb-4 border-b border-gray-100 flex items-start gap-3.5">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
          <Image
            src={defaultAvatar}
            alt={student.name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-base font-bold truncate" style={{ color: "#154535" }}>
              {student.name}
            </span>
            <span
              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold"
              style={{
                color: student.status === "Active" ? "#31CA92" : "#FE4F08",
                backgroundColor: student.status === "Active" ? "#8FF9D145" : "#FE4F0845",
              }}
            >
              {student.status}
            </span>
          </div>

          <div className="mt-1 flex items-center gap-1.5 text-xs" style={{ color: "#A0A5B0" }}>
            <UserIcon className="h-3.5 w-3.5 shrink-0" color="#A0A5B0" />
            <span className="truncate">{student.title}</span>
          </div>

          <div className="mt-1.5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs" style={{ color: "#A0A5B0" }}>
            <div className="flex items-center gap-1.5 truncate">
              <MailIcon className="h-3.5 w-3.5 shrink-0" color="#A0A5B0" />
              <span className="truncate">{student.email}</span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <PhoneIcon className="h-3.5 w-3.5 shrink-0" color="#A0A5B0" />
              <span>{student.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Key-Value Attributes ── */}
      <div className="flex flex-col divide-y divide-gray-50/50">
        <InfoRow label="Gender" value={student.gender} />
        <InfoRow label="Country" value={student.country} />
        <InfoRow label="State" value={student.state} />
        <InfoRow label="Employment Status" value={student.employmentStatus} />
        <InfoRow label="Educational Level" value={student.educationalLevel} />
        <InfoRow
          label="Has Prior tech experience"
          isTag
          value={
            <span
              className="inline-flex items-center rounded-full px-3 py-0.5 text-xs font-bold"
              style={{ color: "#31CA92", backgroundColor: "#8FF9D145" }}
            >
              {student.hasPriorTechExp ? "Yes" : "No"}
            </span>
          }
        />
        <InfoRow
          label="Agreed to terms"
          isTag
          value={
            <span
              className="inline-flex items-center rounded-full px-3 py-0.5 text-xs font-bold"
              style={{ color: "#31CA92", backgroundColor: "#8FF9D145" }}
            >
              {student.agreedToTerms ? "Yes" : "No"}
            </span>
          }
        />
        <InfoRow label="Course ID" value={student.courseId} />
        <InfoRow label="Date Applied" value={student.dateApplied} />
      </div>
    </div>
  );
}
