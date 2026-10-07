"use client";

import { useState } from "react";
import ApplicationDetailHeader from "./ApplicationDetailHeader";
import ApplicantInfoCard from "./ApplicantInfoCard";
import MotivationAndWorkSamples from "./MotivationAndWorkSamples";
import ApplicationInternalNotes from "./ApplicationInternalNotes";
import ConfirmActionModal, { ActionType } from "./ConfirmActionModal";
import { Status } from "./applicationsData";

interface ApplicationDetailScreenProps {
  initialStatus?: Status;
  backUrl?: string;
  applicantEmail?: string;
}

export default function ApplicationDetailScreen({
  initialStatus = "Pending",
  backUrl = "/dashboard-light/applications",
  applicantEmail = "jane.cooper@gmail.com",
}: ApplicationDetailScreenProps) {
  const [status, setStatus] = useState<Status>(initialStatus);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    actionType: ActionType | null;
    isSuccess: boolean;
  }>({
    isOpen: false,
    actionType: null,
    isSuccess: false,
  });

  const handleRequestAction = (action: ActionType) => {
    setModalState({
      isOpen: true,
      actionType: action,
      isSuccess: false,
    });
  };

  const handleConfirmAction = (action: ActionType) => {
    if (action === "accept") {
      setStatus("Approved");
    } else if (action === "waitlist") {
      setStatus("Waitlisted");
    } else if (action === "reject") {
      setStatus("Rejected");
    }
    // Switch to success feedback modal
    setModalState((prev) => ({
      ...prev,
      isSuccess: true,
    }));
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      actionType: null,
      isSuccess: false,
    });
  };

  return (
    <div className="min-h-screen w-full">
      {/* ── Group 1: Header with breadcrumb and actions ── */}
      <ApplicationDetailHeader
        status={status}
        onStatusChange={setStatus}
        onRequestAction={handleRequestAction}
        backUrl={backUrl}
      />

      {/* ── 3-Column Grid ── */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* ── Column 1: Applicant Info ── */}
        <ApplicantInfoCard status={status} />

        {/* ── Column 2: Motivation Statement + Work Sample ── */}
        <MotivationAndWorkSamples />

        {/* ── Column 3: Internal Notes + Accept Application Button ── */}
        <ApplicationInternalNotes onAccept={() => handleRequestAction("accept")} />
      </div>

      {/* ── Confirmation and Success Feedback Modal ── */}
      <ConfirmActionModal
        isOpen={modalState.isOpen}
        actionType={modalState.actionType}
        isSuccess={modalState.isSuccess}
        applicantEmail={applicantEmail}
        onClose={handleCloseModal}
        onConfirm={handleConfirmAction}
      />
    </div>
  );
}
