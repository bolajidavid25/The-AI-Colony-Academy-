"use client";

import React, { useState } from "react";
import StudentDetailHeader from "./StudentDetailHeader";
import StudentMetricsRow from "./StudentMetricsRow";
import StudentApplicantInfoCard from "./StudentApplicantInfoCard";
import StudentWorkSamplesCard from "./StudentWorkSamplesCard";
import StudentAtRiskCard from "./StudentAtRiskCard";
import StudentCertificateCard from "./StudentCertificateCard";
import StudentAttendanceTable from "./StudentAttendanceTable";
import StudentAssignmentReviewTable from "./StudentAssignmentReviewTable";
import StudentRecentActivityTable from "./StudentRecentActivityTable";
import StudentInternalNotesCard from "./StudentInternalNotesCard";
import { DEFAULT_STUDENT_DETAIL, StudentDetail } from "./studentDetailData";

interface StudentDetailScreenProps {
  initialData?: StudentDetail;
  studentId?: string;
}

export default function StudentDetailScreen({
  initialData = DEFAULT_STUDENT_DETAIL,
}: StudentDetailScreenProps) {
  const [studentData, setStudentData] = useState<StudentDetail>(initialData);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3500);
  };

  const handleIssueCertificate = () => {
    showNotification(`Certificate issued successfully for ${studentData.name}!`);
  };

  const handleActionSelect = (action: string) => {
    if (action === "issue-certificate") {
      handleIssueCertificate();
    } else if (action === "toggle-status") {
      const nextStatus = studentData.status === "Active" ? "Inactive" : "Active";
      setStudentData((prev) => ({ ...prev, status: nextStatus }));
      showNotification(`Student status updated to ${nextStatus}.`);
    } else if (action === "export") {
      showNotification(`Exporting profile data for ${studentData.name}...`);
    }
  };

  const handleEditSession = (session: StudentDetail["attendanceSessions"][0]) => {
    // Toggle present/absent for quick interactivity
    const newStatus = session.status === "Present" ? "Absent" : "Present";
    setStudentData((prev) => ({
      ...prev,
      attendanceSessions: prev.attendanceSessions.map((s) =>
        s.id === session.id ? { ...s, status: newStatus } : s
      ),
    }));
    showNotification(`Updated ${session.session} status to ${newStatus}.`);
  };

  const handleViewAssignment = (assignment: StudentDetail["assignmentReviews"][0]) => {
    showNotification(`Viewing submission for "${assignment.assignment}"...`);
  };

  const handleSaveNotes = (newNotes: string) => {
    setStudentData((prev) => ({ ...prev, internalNotes: newNotes }));
    showNotification("Internal notes saved successfully.");
  };

  return (
    <div className="w-full relative">
      {/* ── Toast notification feedback ── */}
      {successMessage && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl px-4 py-3 text-sm font-bold text-white shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-200" style={{ backgroundColor: "#154535" }}>
          {successMessage}
        </div>
      )}

      {/* ── 1. Header (Back to Students, Title + Badge, Subtitle, Prev/Next, Action) ── */}
      <StudentDetailHeader
        status={studentData.headerStatus}
        submittedDate={studentData.submittedDate}
        backUrl="/dashboard-light/students"
        onActionSelect={handleActionSelect}
      />

      {/* ── 2. Top Metrics Row (Attendance, Certificate Eligibility, Assignment Submissions, Leaderboard Ranking) ── */}
      <StudentMetricsRow metrics={studentData.metrics} />

      {/* ── 3. Middle Section: Left Profile Column + Right Academics/Sessions Column ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* Left Column: Applicant info + Work Sample/Links */}
        <div className="lg:col-span-4 flex flex-col">
          <StudentApplicantInfoCard student={studentData} />
          <StudentWorkSamplesCard workSamples={studentData.workSamples} />
        </div>

        {/* Right Column: At-Risk View + Certificate Eligibility, Attendance Marking, Assignment Review */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          {/* Top Row in Right Column: At-risk View (Left) & Certificate Eligibility (Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <StudentAtRiskCard atRisk={studentData.atRisk} />
            <StudentCertificateCard
              certificateEligibility={studentData.certificateEligibility}
              onIssueCertificate={handleIssueCertificate}
            />
          </div>

          {/* Attendance Marking Table */}
          <StudentAttendanceTable
            sessions={studentData.attendanceSessions}
            onEditSession={handleEditSession}
          />

          {/* Assignment Review Table */}
          <StudentAssignmentReviewTable
            assignments={studentData.assignmentReviews}
            onViewAssignment={handleViewAssignment}
          />
        </div>
      </div>

      {/* ── 4. Bottom Section: Recent Activity (Left ~68%) + Internal Notes (Right ~32%) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8">
          <StudentRecentActivityTable activities={studentData.recentActivities} />
        </div>
        <div className="lg:col-span-4 flex flex-col">
          <StudentInternalNotesCard
            initialNotes={studentData.internalNotes}
            onSaveNotes={handleSaveNotes}
          />
        </div>
      </div>
    </div>
  );
}
