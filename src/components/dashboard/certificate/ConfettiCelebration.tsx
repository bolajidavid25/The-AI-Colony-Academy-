export default function ConfettiCelebration() {
  return (
    <div
      className="pointer-events-none relative -mx-5 -mt-6 h-24 w-[calc(100%+40px)] overflow-hidden lg:-mx-8 lg:-mt-8 lg:h-28 lg:w-[calc(100%+64px)]"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1200 110"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Curled Ribbon Streamers */}
        {/* Streamer 1: Magenta (Left) */}
        <path
          d="M80 0 C70 15, 60 25, 80 38 C100 50, 70 65, 82 82 C90 92, 75 102, 85 110"
          stroke="#C026D3"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Streamer 2: Golden Amber (Left-Center) */}
        <path
          d="M210 0 C220 18, 195 30, 215 48 C230 62, 205 75, 218 92 C225 100, 212 108, 220 110"
          stroke="#F59E0B"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Streamer 3: Mint Emerald (Center-Left) */}
        <path
          d="M340 0 C330 12, 350 24, 335 36 C320 48, 345 60, 332 74 C325 84, 340 95, 330 105"
          stroke="#31CA92"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        {/* Streamer 4: Deep Purple (Center) */}
        <path
          d="M510 0 C522 14, 502 28, 520 42 C535 56, 515 70, 525 86"
          stroke="#8B5CF6"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Streamer 5: Coral Pink (Center-Right) */}
        <path
          d="M690 0 C680 16, 705 32, 690 48 C675 62, 700 76, 688 92"
          stroke="#F43F5E"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Streamer 6: Bright Yellow (Right-Center) */}
        <path
          d="M830 0 C842 15, 820 30, 838 46 C852 60, 830 74, 842 90"
          stroke="#FBBF24"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Streamer 7: Magenta / Plum (Far Right) */}
        <path
          d="M980 0 C970 18, 995 34, 982 52 C970 66, 992 82, 980 98"
          stroke="#C026D3"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Streamer 8: Mint (Right edge) */}
        <path
          d="M1090 0 C1102 16, 1080 32, 1100 48 C1115 62, 1095 78, 1108 94"
          stroke="#31CA92"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Confetti Flakes & Dots: Scattered across top */}
        {/* Left Section (0 - 300) */}
        <circle cx="45" cy="24" r="3" fill="#F43F5E" />
        <rect x="62" y="42" width="6" height="3.5" rx="1" transform="rotate(25 62 42)" fill="#31CA92" />
        <circle cx="110" cy="18" r="2.5" fill="#F59E0B" />
        <circle cx="135" cy="52" r="3.2" fill="#8B5CF6" />
        <rect x="155" y="30" width="7" height="4" rx="1" transform="rotate(-35 155 30)" fill="#C026D3" />
        <circle cx="180" cy="72" r="2.8" fill="#06B6D4" />
        <rect x="235" y="22" width="6" height="3" rx="1" transform="rotate(45 235 22)" fill="#FBBF24" />
        <circle cx="260" cy="58" r="3" fill="#31CA92" />
        <circle cx="285" cy="35" r="2.5" fill="#F43F5E" />

        {/* Center-Left Section (300 - 600) */}
        <rect x="315" y="48" width="7" height="4" rx="1" transform="rotate(-20 315 48)" fill="#8B5CF6" />
        <circle cx="365" cy="26" r="3.2" fill="#F59E0B" />
        <circle cx="390" cy="68" r="2.4" fill="#C026D3" />
        <rect x="420" y="32" width="6" height="3.5" rx="1" transform="rotate(30 420 32)" fill="#31CA92" />
        <circle cx="455" cy="18" r="3" fill="#06B6D4" />
        <circle cx="475" cy="54" r="2.8" fill="#F43F5E" />
        <rect x="545" y="38" width="7" height="4" rx="1" transform="rotate(-40 545 38)" fill="#FBBF24" />
        <circle cx="575" cy="22" r="2.5" fill="#31CA92" />

        {/* Center-Right Section (600 - 900) */}
        <circle cx="630" cy="40" r="3" fill="#8B5CF6" />
        <rect x="660" y="20" width="6" height="3.5" rx="1" transform="rotate(25 660 20)" fill="#F43F5E" />
        <circle cx="720" cy="36" r="3.2" fill="#31CA92" />
        <circle cx="750" cy="62" r="2.5" fill="#C026D3" />
        <rect x="780" y="28" width="7" height="4" rx="1" transform="rotate(-30 780 28)" fill="#06B6D4" />
        <circle cx="810" cy="50" r="3" fill="#F59E0B" />
        <rect x="865" y="35" width="6" height="3.5" rx="1" transform="rotate(45 865 35)" fill="#8B5CF6" />

        {/* Right Section (900 - 1200) */}
        <circle cx="915" cy="24" r="2.8" fill="#31CA92" />
        <circle cx="945" cy="64" r="3" fill="#F43F5E" />
        <rect x="1015" y="36" width="7" height="4" rx="1" transform="rotate(-25 1015 36)" fill="#FBBF24" />
        <circle cx="1045" cy="20" r="2.5" fill="#C026D3" />
        <circle cx="1065" cy="55" r="3.2" fill="#06B6D4" />
        <rect x="1130" y="32" width="6" height="3.5" rx="1" transform="rotate(35 1130 32)" fill="#31CA92" />
        <circle cx="1160" cy="48" r="2.8" fill="#F59E0B" />
      </svg>
    </div>
  );
}
