import HeroFrame from "./HeroFrame";

import hero1 from "../assets/hero-images/Hero1.jpg";
import hero2 from "../assets/hero-images/Hero2.jpg";
import hero3 from "../assets/hero-images/Hero3.jpg";
import hero4 from "../assets/hero-images/Hero4.jpg";
import hero5 from "../assets/hero-images/Hero5.jpg";
import hero6 from "../assets/hero-images/Hero6.jpg";

export default function Hero() {
  return (
    <section
      id="scholarship"
      className="relative min-h-[600px] w-full overflow-hidden bg-[#061C19] md:min-h-[720px]"
    >
      {/* Hero gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #061C19 0%, #09261F 38%, #104137 72%, #1A5A49 100%)",
        }}
      />

      {/* Very subtle atmospheric glow at the bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[160px] opacity-40 md:h-[230px]"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(49,202,146,0.18) 0%, rgba(49,202,146,0.05) 42%, transparent 75%)",
        }}
      />

      {/* Hero frames */}

      {/* Top center (mobile) / Top left (desktop) */}
      <HeroFrame
        src={hero3}
        alt="AI Colony Academy student"
        className="left-1/2 top-[6%] -translate-x-1/2 md:left-[18.5%] md:top-[12%] md:translate-x-0"
      />

      {/* Right edge, fully visible (mobile) / Top right (desktop) */}
      <HeroFrame
        src={hero2}
        alt="AI Colony Academy student"
        className="right-1 top-[16%] md:right-[18.5%] md:top-[14%]"
      />

      {/* Left edge, fully visible (mobile) / Middle left (desktop) */}
      <HeroFrame
        src={hero4}
        alt="AI Colony Academy student"
        className="left-1 top-[16%] md:left-[7.5%] md:top-[43%]"
      />

      {/* Right edge, near buttons (mobile) / Middle right (desktop) */}
      <HeroFrame
        src={hero1}
        alt="AI Colony Academy student"
        className="right-1 bottom-[24%] md:right-[7.5%] md:top-[40%]"
      />

      {/* Left edge, near buttons (mobile) / Bottom left (desktop) */}
      <HeroFrame
        src={hero5}
        alt="AI Colony Academy student"
        className="left-1 bottom-[24%] md:left-[20.5%] md:bottom-[8%]"
      />

      {/* Bottom center (mobile) / Bottom right (desktop) */}
      <HeroFrame
        src={hero6}
        alt="AI Colony Academy student"
        className="left-1/2 bottom-[4%] -translate-x-1/2 md:right-[20.5%] md:bottom-[9%] md:left-auto md:translate-x-0"
      />

      {/* Main hero content */}
      <div className="relative z-20 mx-auto flex min-h-[600px] w-full max-w-[850px] flex-col items-center justify-center px-6 pb-[60px] pt-[90px] text-center md:min-h-[720px] md:pb-[80px] md:pt-[120px]">
        <h1 className="max-w-[300px] text-[30px] font-bold leading-[1.1] tracking-[-1px] text-[#F5F8F6] sm:max-w-[420px] sm:text-[38px] md:max-w-[700px] md:text-[48px] md:tracking-[-2px] lg:text-[62px]">
          Fully Funded AI
          <br />
          Scholarships. Start
          <br />
          Learning{" "}
          <span className="text-[#31CA92]">Today.</span>
        </h1>

        <div className="mt-[28px] flex flex-wrap items-center justify-center gap-[12px] md:mt-[38px] md:gap-[14px]">
          <button
            type="button"
            className="rounded-full bg-[#31CA92] px-[28px] py-[13px] text-[13px] font-bold text-white transition-transform hover:scale-[1.02] md:px-[40px] md:py-[16px] md:text-[14px]"
          >
            Get Scholarship
          </button>

          <button
            type="button"
            className="rounded-full bg-[#F5F7F6] px-[28px] py-[13px] text-[13px] font-bold text-[#123D33] transition-transform hover:scale-[1.02] md:px-[39px] md:py-[16px] md:text-[14px]"
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Glow blooming upward from the divider */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-[60px] md:h-[90px]"
        style={{
          background:
            "linear-gradient(to top, rgba(49,202,146,0.5) 0%, rgba(49,202,146,0.18) 38%, transparent 100%)",
        }}
      />

      {/* Glowing section divider */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-50 h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(49,202,146,0.35) 12%, #31CA92 50%, rgba(49,202,146,0.35) 88%, transparent 100%)",
          boxShadow:
            "0 0 12px 2px rgba(49,202,146,0.85), 0 0 28px 8px rgba(0,185,138,0.45), 0 0 48px 14px rgba(49,202,146,0.22)",
        }}
      />
    </section>
  );
}