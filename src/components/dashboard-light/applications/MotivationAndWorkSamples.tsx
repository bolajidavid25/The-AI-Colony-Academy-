"use client";

import { useState } from "react";
import { ExternalLinkIcon } from "./ApplicationsIcons";

function ScoreInput({ label }: { label: string }) {
  const [score, setScore] = useState("");
  return (
    <div className="mb-4 flex items-center justify-between">
      <span className="text-base font-bold" style={{ color: "#154535" }}>{label}</span>
      <div className="flex items-center gap-1.5">
        {/* Select dropdown with #FE4F08 color, white bg, border-0, shadow-none */}
        <select
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="rounded-lg border-0 bg-white px-3 py-1.5 text-xs font-bold outline-none cursor-pointer appearance-auto shadow-none"
          style={{ color: "#FE4F08" }}
        >
          <option value="" disabled>Enter Score (1.0-5.0)</option>
          <option value="1.0">1.0</option>
          <option value="1.5">1.5</option>
          <option value="2.0">2.0</option>
          <option value="2.5">2.5</option>
          <option value="3.0">3.0</option>
          <option value="3.5">3.5</option>
          <option value="4.0">4.0</option>
          <option value="4.5">4.5</option>
          <option value="5.0">5.0</option>
        </select>
        {/* /5.0 label outside the select */}
        <span className="text-sm font-bold" style={{ color: "#154535" }}>/5.0</span>
      </div>
    </div>
  );
}

function LinkRow({ label, url, href = "#" }: { label: string; url: string; href?: string }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <div>
        <p className="text-xs font-semibold" style={{ color: "#A0A5B0" }}>{label}</p>
        <p className="mt-0.5 text-sm font-bold" style={{ color: "#154535" }}>{url}</p>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:opacity-70"
        style={{ color: "#141B34" }}
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
      <div className="rounded-2xl p-6 border-0 shadow-none" style={{ backgroundColor: "#F9F9F9" }}>
        <ScoreInput label="Motivation Statement" />
        <p className="text-sm font-medium leading-relaxed" style={{ color: "#154535" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>
        <p className="mt-3 text-sm font-medium leading-relaxed" style={{ color: "#154535" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>

      {/* Work Sample / Links */}
      <div className="rounded-2xl p-6 border-0 shadow-none" style={{ backgroundColor: "#F9F9F9" }}>
        <ScoreInput label="Work Sample/Links" />
        <div className="flex flex-col gap-1">
          <LinkRow label="Portfolio Website" url="https://jonathan.cooper.dev" />
          <LinkRow label="Github Profile" url="https://jonathan.cooper.dev" />
          <LinkRow label="Case Study Document" url="Drive Link" />
        </div>
      </div>
    </div>
  );
}
