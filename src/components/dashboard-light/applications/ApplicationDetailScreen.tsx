"use client";

import { useState } from "react";
import ApplicationDetailHeader from "./ApplicationDetailHeader";
import ApplicantInfoCard from "./ApplicantInfoCard";
import MotivationAndWorkSamples from "./MotivationAndWorkSamples";
import ApplicationInternalNotes from "./ApplicationInternalNotes";
import { Status } from "./applicationsData";

interface ApplicationDetailScreenProps {
  initialStatus?: Status;
  backUrl?: string;
}

export default function ApplicationDetailScreen({
  initialStatus = "Pending",
  backUrl = "/dashboard-light/applications",
}: ApplicationDetailScreenProps) {
  const [status, setStatus] = useState<Status>(initialStatus);

  return (
    <div className="min-h-screen w-full">
      {/* ── Group 1: Header with breadcrumb and actions ── */}
      <ApplicationDetailHeader
        status={status}
        onStatusChange={setStatus}
        backUrl={backUrl}
      />

      {/* ── 3-Column Grid ── */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* ── Column 1: Applicant Info ── */}
        <ApplicantInfoCard status={status} />

        {/* ── Column 2: Motivation Statement + Work Sample ── */}
        <MotivationAndWorkSamples />

        {/* ── Column 3: Internal Notes + Accept Application Button ── */}
        <ApplicationInternalNotes onAccept={() => setStatus("Approved")} />
      </div>
    </div>
  );
}
