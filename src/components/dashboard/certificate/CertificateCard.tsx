import Image from "next/image";
import certificationCard from "../../../assets/certification-card.png";

interface CertificateCardProps {
  recipientName?: string;
  courseTitle?: string;
  onPreviewClick?: () => void;
}

export default function CertificateCard({
  courseTitle = "AI for Software Engineering",
  onPreviewClick,
}: CertificateCardProps) {
  return (
    <div
      onClick={onPreviewClick}
      role={onPreviewClick ? "button" : undefined}
      tabIndex={onPreviewClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onPreviewClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onPreviewClick();
        }
      }}
      aria-label={`Certificate for ${courseTitle}. Click to preview.`}
      className={`group relative mx-auto w-full max-w-[640px] transition-all duration-300 ${
        onPreviewClick
          ? "cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
          : ""
      }`}
    >
      {/* Exact Certificate Card Image provided by User */}
      <div className="relative overflow-hidden rounded-[24px] shadow-[0_20px_55px_rgba(21,69,53,0.14)] transition-shadow duration-300 group-hover:shadow-[0_26px_65px_rgba(21,69,53,0.22)]">
        <Image
          src={certificationCard}
          alt={`Certificate of Completion for ${courseTitle}`}
          priority
          className="h-auto w-full select-none object-contain"
        />

        {/* Subtle Ambient Hover Ring */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-black/[0.04] transition-opacity duration-300 group-hover:ring-[#31CA92]/40"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
