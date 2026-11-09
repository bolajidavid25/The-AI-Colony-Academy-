"use client";

import React from "react";
import { ExternalLinkIcon } from "./StudentDetailIcons";
import { StudentDetail } from "./studentDetailData";

interface StudentWorkSamplesCardProps {
  workSamples: StudentDetail["workSamples"];
}

function LinkItem({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <div>
        <p className="text-xs font-semibold" style={{ color: "#A0A5B0" }}>
          {label}
        </p>
        <p className="mt-0.5 text-sm font-bold" style={{ color: "#154535" }}>
          {value}
        </p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-70 p-1 cursor-pointer"
        style={{ color: "#141B34" }}
      >
        <ExternalLinkIcon className="h-4 w-4" color="#141B34" />
      </a>
    </div>
  );
}

export default function StudentWorkSamplesCard({ workSamples }: StudentWorkSamplesCardProps) {
  return (
    <div className="mt-5 rounded-xl p-5 border-0 shadow-none" style={{ backgroundColor: "#F9F9F9" }}>
      <h2 className="mb-3 text-base font-bold" style={{ color: "#154535" }}>
        Work Sample/Links
      </h2>

      <div className="flex flex-col divide-y divide-gray-50/50">
        <LinkItem
          label="Portfolio Website"
          value={workSamples.portfolioUrl}
          href={workSamples.portfolioUrl}
        />
        <LinkItem
          label="Github Profile"
          value={workSamples.githubUrl}
          href={workSamples.githubUrl}
        />
        <LinkItem
          label="CASE STUDY DOCUMENT"
          value={workSamples.caseStudyTitle}
          href={workSamples.caseStudyUrl}
        />
      </div>
    </div>
  );
}
