"use client";

import { useState } from "react";
import { ExternalLinkIcon } from "./ApplicationsIcons";

function ScoreInput({ label }: { label: string }) {
  const [score, setScore] = useState("");
  return (
    <div className="mb-3 flex items-center justify-between">
      <span className="text-base font-semibold text-[#0F172A]">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-[#00B98A]">Enter Score (1.0-5.0)</span>
        <div className="flex items-center">
          <input
            type="number"
            min={1}
            max={5}
            step={0.1}
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="–"
            className="w-12 rounded-l border border-r-0 border-[#E2E8F0] bg-white py-1 pr-1 pl-2 text-right text-sm outline-none focus:border-[#00B98A]"
          />
          <span className="rounded-r border border-l-0 border-[#E2E8F0] bg-[#F8FAFC] px-2 py-1 text-sm text-[#64748B]">
            /5.0
          </span>
        </div>
      </div>
    </div>
  );
}

function LinkRow({ label, url, href = "#" }: { label: string; url: string; href?: string }) {
  return (
    <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-3 last:border-0 last:pb-0">
      <div>
        <p className="text-xs text-[#94A3B8]">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-[#0F172A]">{url}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#64748B] hover:text-[#0F172A] transition-colors"
      >
        <ExternalLinkIcon />
      </a>
    </div>
  );
}

export default function MotivationAndWorkSamples() {
  return (
    <div className="flex flex-col gap-5">
      {/* Motivation Statement */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
        <ScoreInput label="Motivation Statement" />
        <p className="text-sm leading-relaxed text-[#475569]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#475569]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>

      {/* Work Sample / Links */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
        <ScoreInput label="Work Sample/Links" />
        <div className="flex flex-col gap-4">
          <LinkRow label="Portfolio Website" url="https://jonathan.cooper.dev" />
          <LinkRow label="Github Profile" url="https://jonathan.cooper.dev" />
          <LinkRow label="Case Study Document" url="Drive Link" />
        </div>
      </div>
    </div>
  );
}
