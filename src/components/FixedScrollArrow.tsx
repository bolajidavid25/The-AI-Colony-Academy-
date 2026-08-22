"use client";

export default function FixedScrollArrow() {
  function scrollToNextSection() {
    document
      .getElementById("top-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button
      type="button"
      aria-label="Scroll to next section"
      onClick={scrollToNextSection}
      className="fixed right-[7%] bottom-50 z-[100] flex h-[52px] w-[52px] items-center justify-center rounded-[10px] bg-[#31CA92] text-white shadow-[0_8px_28px_rgba(49,202,146,0.35)] transition-transform hover:scale-[1.03]"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M7 17L14 10L21 17"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
