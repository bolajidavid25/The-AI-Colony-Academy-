"use client";

import Image from "next/image";
import Link from "next/link";
import student1 from "../../assets/hero-images/Hero3.jpg";
import student2 from "../../assets/hero-images/Hero4.jpg";
import student3 from "../../assets/hero-images/Hero5.jpg";

type StudentRecord = {
  name: string;
  avatar: any;
  cohort: string;
  attendance: number;
  attendanceStatus: "good" | "warning" | "danger";
  submission: number;
  submissionStatus: "good" | "warning" | "danger";
};

const studentsData: StudentRecord[] = [
  {
    name: "John Doe",
    avatar: student1,
    cohort: "AI Engineering Cohort 1",
    attendance: 48,
    attendanceStatus: "danger",
    submission: 60,
    submissionStatus: "good",
  },
  {
    name: "John Doe",
    avatar: student2,
    cohort: "AI Engineering Cohort 1",
    attendance: 48,
    attendanceStatus: "warning",
    submission: 60,
    submissionStatus: "good",
  },
  {
    name: "John Doe",
    avatar: student3,
    cohort: "AI Engineering Cohort 1",
    attendance: 48,
    attendanceStatus: "danger",
    submission: 60,
    submissionStatus: "good",
  },
  {
    name: "John Doe",
    avatar: student3,
    cohort: "AI Engineering Cohort 1",
    attendance: 48,
    attendanceStatus: "danger",
    submission: 60,
    submissionStatus: "good",
  },
  {
    name: "John Doe",
    avatar: student3,
    cohort: "AI Engineering Cohort 1",
    attendance: 48,
    attendanceStatus: "danger",
    submission: 60,
    submissionStatus: "good",
  },
];

export default function AtRiskStudents() {
  return (
    <article className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 h-full">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#0F172A]">At Risk Students</h3>
        <Link
          href="/dashboard-light/students"
          className="text-xs font-semibold text-[#FF5D2A] hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-auto max-h-[300px] scroll-smooth">
        <table className="w-full min-w-[500px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[#F1F5F9] pb-3 text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
              <th className="pb-3 pr-4 font-semibold">Student</th>
              <th className="pb-3 pr-4 font-semibold">Cohort</th>
              <th className="pb-3 pr-4 font-semibold text-center">Attendance</th>
              <th className="pb-3 font-semibold text-center">Submission</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#F1F5F9]">
            {studentsData.map((student, index) => (
              <tr key={index} className="group hover:bg-[#F8FAFC]/50 transition-colors">
                {/* Student Info */}
                <td className="py-3.5 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 overflow-hidden rounded-full border border-[#E2E8F0] bg-slate-50 shrink-0">
                      <Image
                        src={student.avatar}
                        alt={student.name}
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="font-bold text-[#0F172A]">{student.name}</span>
                  </div>
                </td>

                {/* Cohort */}
                <td className="py-3.5 pr-4 font-semibold text-[#64748B]">
                  {student.cohort}
                </td>

                {/* Attendance */}
                <td className="py-3.5 pr-4 text-center">
                  <div className="inline-flex items-center justify-center gap-2">
                    <span className="font-bold text-[#0F172A]">{student.attendance}%</span>
                    <span
                      className={`h-2 w-2 rounded-full shrink-0 ${
                        student.attendanceStatus === "danger"
                          ? "bg-[#EF4444]"
                          : student.attendanceStatus === "warning"
                          ? "bg-[#F97316]"
                          : "bg-[#00B98A]"
                      }`}
                    />
                  </div>
                </td>

                {/* Submission */}
                <td className="py-3.5 text-center">
                  <div className="inline-flex items-center justify-center gap-2">
                    <span className="font-bold text-[#0F172A]">{student.submission}%</span>
                    <span
                      className={`h-2 w-2 rounded-full shrink-0 ${
                        student.submissionStatus === "danger"
                          ? "bg-[#EF4444]"
                          : student.submissionStatus === "warning"
                          ? "bg-[#F97316]"
                          : "bg-[#00B98A]"
                      }`}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
