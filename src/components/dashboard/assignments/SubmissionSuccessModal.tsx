"use client";

import { useEffect } from "react";

interface SubmissionSuccessModalProps {
  isOpen: boolean;
  assignmentTitle: string;
  onClose: () => void;
}

export default function SubmissionSuccessModal({
  isOpen,
  assignmentTitle,
  onClose,
}: SubmissionSuccessModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[10060] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.42)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="submission-success-title"
    >
      <div className="w-full max-w-[372px] rounded-[24px] bg-white px-6 py-8 text-center shadow-[0_18px_50px_rgba(21,69,53,0.14)] animate-in fade-in zoom-in-95 duration-150">
        <div className="flex flex-col items-center">
          <div
            className="mb-6 flex h-[108px] w-[108px] items-center justify-center rounded-full"
            style={{ backgroundColor: "#E1F8EC" }}
          >
            <svg
              viewBox="0 0 64 64"
              fill="none"
              className="h-[72px] w-[72px]"
              aria-hidden="true"
            >
              <circle cx="32" cy="32" r="22" stroke="#31CA92" strokeWidth="2.8" />
              <path
                d="M22.5 32.8L28.8 39L41.5 25.5"
                stroke="#31CA92"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h3
            id="submission-success-title"
            className="mb-2 text-lg font-bold text-[#154535]"
          >
            Assignment Submitted
          </h3>

          <p className="mb-8 max-w-[280px] text-[13px] font-medium leading-[1.55] text-[#626262]">
            Your submission for{" "}
            <span className="font-bold text-[#154535]">{assignmentTitle}</span> has
            been received and is awaiting instructor grading.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="min-w-[112px] cursor-pointer rounded-full border-0 px-8 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#E4E7EC", color: "#667085" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
