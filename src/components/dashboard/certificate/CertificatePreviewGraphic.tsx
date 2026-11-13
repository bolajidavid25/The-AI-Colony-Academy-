import Image from "next/image";
import certificateTemplate from "../../../assets/certificate-template.png";

interface CertificatePreviewGraphicProps {
  courseTitle?: string;
  variant?: "banner" | "thumb" | "full";
}

export default function CertificatePreviewGraphic({
  courseTitle = "AI Engineering",
  variant = "thumb",
}: CertificatePreviewGraphicProps) {
  if (variant === "full") {
    return (
      <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-sm">
        <Image
          src={certificateTemplate}
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
      className={`relative shrink-0 overflow-hidden rounded-[6px] bg-white shadow-sm ${
        isBanner ? "h-[126px] w-[96px] p-1" : "h-[56px] w-[42px] p-0.5"
      }`}
    >
      <Image
        src={certificateTemplate}
        alt={`${courseTitle} Certificate`}
        fill
        sizes={isBanner ? "96px" : "42px"}
        className="object-contain"
      />
    </div>
  );
}
