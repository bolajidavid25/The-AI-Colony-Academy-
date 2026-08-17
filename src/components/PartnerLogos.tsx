import Image from "next/image";

import timecampLogo from "../assets/trusted-section/timestamp.jpg";
import remoteLogo from "../assets/trusted-section/senville.jpg";
import googleLogo from "../assets/trusted-section/google.jpg";
import dropboxLogo from "../assets/trusted-section/dropbox.jpg";
import netflixLogo from "../assets/trusted-section/netflix.jpg";
import envatoLogo from "../assets/trusted-section/envato.jpg";

const partners = [
  { name: "Timecamp", logo: timecampLogo },
  { name: "Remote", logo: remoteLogo },
  { name: "Google", logo: googleLogo },
  { name: "Dropbox", logo: dropboxLogo },
  { name: "Netflix", logo: netflixLogo },
  { name: "Envato", logo: envatoLogo },
];

export default function PartnerLogos() {
  return (
    <section
      aria-label="Trusted partners"
      className="w-full border-y border-black/5 bg-white px-6 py-10 lg:px-8"
    >
      <div className="mx-auto w-full max-w-[1260px]">
        <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <li key={partner.name} className="flex justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                className="h-auto max-h-8 w-auto max-w-[110px] object-contain opacity-60 grayscale transition-opacity hover:opacity-80"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
