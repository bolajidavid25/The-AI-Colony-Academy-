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
      className="relative min-h-[720px] w-full overflow-hidden bg-[#061C19]"
    >
      {/* Hero gradient:
          same dark colour at the top,
          gradually becoming lighter toward the bottom.
      */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #061C19 0%, #09261F 38%, #104137 72%, #1A5A49 100%)",
        }}
      />

      {/* Very subtle atmospheric glow at the bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[230px] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(49,202,146,0.18) 0%, rgba(49,202,146,0.05) 42%, transparent 75%)",
        }}
      />

      {/* Hero frames */}

      {/* Top left */}
      <HeroFrame
        src={hero3}
        alt="AI Colony Academy student"
        className="left-[18.5%] top-[12%]"
      />

      {/* Top right */}
      <HeroFrame
        src={hero2}
        alt="AI Colony Academy student"
        className="right-[18.5%] top-[14%]"
      />

      {/* Middle left */}
      <HeroFrame
        src={hero4}
        alt="AI Colony Academy student"
        className="left-[7.5%] top-[43%]"
      />

      {/* Middle right */}
      <HeroFrame
        src={hero1}
        alt="AI Colony Academy student"
        className="right-[7.5%] top-[40%]"
      />

      {/* Bottom left */}
      <HeroFrame
        src={hero5}
        alt="AI Colony Academy student"
        className="left-[20.5%] bottom-[8%]"
      />

      {/* Bottom right */}
      <HeroFrame
        src={hero6}
        alt="AI Colony Academy student"
        className="right-[20.5%] bottom-[9%]"
      />

      {/* Main hero content */}
      <div className="relative z-20 mx-auto flex min-h-[720px] w-full max-w-[850px] flex-col items-center justify-center px-6 pb-[80px] pt-[120px] text-center">
        <h1 className="max-w-[700px] text-[48px] font-bold leading-[1.04] tracking-[-2px] text-[#F5F8F6] md:text-[58px] lg:text-[62px]">
          Fully Funded AI
          <br />
          Scholarships. Start
          <br />
          Learning{" "}
          <span className="text-[#31CA92]">Today.</span>
        </h1>

        <div className="mt-[38px] flex items-center gap-[14px]">
          <button
            type="button"
            className="rounded-full bg-[#31CA92] px-[40px] py-[16px] text-[14px] font-bold text-white transition-transform hover:scale-[1.02]"
          >
            Get Scholarship
          </button>

          <button
            type="button"
            className="rounded-full bg-[#F5F7F6] px-[39px] py-[16px] text-[14px] font-bold text-[#123D33] transition-transform hover:scale-[1.02]"
          >
            Explore Courses
          </button>
        </div>
      </div>

      {/* Glow blooming upward from the divider */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-[90px]"
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