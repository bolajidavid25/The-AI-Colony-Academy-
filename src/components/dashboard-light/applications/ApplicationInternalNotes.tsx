"use client";

import { useState } from "react";

interface ApplicationInternalNotesProps {
  onAccept: () => void;
}

export default function ApplicationInternalNotes({ onAccept }: ApplicationInternalNotesProps) {
  const [notes, setNotes] = useState("");

  return (
    <div className="flex flex-col gap-5">
      {/* Internal Notes Box */}
      <div className="rounded-2xl p-6 border-0 shadow-none" style={{ backgroundColor: "#F9F9F9" }}>
        <h2 className="mb-3 font-bold text-base" style={{ color: "#154535" }}>Internal Notes</h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={8}
          className="w-full resize-none rounded-lg border-0 bg-white p-3 text-sm font-medium outline-none transition-colors shadow-none"
          style={{ color: "#154535" }}
        />
      </div>

      {/* Accept Application button */}
      <button
        type="button"
        onClick={onAccept}
        className="w-full rounded-xl py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity shadow-none cursor-pointer border-0"
        style={{ backgroundColor: "#31CA92" }}
      >
        Accept Application
      </button>
    </div>
  );
}
