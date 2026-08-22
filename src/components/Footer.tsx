import Image from "next/image";

import logo from "../assets/footer-images/loggo.png";
import iacetBadge from "../assets/footer-images/image 32.png";
import cpdBadge from "../assets/footer-images/image 33.png";
import badge  from "../assets/footer-images/logo.png";

const courses = [
  "AI for Marketers",
  "AI for Founders",
  "Prompt Engineering",
  "AI Filmmaking and Storytelling",
  "AI for African Use Cases",
];

const quickLinks = [
  { label: "Scholarship", href: "#scholarship-form" },
  { label: "Student login", href: "/dashboard" },
  { label: "About", href: "#about" },
];

const infoLinks = [
  { label: "Contact", href: "#contact" },
  { label: "Privacy policy", href: "#" },
  { label: "Terms", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#002B1F] pb-8 pt-[180px] lg:pt-[200px]">
      <div
        className="pointer-events-none absolute left-[8%] top-[18%] h-[220px] w-[220px] rounded-full opacity-40 blur-[80px]"
        style={{ background: "rgba(49,202,146,0.35)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[10%] bottom-[20%] h-[180px] w-[180px] rounded-full opacity-30 blur-[70px]"
        style={{ background: "rgba(0,185,138,0.4)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-[90%]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <Image
              src={logo}
              alt="The AI Colony Academy"
              width={140}
              height={62}
              className="h-auto w-[140px] object-contain"
            />
            <p className="mt-5 text-[13px] leading-relaxed text-white/70">
              2972 Westheimer Rd. Somewhere
              <br />
              Illinois 85486
            </p>
            <p className="mt-2 text-[14px] text-white/75">
              From 10 a.m. - 6 p.m. <span className="mt-2 text-[12px] text-white/45"><br/>Mon-Fri</span>
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Image
                src={iacetBadge}
                alt="IACET member"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <Image
                src={cpdBadge}
                alt="CPD Certified"
                width={56}
                height={36}
                className=" h-14 w-14 rounded-full object-cover"
              />
            </div>
          </div>

          <div>
            
            <Image
                src={badge}
                alt="CPD Certified"
                width={40}
                height={40}
                className="h-7 w-11 rounded-full object-fill"
              />
              <br/><br/>
            <p className="text-[15px] font-medium text-white">
              +234 999 888-76-54
            </p>
            <a
              href="mailto:hello@theaicolonyacademy.com"
              className="mt-2 block text-[14px] text-white/75 transition-opacity hover:opacity-80"
            >
              hello@theaicolonyacademy.com
            </a>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-opacity hover:opacity-80"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.918.918l4.458-1.495A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.372l-.358-.213-3.304 1.108 1.108-3.304-.233-.371A9.818 9.818 0 1112 21.818z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-opacity hover:opacity-80"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:text-right">
            <h3 className="mb-4 text-[13px] font-medium text-white/40">
              Courses
            </h3>
            <ul className="space-y-2.5">
              {courses.map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    className="text-[14px] text-white/80 transition-opacity hover:opacity-100"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 lg:text-right">
            <div>
              <h3 className="mb-4 text-[13px] font-medium text-white/40">
                Quick links:
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-white/80 transition-opacity hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-[13px] font-medium text-white/40">
                Info
              </h3>
              <ul className="space-y-2.5">
                {infoLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-white/80 transition-opacity hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-white/35 sm:flex-row">
          <p>© 2026 — Copyright</p>
          <p>The AI Colony Academy</p>
        </div>
      </div>
    </footer>
  );
}
