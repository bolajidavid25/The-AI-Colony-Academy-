import Image from "next/image";
import certificationCard from "../../../assets/certification-card.png";

interface CertificatePreviewGraphicProps {
  courseTitle?: string;
  variant?: "banner" | "thumb" | "full";
}

export default function CertificatePreviewGraphic({
  courseTitle = "Advanced AI Marketing",
  variant = "thumb",
}: CertificatePreviewGraphicProps) {
  if (variant === "full") {
    return (
      <div className="relative mx-auto w-full max-w-[480px] overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-xs">
        <Image
          src={certificationCard}
          alt={`${courseTitle} Certificate`}
          className="h-auto w-full rounded-lg object-contain"
          priority
        />
      </div>
    );
  }

  const isBanner = variant === "banner";

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[8px] bg-white shadow-xs ${
        isBanner ? "h-[85px] w-[130px] p-1" : "h-[56px] w-[82px] p-0.5"
      }`}
    >
      <Image
        src={certificationCard}
        alt={`${courseTitle} Certificate`}
        fill
        sizes={isBanner ? "130px" : "82px"}
        className="object-contain"
      />
    </div>
  );
}
