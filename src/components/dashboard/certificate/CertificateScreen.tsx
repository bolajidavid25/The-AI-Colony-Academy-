"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import certificationCard from "../../../assets/certification-card.png";
import {
  AmazingBadgeIcon,
  DownloadPdfBadgeIcon,
  ShareNodesIcon,
} from "./AmazingBadgeIcon";
import CertificateCard from "./CertificateCard";
import {
  EARNED_CERTIFICATES,
  EARNED_TAG_PILLS,
  type EarnedCertificate,
} from "./certificateData";
import { downloadCertificatePdf } from "./certificatePdf";
import CertificatePreviewGraphic from "./CertificatePreviewGraphic";
import RainingConfetti from "./RainingConfetti";

interface CertificateScreenProps {
  recipientName?: string;
  courseName?: string;
  initialView?: "list" | "celebration";
}

export default function CertificateScreen({
  recipientName = "Jermaine Doe",
  courseName = "Advanced AI Marketing Course",
  initialView = "list",
}: CertificateScreenProps) {
  const [view, setView] = useState<"list" | "celebration">(initialView);
  const [selectedCert, setSelectedCert] = useState<EarnedCertificate>(() => {
    const match = EARNED_CERTIFICATES.find(
      (c) =>
        c.courseName.toLowerCase() === courseName.toLowerCase() ||
        c.shortLabel.toLowerCase() === courseName.toLowerCase()
    );
    return match || EARNED_CERTIFICATES[0];
  });

  const [confettiTrigger, setConfettiTrigger] = useState<number>(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Sync state if courseName prop changes
  useEffect(() => {
    if (courseName) {
      const match = EARNED_CERTIFICATES.find(
        (c) =>
          c.courseName.toLowerCase() === courseName.toLowerCase() ||
          c.shortLabel.toLowerCase() === courseName.toLowerCase()
      );
      if (match) {
        setSelectedCert(match);
      }
    }
  }, [courseName]);

  // Close modal on Escape key press
  useEffect(() => {
    if (!isPreviewOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsPreviewOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewOpen]);

  function triggerRainShower() {
    setConfettiTrigger((prev) => prev + 1);
  }

  function showToast(message: string) {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((current) => (current === message ? null : current));
    }, 3200);
  }

  function handleSelectCourseAndCelebrate(cert: EarnedCertificate) {
    setSelectedCert(cert);
    setView("celebration");
    triggerRainShower();
    showToast(`🎉 Celebrating ${cert.shortLabel} completion!`);
  }

  async function handleShareLinkedIn() {
    const certificateUrl =
      typeof window !== "undefined"
        ? window.location.href
        : "https://theaicolonyacademy.com/certificate/jermaine-doe";

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(certificateUrl);
      }
    } catch {
      // Fallback
    }

    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      certificateUrl
    )}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
    showToast("Certificate link copied to clipboard & opened LinkedIn!");
  }

  async function handleDownloadPdf(certToDownload?: EarnedCertificate) {
    const cert = certToDownload || selectedCert;
    if (isDownloading) return;
    setIsDownloading(true);
    showToast(`Generating PDF for ${cert.shortLabel}...`);

    try {
      await downloadCertificatePdf({
        recipientName,
        courseName: cert.courseName,
        issuedDate: cert.issuedDate,
        fileName: `${cert.courseName.toLowerCase().replace(/\s+/g, "-")}-certificate.pdf`,
      });
      showToast("Certificate downloaded successfully!");
    } catch (err) {
      console.error("PDF generation failed:", err);
      const link = document.createElement("a");
      link.href = certificationCard.src;
      link.download = `${cert.courseName.toLowerCase().replace(/\s+/g, "-")}-certificate.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("Certificate image downloaded successfully!");
    } finally {
      setIsDownloading(false);
    }
  }

  async function handleDownloadAll() {
    showToast(`Downloading all ${EARNED_CERTIFICATES.length} certificates...`);
    for (const cert of EARNED_CERTIFICATES) {
      await handleDownloadPdf(cert);
    }
  }

  return (
    <div className="relative animate-in fade-in duration-300">
      {/* ── Toast Notification ── */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-20 right-6 z-[10080] flex items-center gap-2 rounded-full border border-[#8FF9D1] bg-[#E1F8EC] px-5 py-2.5 text-xs font-semibold text-[#154535] shadow-lg animate-in slide-in-from-top-3 fade-in duration-200"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#31CA92]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          VIEW 1: CERTIFICATES LIST SCREEN
          ───────────────────────────────────────────────────────────── */}
      {view === "list" ? (
        <div>
          {/* Page Header */}
          <div className="mb-6 flex flex-col gap-3 border-b border-[#8FF9D1] pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-[28px] font-bold tracking-[-0.5px] text-[#154535]">
                My Certificate
              </h1>
              <p className="mt-1 text-xs font-medium text-[#A0A5B0]">
                View and download all certificate you&apos;ve earned from completed courses
              </p>
            </div>

            {/* Quick Toggle to Celebration View */}
            <button
              type="button"
              onClick={() => {
                setView("celebration");
                triggerRainShower();
              }}
              className="inline-flex cursor-pointer items-center gap-2 self-start rounded-full border border-[#8FF9D1] bg-[#E1F8EC] px-4 py-2 text-xs font-semibold text-[#154535] transition-all hover:bg-[#d0f5e3] sm:self-auto"
            >
              <span>🎉 Certificate Celebration View</span>
              <span className="text-[#31CA92]">→</span>
            </button>
          </div>

          {/* Hero Progress Banner */}
          <section
            className="flex flex-col items-start gap-6 rounded-2xl px-6 py-5 text-white sm:flex-row sm:items-center sm:px-7"
            style={{
              background:
                "linear-gradient(90deg, #154535 0%, #196B4F 55%, #27B37F 100%)",
            }}
          >
            <CertificatePreviewGraphic variant="banner" />

            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold leading-snug sm:text-[22px]">
                AI Engineering
              </h2>
              <p className="mt-1 text-xs text-white/90">
                Complete all requirements to earn your certificate.
              </p>

              <div className="mt-3 h-2.5 w-full max-w-[390px] overflow-hidden rounded-full bg-white/85">
                <div className="h-full w-[66.66%] rounded-full bg-[#31CA92]" />
              </div>

              <p className="mt-2 text-[11px] font-medium text-white/85">
                2/3 requirements met
              </p>

              <Link
                href="/dashboard/courses"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-6 py-2 text-xs font-bold text-[#154535] transition-opacity hover:opacity-90"
              >
                Continue Learning
              </Link>
            </div>
          </section>

          {/* Main Two-Column Section */}
          <div className="mt-6 grid grid-cols-1 items-start gap-5 xl:grid-cols-[1fr_275px]">
            {/* Left: Certifications Earned List */}
            <section className="min-w-0">
              <div className="mb-3.5 flex items-center justify-between gap-3">
                <h2 className="text-sm font-bold text-[#154535]">
                  Certifications Earned ({EARNED_CERTIFICATES.length})
                </h2>

                <button
                  type="button"
                  onClick={handleDownloadAll}
                  className="inline-flex cursor-pointer items-center gap-1.5 border-0 bg-transparent p-0 text-xs font-semibold text-[#154535] transition-opacity hover:opacity-80"
                >
                  <span>Download All</span>
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-[6px] bg-[#E1F8EC] text-[#154535]">
                    <DownloadSmallIcon />
                  </span>
                </button>
              </div>

              <div className="space-y-3.5">
                {EARNED_CERTIFICATES.map((cert) => (
                  <article
                    key={cert.id}
                    className="group flex flex-col gap-4 rounded-2xl bg-[#F9F9F9] px-5 py-4 transition-all hover:bg-[#f3fbf6] hover:shadow-xs sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div
                      onClick={() => handleSelectCourseAndCelebrate(cert)}
                      className="flex min-w-0 flex-1 cursor-pointer items-center gap-4"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleSelectCourseAndCelebrate(cert);
                        }
                      }}
                    >
                      <CertificatePreviewGraphic variant="thumb" />

                      <div className="min-w-0">
                        <h3 className="text-[15px] font-bold leading-snug text-[#154535] group-hover:text-[#31CA92] transition-colors">
                          {cert.title}
                        </h3>
                        <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-[#A0A5B0]">
                          <CalendarMetaIcon />
                          <span>{cert.subtitleText}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2.5 pl-[82px] sm:pl-0">
                      <button
                        type="button"
                        onClick={() => handleSelectCourseAndCelebrate(cert)}
                        className="cursor-pointer rounded-full border-0 bg-[#154535] px-6 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDownloadPdf(cert)}
                        className="cursor-pointer rounded-full border-0 bg-[#31CA92] px-5 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                      >
                        Download Certificate
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Right: Certifications Earned Tags Card */}
            <aside>
              <h2 className="mb-3.5 text-sm font-bold text-[#154535]">
                Certifications Earned
              </h2>

              <div className="rounded-2xl bg-[#F9F9F9] p-4">
                <div className="flex flex-wrap gap-2">
                  {EARNED_TAG_PILLS.map((tag) => (
                    <button
                      key={tag.id}
                      type="button"
                      onClick={() => {
                        const match = EARNED_CERTIFICATES.find((c) => c.id === tag.certId);
                        if (match) handleSelectCourseAndCelebrate(match);
                      }}
                      className="inline-flex cursor-pointer items-center rounded-full border border-[#8FF9D1] bg-[#E1F8EC]/65 px-3 py-1.5 text-[11px] font-semibold text-[#154535] transition-all hover:bg-[#31CA92] hover:text-white"
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      ) : (
        /* ─────────────────────────────────────────────────────────────
           VIEW 2: CERTIFICATE COMPLETION & CELEBRATION SCREEN
           ───────────────────────────────────────────────────────────── */
        <div className="relative flex flex-col items-center pt-2 sm:pt-4">
          {/* Dynamic Raining Confetti Shower from the top */}
          <RainingConfetti triggerKey={confettiTrigger} particleCount={150} />

          {/* Award Medal Badge Icon (Using user-uploaded badge image) */}
          <div
            onClick={triggerRainShower}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                triggerRainShower();
              }
            }}
            title="Click to rain confetti!"
            className="relative mt-2 flex cursor-pointer items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95 sm:mt-3"
          >
            <AmazingBadgeIcon className="h-16 w-16 sm:h-[72px] sm:w-[72px]" />
          </div>

          {/* AMAZING Label */}
          <p className="mt-3.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[#154535]">
            AMAZING
          </p>

          {/* Main Heading */}
          <h1 className="mt-2 text-center text-2xl font-bold tracking-tight text-[#154535] sm:text-3xl lg:text-[34px]">
            Congratulations, {recipientName}
          </h1>

          {/* Subheading */}
          <p className="mt-1.5 px-4 text-center text-xs font-normal text-[#64748B] sm:text-sm">
            You&apos;ve successfully completed the {selectedCert.courseName}
          </p>

          {/* Certificate Card Graphic */}
          <div className="mt-6 w-full max-w-[640px] px-2 sm:mt-7 sm:px-0">
            <CertificateCard
              recipientName={recipientName}
              courseTitle={selectedCert.courseName}
              onPreviewClick={() => setIsPreviewOpen(true)}
            />
          </div>

          {/* Action Buttons (Side-by-Side) */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            {/* Share On Linked In Button */}
            <button
              type="button"
              onClick={handleShareLinkedIn}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#31CA92] px-7 py-3 text-xs font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#2bb883] hover:shadow-md active:scale-[0.98] sm:px-8 sm:py-3.5 sm:text-sm"
            >
              <span>Share On Linked In</span>
              <ShareNodesIcon className="h-4 w-4 shrink-0" />
            </button>

            {/* Download PDF Button */}
            <button
              type="button"
              onClick={() => handleDownloadPdf()}
              disabled={isDownloading}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#154535] px-7 py-3 text-xs font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#0f3428] hover:shadow-md active:scale-[0.98] disabled:opacity-75 sm:px-8 sm:py-3.5 sm:text-sm"
            >
              <span>{isDownloading ? "Generating..." : "Download PDF"}</span>
              <DownloadPdfBadgeIcon className="h-4 w-4 shrink-0" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="mt-10 flex items-center justify-center gap-5 pb-10 sm:mt-12 sm:pb-14">
            <button
              type="button"
              onClick={() => setView("list")}
              className="cursor-pointer border-0 bg-transparent text-xs font-medium text-[#94A3B8] transition-colors duration-150 hover:text-[#154535] sm:text-sm"
            >
              ← Back To All Certificates
            </button>
            <span className="text-[#E2E8F0]">•</span>
            <Link
              href="/dashboard"
              className="text-xs font-medium text-[#94A3B8] transition-colors duration-150 hover:text-[#154535] sm:text-sm"
            >
              Back To Dashboard
            </Link>
          </div>
        </div>
      )}

      {/* ── High-Resolution Fullscreen Certificate Modal ── */}
      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsPreviewOpen(false);
          }}
          className="fixed inset-0 z-[10070] flex items-center justify-center bg-[#061C19]/60 p-4 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-[560px] rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
            {/* Modal Header */}
            <div className="mb-4 flex items-center justify-between border-b border-[#F1F5F9] pb-3">
              <div>
                <h3
                  id="certificate-modal-title"
                  className="text-base font-bold text-[#154535]"
                >
                  {selectedCert.courseName}
                </h3>
                <p className="mt-0.5 text-xs text-[#94A3B8]">
                  Official Certificate of Completion • {recipientName}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                aria-label="Close preview"
                className="cursor-pointer border-0 bg-transparent text-lg font-bold text-[#94A3B8] transition-colors hover:text-[#154535]"
              >
                ✕
              </button>
            </div>

            {/* Certificate Template Graphic */}
            <div className="relative mx-auto w-full max-w-[480px] overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-xs">
              <Image
                src={certificationCard}
                alt={`${selectedCert.courseName} Full Certificate`}
                priority
                className="h-auto w-full rounded-lg object-contain"
              />
            </div>

            {/* Modal Action Buttons */}
            <div className="mt-5 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="cursor-pointer rounded-full border-0 bg-[#E4E7EC] px-6 py-2.5 text-xs font-semibold text-[#667085] transition-opacity hover:opacity-80"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => handleDownloadPdf(selectedCert)}
                className="cursor-pointer rounded-full border-0 bg-[#154535] px-6 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-90"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CalendarMetaIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function DownloadSmallIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 2.5V9.5M8 9.5L5.6 7.1M8 9.5L10.4 7.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 5.2H4.2C3.1 5.2 2.5 5.8 2.5 6.9V11.3C2.5 12.4 3.1 13 4.2 13H11.8C12.9 13 13.5 12.4 13.5 11.3V6.9C13.5 5.8 12.9 5.2 11.8 5.2H10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
