import Image, { StaticImageData } from "next/image";

type HeroFrameProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
};

export default function HeroFrame({
  src,
  alt,
  className = "",
}: HeroFrameProps) {
  return (
    <div
      className={`absolute z-10 h-[90px] w-[80px] overflow-hidden rounded-[14px] sm:h-[120px] sm:w-[105px] md:h-[175px] md:w-[155px] md:rounded-[18px] ${className}`}
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 52%, rgba(18, 226, 147, 0.21) 72%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, black 0%, black 52%, rgba(30, 238, 124, 0.39) 72%, transparent 100%)",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 640px) 80px, (max-width: 768px) 105px, 155px"
        className="object-cover"
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, green 22%, transparent 30%)",
          maskImage:
            "linear-gradient(to top, black 0%, green 22%, transparent 30%)",
        }}
      >
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 640px) 80px, (max-width: 768px) 105px, 155px"
          className="object-cover"
          style={{ filter: "blur(18px)", transform: "scale(1.18)" }}
        />
      </div>
    </div>
  );
}