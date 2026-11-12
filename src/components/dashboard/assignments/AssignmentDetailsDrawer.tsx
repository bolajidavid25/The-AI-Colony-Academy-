"use client";

import { useEffect, useRef, useState } from "react";
import type {
  AssignmentAttachment,
  AssignmentItem,
  SubmittedFile,
} from "./assignmentsData";
import { STATUS_BADGE_STYLE } from "./AssignmentRowCard";
import {
  CheckCircleOutlineIcon,
  ChevronDownIcon,
  CloseCircleIcon,
  DescriptionDocIcon,
  DownloadIcon,
  PaperclipIcon,
  PdfFileBadgeIcon,
  SubmissionStateCheckbox,
  UploadTrayIcon,
} from "./AssignmentsIcons";

interface AssignmentDetailsDrawerProps {
  assignment: AssignmentItem;
  onClose: () => void;
  onSubmitAssignment: (
    assignmentId: string,
    payload: {
      files: SubmittedFile[];
    }
  ) => void;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${Math.round(kb)}kb`;
  return `${(kb / 1024).toFixed(1)}MB`;
}

function triggerMockDownload(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function AssignmentDetailsDrawer({
  assignment,
  onClose,
  onSubmitAssignment,
}: AssignmentDetailsDrawerProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<SubmittedFile[]>([]);
  const [isResubmitting, setIsResubmitting] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const badgeStyle = STATUS_BADGE_STYLE[assignment.status];
  const showUploadForm =
    assignment.status === "Pending" ||
    assignment.status === "Rejected" ||
    isResubmitting;

  const isLongDescription = assignment.description.length > 165;
  const displayedDescription =
    isDescriptionExpanded || !isLongDescription
      ? assignment.description
      : `${assignment.description.slice(0, 165).trimEnd()}...`;

  function appendFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;
    const mapped: SubmittedFile[] = Array.from(fileList).map((file, index) => ({
      id: `local-${Date.now()}-${index}`,
      name: file.name,
      size: formatBytes(file.size),
    }));
    setSelectedFiles((prev) => [...prev, ...mapped]);
    setValidationError(null);
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    appendFiles(event.dataTransfer.files);
  }

  function handleRemoveFile(fileId: string) {
    setSelectedFiles((prev) => prev.filter((item) => item.id !== fileId));
  }

  function handleDownloadAttachment(att: AssignmentAttachment) {
    triggerMockDownload(
      `${att.name.replace(/\s+/g, "_")}.txt`,
      `The AI Colony Academy\nAssignment: ${assignment.title}\nAttachment: ${att.name} (${att.size})\n`
    );
    setDownloadNotice(`Downloaded "${att.name}"`);
    setTimeout(() => setDownloadNotice(null), 2500);
  }

  function handleDownloadAll() {
    const manifest = assignment.attachments
      .map((att, idx) => `${idx + 1}. ${att.name} (${att.type}, ${att.size})`)
      .join("\n");
    triggerMockDownload(
      `${assignment.id}-attachments.txt`,
      `The AI Colony Academy - Assignment Attachments\n${assignment.title}\n\n${manifest}\n`
    );
    setDownloadNotice(`Downloaded ${assignment.attachments.length} attachment files`);
    setTimeout(() => setDownloadNotice(null), 2500);
  }

  function handleUploadSubmit() {
    const fallbackFiles =
      selectedFiles.length > 0
        ? selectedFiles
        : assignment.submission?.files ?? [];

    if (fallbackFiles.length === 0) {
      setValidationError("Please attach at least one file before submitting.");
      return;
    }

    onSubmitAssignment(assignment.id, {
      files: fallbackFiles,
    });
  }

  return (
    <div
      className="fixed inset-0 z-[10050] flex justify-end bg-[#061C19]/40 backdrop-blur-[1px] animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="assignment-drawer-title"
    >
      <aside className="m-2 flex h-[calc(100vh-16px)] w-full max-w-[465px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:m-5 sm:h-[calc(100vh-40px)] animate-in slide-in-from-right-4 duration-200">
        {/* Sticky Drawer Top Header */}
        <div className="flex items-center justify-between border-b border-[#F1F5F9] px-6 py-4">
          <span className="text-sm font-semibold text-[#A0A5B0]">
            Assignment Details
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close assignment details"
            className="cursor-pointer border-0 bg-transparent p-0.5 text-[#141B34] transition-opacity hover:opacity-70"
          >
            <CloseCircleIcon className="h-6 w-6" color="#141B34" />
          </button>
        </div>

        {/* Scrollable Drawer Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {/* Title + Status Pill + Module + Due Date */}
          <div>
            <h2
              id="assignment-drawer-title"
              className="text-[22px] font-bold leading-snug text-[#154535]"
            >
              {assignment.title}
            </h2>

            <div className="mt-2.5">
              <span
                className="inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold"
                style={badgeStyle}
              >
                {assignment.status}
              </span>
            </div>

            <p className="mt-2.5 text-sm font-medium text-[#A0A5B0]">
              {assignment.courseModule}
            </p>

            <p className="mt-1 text-xs font-medium text-[#A0A5B0]">
              Due date: {assignment.dueDate}{" "}
              {assignment.status === "Pending" || assignment.status === "Rejected" ? (
                <span className="font-semibold text-[#FE4F08]">
                  ( {assignment.dueIn} left)
                </span>
              ) : assignment.submission?.submittedAt ? (
                <span className="font-semibold text-[#31CA92]">
                  · Submitted {assignment.submission.submittedAt}
                </span>
              ) : null}
            </p>
          </div>

          {/* Description */}
          <div className="mt-5">
            <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-[#A0A5B0]">
              <DescriptionDocIcon className="h-3.5 w-3.5" color="#A0A5B0" />
              <span>Description</span>
            </div>

            <div className="rounded-xl border border-[#F1F5F9] bg-[#F9F9F9] p-4">
              <p className="text-xs leading-relaxed text-[#626262]">
                {displayedDescription}
              </p>

              {isLongDescription && (
                <button
                  type="button"
                  onClick={() => setIsDescriptionExpanded((prev) => !prev)}
                  className="mt-2 inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-xs font-semibold text-[#FF9E00] hover:underline"
                >
                  <span>{isDescriptionExpanded ? "Show less" : "Read more"}</span>
                  <span
                    className={`inline-flex transition-transform duration-150 ${
                      isDescriptionExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDownIcon className="h-3 w-3" color="#FF9E00" />
                  </span>
                </button>
              )}
            </div>
          </div>

          <hr className="my-5 border-0 border-t border-[#F1F5F9]" />

          {/* Requirements */}
          <div>
            <h3 className="mb-3 text-sm font-bold text-[#154535]">Requirements</h3>
            <ul className="space-y-2.5">
              {assignment.requirements.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-2.5 text-xs font-medium text-[#626262]"
                >
                  <CheckCircleOutlineIcon
                    className="mt-0.5 h-4 w-4 shrink-0"
                    color="#31CA92"
                  />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="mt-5">
            <h3 className="mb-3 text-sm font-bold text-[#154535]">Deliverables</h3>
            <ul className="space-y-2.5">
              {assignment.deliverables.map((del) => (
                <li
                  key={del}
                  className="flex items-center gap-2.5 text-xs font-medium text-[#626262]"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#31CA92]" />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Attachments — Horizontal Scroll */}
          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-sm font-bold text-[#154535]">
                <PaperclipIcon className="h-4 w-4" color="#154535" />
                <span>Attachments ({assignment.attachments.length})</span>
              </div>

              <button
                type="button"
                onClick={handleDownloadAll}
                className="inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-xs font-semibold text-[#FF9E00] hover:underline"
              >
                <DownloadIcon className="h-3.5 w-3.5" color="#FF9E00" />
                <span>Download all</span>
              </button>
            </div>

            {downloadNotice && (
              <p className="mb-2 text-[11px] font-semibold text-[#31CA92]">
                {downloadNotice}
              </p>
            )}

            <div className="flex snap-x gap-3 overflow-x-auto pb-2">
              {assignment.attachments.map((att) => (
                <button
                  key={att.id}
                  type="button"
                  onClick={() => handleDownloadAttachment(att)}
                  className="flex min-w-[188px] shrink-0 snap-start cursor-pointer items-center gap-3 rounded-xl border border-[#E2E8F0] bg-[#F9F9F9] px-3.5 py-3 text-left transition-colors hover:border-[#31CA92]"
                >
                  <PdfFileBadgeIcon className="h-8 w-8 shrink-0" color="#9E90F2" />
                  <div className="min-w-0">
                    <p className="truncate text-xs font-semibold text-[#154535]">
                      {att.name}
                    </p>
                    <p className="mt-0.5 text-[11px] font-medium text-[#A0A5B0]">
                      {att.size}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* ── Mode-Specific Bottom Section ── */}
          {showUploadForm ? (
            <div className="mt-5">
              {/* Rejection notice when status is Rejected */}
              {assignment.status === "Rejected" && assignment.rejectionReason && (
                <div className="mb-4 rounded-xl border border-[#FE4F08]/30 bg-[#FFEAE5] p-3.5">
                  <p className="text-xs font-bold text-[#FE4F08]">
                    Revision Requested by Instructor
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#154535]">
                    {assignment.rejectionReason}
                  </p>
                </div>
              )}

              {/* Dashed Upload Dropzone */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`rounded-xl border border-dashed px-5 py-6 text-center transition-colors ${
                  isDragging
                    ? "border-[#00B98A] bg-[#E1F8EC]"
                    : "border-[#31CA92] bg-[#F0FDF9]"
                }`}
              >
                <UploadTrayIcon
                  className="mx-auto mb-2 h-6 w-6"
                  color="#31CA92"
                />
                <p className="text-sm font-bold text-[#31CA92]">
                  Upload your assignment
                </p>
                <p className="mt-1 text-xs font-medium text-[#31CA92]">
                  Drag &amp; drop files here or
                </p>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-3 inline-flex cursor-pointer items-center justify-center rounded-full border border-[#31CA92] bg-white px-5 py-1.5 text-xs font-semibold text-[#31CA92] transition-colors hover:bg-[#E1F8EC]"
                >
                  browse files
                </button>

                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.zip,.docx,.doc,.png,.jpg,.mp4"
                  onChange={(e) => appendFiles(e.target.files)}
                  className="hidden"
                />

                <p className="mt-3 text-[11px] font-medium text-[#31CA92]/80">
                  Supported formats: PDF, ZIP, DOCX, MP4 (Max 25MB)
                </p>
              </div>

              {/* Selected Files List */}
              {selectedFiles.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {selectedFiles.map((file) => (
                    <li
                      key={file.id}
                      className="flex items-center justify-between rounded-xl border border-[#E2E8F0] bg-[#F9F9F9] px-3.5 py-2.5"
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <PdfFileBadgeIcon
                          className="h-6 w-6 shrink-0"
                          color="#31CA92"
                        />
                        <div className="min-w-0">
                          <p className="truncate text-xs font-semibold text-[#154535]">
                            {file.name}
                          </p>
                          <p className="text-[11px] text-[#A0A5B0]">{file.size}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveFile(file.id)}
                        aria-label={`Remove ${file.name}`}
                        className="ml-2 cursor-pointer border-0 bg-transparent text-xs font-bold text-[#A0A5B0] hover:text-[#FE4F08]"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              {validationError && (
                <p className="mt-3 text-xs font-semibold text-[#FE4F08]">
                  {validationError}
                </p>
              )}

              {/* Primary Green Upload Button */}
              <button
                type="button"
                onClick={handleUploadSubmit}
                className="mt-3 w-full cursor-pointer rounded-lg border-0 bg-[#31CA92] py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                {assignment.status === "Rejected"
                  ? "Resubmit assignment"
                  : isResubmitting
                    ? "Save updated submission"
                    : "Upload assignment"}
              </button>

              {isResubmitting && (
                <button
                  type="button"
                  onClick={() => setIsResubmitting(false)}
                  className="mt-2 w-full cursor-pointer rounded-lg border border-[#E2E8F0] bg-white py-2.5 text-xs font-semibold text-[#626262] hover:bg-[#F9F9F9]"
                >
                  Cancel update
                </button>
              )}
            </div>
          ) : assignment.status === "Submitted" ? (
            /* ── View Submission (Instructor has NOT graded yet) ── */
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 rounded-xl bg-[#E1F8EC] p-3.5">
                <SubmissionStateCheckbox status="Submitted" />
                <div>
                  <p className="text-xs font-bold text-[#154535]">
                    Submitted — Awaiting Instructor Grading
                  </p>
                  {assignment.submission?.submittedAt && (
                    <p className="mt-0.5 text-[11px] font-medium text-[#626262]">
                      Uploaded on {assignment.submission.submittedAt}
                    </p>
                  )}
                </div>
              </div>

              <SubmittedContentSection submission={assignment.submission} />

              <button
                type="button"
                onClick={() => setIsResubmitting(true)}
                className="w-full cursor-pointer rounded-lg border border-[#31CA92] bg-white py-2.5 text-xs font-bold text-[#31CA92] transition-colors hover:bg-[#F0FDF9]"
              >
                Update Submission
              </button>
            </div>
          ) : (
            /* ── Graded (View Feedback when instructor feedback exists, or View Submission) ── */
            <div className="mt-6 space-y-4">
              {assignment.feedback ? (
                <div className="rounded-xl border border-[#E2E8F0] bg-[#F9F9F9] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-[#A0A5B0]">
                        Instructor Feedback
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-[#154535]">
                        {assignment.feedback.instructorName}
                      </p>
                      <p className="text-[11px] font-medium text-[#A0A5B0]">
                        {assignment.feedback.instructorRole} ·{" "}
                        {assignment.feedback.gradedAt}
                      </p>
                    </div>

                    <div className="rounded-xl bg-white px-3.5 py-2 text-right shadow-2xs">
                      <p className="text-[10px] font-semibold uppercase text-[#A0A5B0]">
                        Score
                      </p>
                      <p className="text-lg font-bold text-[#154535]">
                        {assignment.feedback.score}
                        <span className="text-xs font-semibold text-[#A0A5B0]">
                          /{assignment.feedback.maxScore}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-lg bg-white p-3.5">
                    <p className="text-xs leading-relaxed text-[#154535]">
                      {assignment.feedback.comment}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="flex items-center gap-3 rounded-xl p-3.5"
                  style={{ backgroundColor: "rgba(158, 144, 242, 0.14)" }}
                >
                  <SubmissionStateCheckbox status="Graded" />
                  <div>
                    <p className="text-xs font-bold text-[#154535]">
                      Graded — Submission Recorded
                    </p>
                    {assignment.submission?.submittedAt && (
                      <p className="mt-0.5 text-[11px] font-medium text-[#626262]">
                        Uploaded on {assignment.submission.submittedAt}
                      </p>
                    )}
                  </div>
                </div>
              )}

              <SubmittedContentSection submission={assignment.submission} />
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

function SubmittedContentSection({
  submission,
}: {
  submission?: AssignmentItem["submission"];
}) {
  if (!submission) return null;

  return (
    <div className="space-y-3 rounded-xl border border-[#F1F5F9] bg-[#F9F9F9] p-4">
      <h4 className="text-xs font-bold uppercase tracking-wide text-[#154535]">
        Submitted Files
      </h4>

      {submission.files.length > 0 && (
        <div className="space-y-2">
          {submission.files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between rounded-lg bg-white px-3 py-2.5"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <PdfFileBadgeIcon className="h-7 w-7 shrink-0" color="#31CA92" />
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-[#154535]">
                    {file.name}
                  </p>
                  <p className="text-[11px] text-[#A0A5B0]">{file.size}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() =>
                  triggerMockDownload(
                    file.name,
                    `Submitted file: ${file.name} (${file.size})`
                  )
                }
                aria-label={`Download ${file.name}`}
                className="cursor-pointer border-0 bg-transparent p-1 text-[#31CA92] hover:opacity-75"
              >
                <DownloadIcon className="h-4 w-4" color="#31CA92" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
