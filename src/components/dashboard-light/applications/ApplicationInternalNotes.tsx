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
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
        <h2 className="mb-3 font-semibold text-[#0F172A]">Internal Notes</h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add internal notes about this applicant..."
          rows={8}
          className="w-full resize-none rounded-lg border border-[#E2E8F0] p-3 text-sm text-[#0F172A] outline-none placeholder:text-[#94A3B8] focus:border-[#00B98A] transition-colors"
        />
        <button
          type="button"
          onClick={() => alert("Notes saved successfully!")}
          className="mt-2 w-full rounded-lg border border-[#E2E8F0] bg-white py-2 text-sm font-medium text-[#64748B] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
        >
          Save Notes
        </button>
      </div>

      {/* Accept Application button */}
      <button
        type="button"
        onClick={onAccept}
        className="w-full rounded-xl bg-[#00B98A] py-3 text-sm font-semibold text-white hover:bg-[#00A07A] transition-colors shadow-sm cursor-pointer"
      >
        Accept Application
      </button>
    </div>
  );
}
