"use client";

import { useEffect, useRef } from "react";
import {
  AcceptIcon,
  WaitlistIcon,
  RejectIcon,
  OctagonWarningIcon,
  SuccessCheckIcon,
} from "./ApplicationsIcons";

export type ActionType = "accept" | "waitlist" | "reject";

export interface ConfirmActionModalProps {
  isOpen: boolean;
  actionType: ActionType | null;
  isSuccess?: boolean;
  applicantEmail?: string;
  onClose: () => void;
  onConfirm: (actionType: ActionType) => void;
}

interface ActionConfigItem {
  iconBg: string;
  accent: string;
  question: string;
  confirmKind: string;
  successKind: string;
  buttonText: string;
  icon: React.ComponentType<{ className?: string }>;
  confirmImage?: string;
  successImage?: string | null;
}

const ACTION_CONFIG: Record<ActionType, ActionConfigItem> = {
  accept: {
    iconBg: "#E1F8EC",
    accent: "#31CA92",
    question: "Are you sure you want to accept this application?",
    confirmKind: "An acceptance",
    successKind: "An acceptance",
    buttonText: "Accept Application",
    icon: AcceptIcon,
    confirmImage: "/images/applications/confirm-accept.png",
    successImage: null,
  },
  waitlist: {
    iconBg: "#FFF3E0",
    accent: "#FF9E00",
    question: "Are you sure you want to waitlist this application?",
    confirmKind: "A waitlisted",
    successKind: "A waitlisted",
    buttonText: "Waitlist Application",
    icon: WaitlistIcon,
    confirmImage: "/images/applications/confirm-waitlist.png",
    successImage: "/images/applications/success-waitlist.png",
  },
  reject: {
    iconBg: "#FFEAE5",
    accent: "#FE4F08",
    question: "Are you sure you want to reject this application?",
    confirmKind: "A rejection",
    successKind: "A rejection",
    buttonText: "Reject Application",
    icon: RejectIcon,
    confirmImage: "/images/applications/confirm-reject.png",
    successImage: "/images/applications/success-reject.png",
  },
};

export default function ConfirmActionModal({
  isOpen,
  actionType,
  isSuccess = false,
  applicantEmail = "jane.cooper@gmail.com",
  onClose,
  onConfirm,
}: ConfirmActionModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
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

  if (!isOpen || !actionType) return null;

  const config = ACTION_CONFIG[actionType];
  const ActionIcon = config.icon;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(15, 23, 42, 0.42)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-action-title"
    >
      <div
        ref={modalRef}
        className="w-full max-w-[372px] rounded-xl bg-white px-6 py-8 text-center shadow-[0_18px_50px_rgba(21,69,53,0.12)]"
      >
        {isSuccess ? (
          <div className="flex flex-col items-center">
            {config.successImage ? (
              <img
                src={config.successImage}
                alt=""
                className="mb-6 h-[108px] w-[108px] object-contain"
              />
            ) : (
              <div
                className="mb-6 flex h-[108px] w-[108px] items-center justify-center rounded-full"
                style={{ backgroundColor: config.iconBg }}
              >
                <SuccessCheckIcon className="h-[72px] w-[72px]" color={config.accent} />
              </div>
            )}

            <p
              className="mb-8 max-w-[280px] text-[13px] leading-[1.55] font-medium"
              style={{ color: "#154535" }}
            >
              {actionType === "accept" ? (
                <>
                  An acceptance email has successfully been
                  <br />
                  Sent to <span className="font-bold">{applicantEmail}</span>
                </>
              ) : (
                <>
                  {config.successKind} email has successfully
                  <br />
                  been Sent to
                  <br />
                  <span className="font-bold">{applicantEmail}</span>
                </>
              )}
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
        ) : (
          <div className="flex flex-col items-center">
            {config.confirmImage ? (
              <img
                src={config.confirmImage}
                alt=""
                className="mb-5 h-[88px] w-[88px] object-contain"
              />
            ) : (
              <div
                className="mb-5 flex h-[88px] w-[88px] items-center justify-center rounded-full"
                style={{ backgroundColor: config.iconBg }}
              >
                <OctagonWarningIcon className="h-12 w-12" strokeColor={config.accent} />
              </div>
            )}

            <h2
              id="confirm-action-title"
              className="mb-1.5 text-[22px] font-bold tracking-tight"
              style={{ color: "#154535" }}
            >
              Confirm Action
            </h2>

            <p
              className="mb-2 text-[13px] font-semibold leading-snug"
              style={{ color: "#154535" }}
            >
              {config.question}
            </p>

            <p
              className="mb-7 max-w-[230px] text-[11px] leading-[1.55]"
              style={{ color: "#98A2B3" }}
            >
              {config.confirmKind} email will be sent to {applicantEmail} after confirmation.
            </p>

            <div className="flex w-full items-center justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="min-w-[108px] cursor-pointer rounded-full border-0 px-7 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#E4E7EC", color: "#667085" }}
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() => onConfirm(actionType)}
                className="inline-flex min-w-[168px] cursor-pointer items-center justify-center gap-1.5 rounded-full border-0 px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: config.accent }}
              >
                <ActionIcon className="h-4 w-4" />
                <span>{config.buttonText}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
