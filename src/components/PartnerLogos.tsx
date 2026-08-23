import Image, { type StaticImageData } from "next/image";

import timecampLogo from "../assets/trusted-section/timestamp.jpg";
import remoteLogo from "../assets/trusted-section/senville.jpg";
import googleLogo from "../assets/trusted-section/google.jpg";
import dropboxLogo from "../assets/trusted-section/dropbox.jpg";
import netflixLogo from "../assets/trusted-section/netflix.jpg";
import envatoLogo from "../assets/trusted-section/envato.jpg";

interface Partner {
  name: string;
  logo: StaticImageData;
}

const partners: Partner[] = [
  { name: "Timecamp", logo: timecampLogo },
  { name: "Remote", logo: remoteLogo },
  { name: "Google", logo: googleLogo },
  { name: "Dropbox", logo: dropboxLogo },
  { name: "Netflix", logo: netflixLogo },
  { name: "Envato", logo: envatoLogo },
];

// Tripled so the loop resets at -33.333% instead of -50% —
// with more copies on screen at once, the seam is far less noticeable
const marqueeLogos: Partner[] = [...partners, ...partners, ...partners];

export default function PartnerLogos() {
  return (
    <section
      aria-label="Trusted partners"
      className="w-full overflow-hidden border-y border-black/5 bg-white py-10"
    >
      <div className="group relative mx-auto w-full max-w-[1260px]">
        <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused] sm:gap-16">
          {marqueeLogos.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex h-8 w-[90px] shrink-0 items-center justify-center sm:w-[110px]"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className="h-auto max-h-8 w-auto max-w-[110px] object-contain opacity-60 grayscale transition-opacity hover:opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}