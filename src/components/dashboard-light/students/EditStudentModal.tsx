"use client";

import React, { useState, useEffect, useRef } from "react";
import { StudentRecord, StudentStatus, COHORT_OPTIONS } from "./studentsData";

interface EditStudentModalProps {
  isOpen: boolean;
  student: StudentRecord | null;
  onClose: () => void;
  onSave: (updated: StudentRecord) => void;
}

export default function EditStudentModal({
  isOpen,
  student,
  onClose,
  onSave,
}: EditStudentModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cohort, setCohort] = useState("");
  const [attendance, setAttendance] = useState("40%");
  const [submission, setSubmission] = useState("60%");
  const [activityPoint, setActivityPoint] = useState(320);
  const [status, setStatus] = useState<StudentStatus>("Active");

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (student) {
      setName(student.name);
      setEmail(student.email);
      setCohort(student.cohort);
      setAttendance(student.attendance);
      setSubmission(student.submission);
      setActivityPoint(student.activityPoint);
      setStatus(student.status);
    }
  }, [student]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...student,
      name,
      email,
      cohort,
      attendance,
      attendancePercent: parseInt(attendance) || 40,
      submission,
      submissionPercent: parseInt(submission) || 60,
      activityPoint: Number(activityPoint) || 320,
      status,
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        ref={modalRef}
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl transition-all"
      >
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4">
          <div>
            <h3 className="text-lg font-bold text-[#154535]">Edit Student</h3>
            <p className="text-xs text-[#94A3B8]">
              Update enrolled student details and performance status
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#94A3B8] hover:text-[#0F172A] text-lg font-semibold cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#154535] mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2 text-sm text-[#0F172A] outline-none focus:border-[#31CA92]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#154535] mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2 text-sm text-[#0F172A] outline-none focus:border-[#31CA92]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#154535] mb-1">
              Cohort
            </label>
            <select
              value={cohort}
              onChange={(e) => setCohort(e.target.value)}
              className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2 text-sm text-[#0F172A] outline-none focus:border-[#31CA92]"
            >
              {COHORT_OPTIONS.filter((c) => c !== "All Cohorts").map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#154535] mb-1">
                Attendance
              </label>
              <input
                type="text"
                value={attendance}
                onChange={(e) => setAttendance(e.target.value)}
                placeholder="40%"
                className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2 text-sm text-[#0F172A] outline-none focus:border-[#31CA92]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#154535] mb-1">
                Submission
              </label>
              <input
                type="text"
                value={submission}
                onChange={(e) => setSubmission(e.target.value)}
                placeholder="60%"
                className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2 text-sm text-[#0F172A] outline-none focus:border-[#31CA92]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#154535] mb-1">
                Activity Point
              </label>
              <input
                type="number"
                value={activityPoint}
                onChange={(e) => setActivityPoint(Number(e.target.value))}
                placeholder="320"
                className="w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2 text-sm text-[#0F172A] outline-none focus:border-[#31CA92]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#154535] mb-1.5">
              Status
            </label>
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Active"
                  checked={status === "Active"}
                  onChange={() => setStatus("Active")}
                  className="text-[#31CA92] focus:ring-[#31CA92]"
                />
                <span className="text-sm font-medium text-[#154535]">Active</span>
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="Inactive"
                  checked={status === "Inactive"}
                  onChange={() => setStatus("Inactive")}
                  className="text-[#FE4F08] focus:ring-[#FE4F08]"
                />
                <span className="text-sm font-medium text-[#154535]">Inactive</span>
              </label>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-3 pt-3 border-t border-[#F1F5F9]">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-[#E2E8F0] px-4 py-2 text-sm font-semibold text-[#64748B] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-[#154535] transition-all hover:opacity-90 cursor-pointer shadow-xs"
              style={{ backgroundColor: "#8FF9D1" }}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
