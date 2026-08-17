import Image from "next/image";
import FeatureCard from "./FeatureCard";

import whyChooseBackground from "../assets/Why-Choose-TAACA/Image-1.jpg";

/*
|--------------------------------------------------------------------------
| ICONS
|--------------------------------------------------------------------------
| Leave these exactly as your current icons for now.
| We will replace/stylize icons 2, 3 and 4 separately.
|--------------------------------------------------------------------------
*/

const iconOne = (
  <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[5px] bg-[#31CA92]">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.31984 3.80774C7.91784 2.05774 10.3358 2.00474 11.0448 3.64874L11.1048 3.808L11.9118 6.168C12.0968 6.70997 12.3956 7.20525 12.7883 7.62116C13.1809 8.03708 13.6582 8.36395 14.1878 8.57974L14.4048 8.66074L16.7648 9.46674C18.5148 10.0647 18.5678 12.4827 16.9248 13.1917L16.7648 13.2517L14.4048 14.0587C13.8634 14.2436 13.368 14.5424 12.9519 14.935C12.5358 15.3276 12.2087 15.8049 11.9928 16.3347L11.9118 16.5507L11.1058 18.9117C10.5078 20.6617 8.08984 20.7147 7.38184 19.0717L7.31984 18.9117L6.51384 16.5517C6.32902 16.0103 6.03021 15.5149 5.63758 15.0988C5.24495 14.6827 4.76764 14.3556 4.23784 14.1397L4.02184 14.0587L1.66184 13.2527C-0.0891577 12.6547 -0.142158 10.2367 1.50184 9.52874L1.66184 9.46674L4.02184 8.66074C4.56308 8.4758 5.05835 8.17694 5.47427 7.78431C5.89018 7.39169 6.21705 6.91443 6.43284 6.38474L6.51384 6.168L7.31984 3.80774Z"
        fill="white"
      />
      <path
        d="M17.2128 0.359741C17.3999 0.359741 17.5833 0.41222 17.742 0.511213C17.9007 0.610206 18.0285 0.751744 18.1108 0.919741L18.1588 1.03674L18.5088 2.06274L19.5358 2.41274C19.7233 2.47644 19.8877 2.59436 20.0081 2.75156C20.1285 2.90876 20.1995 3.09816 20.2121 3.29576C20.2248 3.49337 20.1784 3.69027 20.0791 3.86153C19.9797 4.03278 19.8317 4.17068 19.6538 4.25774L19.5358 4.30574L18.5098 4.65574L18.1598 5.68274C18.096 5.87017 17.978 6.03444 17.8208 6.15473C17.6635 6.27503 17.4741 6.34593 17.2765 6.35846C17.0789 6.37099 16.882 6.32459 16.7108 6.22512C16.5396 6.12565 16.4018 5.97761 16.3148 5.79974L16.2668 5.68274L15.9168 4.65674L14.8898 4.30674C14.7024 4.24305 14.538 4.12513 14.4176 3.96793C14.2972 3.81073 14.2262 3.62132 14.2136 3.42372C14.2009 3.22612 14.2472 3.02921 14.3466 2.85795C14.446 2.6867 14.594 2.5488 14.7718 2.46174L14.8898 2.41374L15.9158 2.06374L16.2658 1.03674C16.3333 0.839167 16.4608 0.66765 16.6307 0.54624C16.8005 0.42483 17.0041 0.359616 17.2128 0.359741Z"
        fill="white"
      />
    </svg>
  </div>
);

const iconTwo = (
  <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[5px] bg-[#31CA92]">
    <span className="text-[25px] font-bold leading-none text-white">✓</span>
  </div>
);

const iconThree = (
  <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[5px] bg-[#31CA92]">
    <span className="text-[22px] font-bold leading-none text-white">♟</span>
  </div>
);

const iconFour = (
  <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[5px] bg-[#31CA92]">
    <span className="text-[22px] font-bold leading-none text-white">◈</span>
  </div>
);

/*
|--------------------------------------------------------------------------
| FEATURE CONTENT
|--------------------------------------------------------------------------
| Keep your existing screenshot-approved titles/descriptions here.
| Do not change the wording while we are working on the layout.
|--------------------------------------------------------------------------
*/

const features = [
  {
    title: "Industry Relevant Skills",
    description:
      "Learn practical skills designed to prepare you for opportunities in the rapidly evolving technology industry.",
    icon: iconOne,
  },
  {
    title: "Practical Learning",
    description:
      "Gain hands-on experience through practical projects, exercises, and real-world learning experiences.",
    icon: iconTwo,
  },
  {
    title: "Community",
    description:
      "Connect, collaborate, and grow with other ambitious learners and professionals.",
    icon: iconThree,
  },
  {
    title: "African Focus",
    description:
      "Built with the African technology ecosystem in mind, creating opportunities for the next generation.",
    icon: iconFour,
  },
];

export default function WhyChooseTaaca() {
  return (
    <section
      id="why-choose-taaca"
      className="relative w-full overflow-hidden bg-white"
    >
      {/* ================================================================
          ACTUAL SUPPLIED BACKGROUND IMAGE
          ================================================================ */}
      <Image
        src={whyChooseBackground}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* ================================================================
          SUBTLE GRADIENT

          Darker toward bottom-right and lighter toward top-left.
          This is intentionally subtle so the supplied image remains
          visible.
          ================================================================ */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.04) 48%, rgba(0,0,0,0.16) 100%)",
        }}
      />

      {/* ================================================================
          CONTENT
          ================================================================ */}
      <div className="relative z-10 mx-auto w-full max-w-[1260px] px-6 pb-[105px] pt-[92px] lg:px-8">
        {/* Heading */}
        <div className="mb-[68px]">
          <h2
            className="m-0 p-0 text-black"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "42px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "1.1",
              letterSpacing: "-1.2px",
            }}
          >
            Why Choose TAACA
          </h2>
        </div>

        {/* ================================================================
            FOUR FEATURE COLUMNS
            ================================================================ */}
        <div className="grid w-full grid-cols-1 gap-x-[68px] gap-y-[62px] sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}