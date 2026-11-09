"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { StudentRecord } from "./studentsData";
import deleteIcon from "@/assets/icons/student-delete-icon.png";

interface DeleteStudentModalProps {
  isOpen: boolean;
  student: StudentRecord | null;
  onClose: () => void;
  onConfirm: (studentId: string) => void;
}

export default function DeleteStudentModal({
  isOpen,
  student,
  onClose,
  onConfirm,
}: DeleteStudentModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !student) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        ref={modalRef}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl transition-all"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100">
            <Image
              src={deleteIcon}
              alt="Delete"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#154535]">Remove Student</h3>
            <p className="text-sm text-[#94A3B8]">
              This action cannot be undone.
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[#475569]">
          Are you sure you want to remove{" "}
          <strong className="text-[#154535]">{student.name}</strong> (
          {student.email}) from{" "}
          <strong className="text-[#154535]">{student.cohort}</strong>?
        </p>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-[#E2E8F0] px-4 py-2 text-sm font-semibold text-[#64748B] hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              onConfirm(student.id);
              onClose();
            }}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition-colors cursor-pointer"
          >
            Delete Student
          </button>
        </div>
      </div>
    </div>
  );
}
