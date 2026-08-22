export default function ContinueLearningCard() {
  return (
    <article className="relative overflow-hidden rounded-2xl z-0 bg-[#F1F5F9] p-6">
      <p className="text-s font-semibold tracking-wide text-[#154535] ">
        Continue Learning 
      </p>
      <p className="text-xs font-semibold tracking-wide text-[#154535] uppercase">
        AI Engineering
      </p>
      <p className="mt-2 text-sm text-[#154535]">Module 5</p>
      <h2 className="mt-1 max-w-[280px] text-[26px] font-bold leading-tight text-[#154535]">
        Building Autonomous Agents
      </h2>

      <div className="mt-6 max-w-[280px]">
        <div className="mb-2 flex items-center justify-between text-xs text-[#64748B]">
          <span>Progress</span>
          <span>60%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-[#E2E8F0]">
          <div className="h-full w-[60%] rounded-full bg-[#00B98A]" />
        </div>
      </div>

      <button
        type="button"
        className="mt-6 rounded-full bg-[#00B98A] px-5 py-2.5 text-sm font-semibold text-white"
      >
        Continue Lesson
      </button>

      {/* <!-- PLACEHOLDER: Replace with 3D robot illustration asset --> */}
      <div
        className="pointer-events-none absolute right-4 bottom-0 hidden h-[300px] w-[140px] sm:block"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="165" height="181"  viewBox="0 0 176 241" fill="none">
  <path d="M23.752 73.323L20.2134 72.7777C14.503 71.899 10.2871 66.9845 10.2871 61.2061V49.9184C10.2871 44.14 14.503 39.2255 20.2134 38.3468L23.752 37.8015V73.3217V73.323Z" fill="url(#paint0_linear_1_1211)"/>
  <path d="M151.744 73.323L155.283 72.7777C160.993 71.899 165.209 66.9845 165.209 61.2061V49.9184C165.209 44.14 160.993 39.2255 155.283 38.3468L151.744 37.8015V73.3217V73.323Z" fill="url(#paint1_linear_1_1211)"/>
  <path d="M46.8773 120.108C46.488 125.432 42.6974 125.844 38.4536 135.941C33.0311 148.843 31.6991 161.375 28.7886 175.16C25.1594 192.359 14.9824 193.582 10.4172 192.644C2.18945 190.954 -1.60109 181.114 0.630838 170.534C8.8719 131.494 24.4874 113.028 39.5695 113.171C42.3788 113.198 47.256 114.922 46.876 120.108H46.8773Z" fill="url(#paint2_linear_1_1211)"/>
  <path d="M128.617 120.108C129.007 125.432 132.797 125.844 137.041 135.941C142.463 148.843 143.795 161.375 146.706 175.16C150.335 192.359 160.512 193.582 165.077 192.644C173.305 190.954 177.096 181.114 174.864 170.534C166.623 131.494 151.007 113.028 135.925 113.171C133.116 113.198 128.239 114.922 128.619 120.108H128.617Z" fill="url(#paint3_linear_1_1211)"/>
  <path d="M142.936 134.381C142.936 143.899 142.052 152.615 140.409 160.489C140.244 161.292 140.069 162.087 139.885 162.872C132.383 195.1 111.873 212.55 87.748 212.55C63.6235 212.55 43.1135 195.1 35.6111 162.872C35.4271 162.087 35.2511 161.292 35.0871 160.489C33.4445 152.615 32.5605 143.899 32.5605 134.381C32.5605 113.205 54.7065 99.6353 87.748 99.6353C120.79 99.6353 142.936 113.205 142.936 134.381Z" fill="url(#paint4_linear_1_1211)"/>
  <path d="M140.409 160.489C140.243 161.292 140.069 162.087 139.885 162.872C133.45 165.106 123.791 168.108 114.347 169.704V175.911L113.54 176.095C113.424 176.122 101.713 178.758 87.7492 178.758C73.7856 178.758 62.074 176.122 61.958 176.095L61.1514 175.911V169.704C51.7077 168.108 42.048 165.106 35.6136 162.872C35.4296 162.087 35.2536 161.292 35.0896 160.489C41.5787 162.788 52.165 166.169 62.354 167.797L63.2287 167.937V174.243C66.0779 174.823 76.1149 176.683 87.7519 176.683C99.3888 176.683 109.428 174.825 112.275 174.243V167.937L113.15 167.797C123.339 166.169 133.925 162.788 140.414 160.489H140.409Z" fill="url(#paint5_linear_1_1211)"/>
  <path d="M65.2982 93.0676V106.329C65.2982 113.359 75.3499 119.059 87.7481 119.059C100.146 119.059 110.198 113.359 110.198 106.329V93.0676H65.2969H65.2982Z" fill="url(#paint6_linear_1_1211)"/>
  <path d="M111.535 17.1674C111.535 26.6484 100.885 34.3349 87.7481 34.3349C74.6112 34.3349 63.9609 26.6484 63.9609 17.1674C63.9609 7.68641 63.9609 0 87.7481 0C111.535 0 111.535 7.68641 111.535 17.1674Z" fill="url(#paint7_linear_1_1211)"/>
  <path d="M21.3789 72.8442C21.3789 80.9453 25.8134 88.3997 32.9398 92.2542C41.9982 97.1527 58.0964 101.694 86.6541 101.694C115.212 101.694 131.311 97.1527 140.368 92.2542C147.495 88.3997 151.929 80.9453 151.929 72.8442V37.3241C151.929 29.223 147.495 21.7686 140.368 17.9141C131.31 13.0155 115.212 8.47437 86.6541 8.47437C58.0964 8.47437 41.9969 13.0155 32.9398 17.9141C25.8134 21.7686 21.3789 29.223 21.3789 37.3241V72.8442Z" fill="url(#paint8_linear_1_1211)"/>
  <path d="M87.7476 95.2661C59.2219 95.2661 44.5797 90.5849 37.3186 86.6584C32.4215 84.0104 29.3789 78.8999 29.3789 73.3241V46.073C29.3789 40.4972 32.4215 35.3881 37.3186 32.7388C44.5797 28.8123 59.2219 24.1311 87.7476 24.1311C116.273 24.1311 130.916 28.8123 138.177 32.7388C143.074 35.3867 146.116 40.4972 146.116 46.073V73.3241C146.116 78.8999 143.074 84.0091 138.177 86.6584C130.916 90.5849 116.273 95.2661 87.7476 95.2661Z" fill="url(#paint9_radial_1_1211)"/>
  <path d="M68.875 60.2446C68.875 65.1445 64.9018 62.7059 60.002 62.7059C55.1021 62.7059 51.1289 65.1445 51.1289 60.2446C51.1289 55.3448 55.1021 51.3716 60.002 51.3716C64.9018 51.3716 68.875 55.3448 68.875 60.2446Z" fill="url(#paint10_radial_1_1211)"/>
  <path d="M94.8507 74.9307C94.8507 76.892 94.0561 78.6666 92.7695 79.9533C91.4842 81.2385 89.7082 82.0345 87.747 82.0345C83.8244 82.0345 80.6445 78.8546 80.6445 74.9321C80.6445 74.6521 80.7579 74.3988 80.9419 74.2148C81.1258 74.0308 81.3805 73.9174 81.6592 73.9174H93.8361C94.3961 73.9174 94.8507 74.3721 94.8507 74.9321V74.9307Z" fill="#31CA92"/>
  <path d="M124.27 60.2446C124.27 65.1445 120.296 62.7059 115.396 62.7059C110.497 62.7059 106.523 65.1445 106.523 60.2446C106.523 55.3448 110.497 51.3716 115.396 51.3716C120.296 51.3716 124.27 55.3448 124.27 60.2446Z" fill="url(#paint11_radial_1_1211)"/>
  <path d="M124.27 60.2446C124.27 65.1445 120.296 62.7059 115.396 62.7059C110.497 62.7059 106.523 65.1445 106.523 60.2446C106.523 55.3448 110.497 51.3716 115.396 51.3716C120.296 51.3716 124.27 55.3448 124.27 60.2446Z" fill="url(#paint12_radial_1_1211)"/>
  <path opacity="0.04" d="M142.935 134.381C142.935 143.899 142.051 152.615 140.41 160.489C140.245 161.292 140.069 162.087 139.886 162.872C132.383 195.1 111.873 212.55 87.7489 212.55C76.4626 212.55 65.9683 208.73 57.2246 201.365C65.591 203.317 74.4734 202.575 82.7198 200.119C102.559 194.211 119.019 178.005 125.237 158.263C130.876 140.361 127.945 120.017 117.753 104.294C133.498 109.976 142.936 120.559 142.936 134.382L142.935 134.381Z" fill="#383838"/>
  <path opacity="0.49" d="M62.2551 120.876C61.1898 123.199 58.9873 124.744 57.0407 126.397C50.9275 131.593 46.633 138.889 45.0597 146.756C44.7397 148.359 43.8544 150.479 42.2625 150.104C41.3025 149.879 40.8385 148.808 40.5612 147.862C38.3319 140.233 39.1852 131.75 42.8878 124.717C45.6104 119.547 49.8502 115.203 54.9074 112.282C56.9327 111.111 59.5152 111.474 61.0832 113.21C61.0939 113.22 61.1032 113.232 61.1139 113.243C62.9231 115.276 63.3911 118.401 62.2565 120.876H62.2551Z" fill="white"/>
  <path opacity="0.49" d="M51.4616 22.9018C38.2207 25.9911 31.3223 31.7815 27.9491 35.8414C27.1024 36.8614 25.4532 36.0307 25.7785 34.7454C27.5118 27.9243 32.1543 23.6285 36.8301 20.9966C40.8873 18.7113 45.3578 17.35 49.9123 16.2861C51.5816 15.8954 53.2776 16.826 53.8495 18.4433C53.8575 18.4647 53.8642 18.4873 53.8722 18.5087C54.5402 20.3993 53.4136 22.4485 51.4616 22.9032V22.9018Z" fill="white"/>
  <path opacity="0.24" d="M87.7481 241C105.2 241 119.347 237.843 119.347 233.949C119.347 230.056 105.2 226.899 87.7481 226.899C70.2965 226.899 56.1492 230.056 56.1492 233.949C56.1492 237.843 70.2965 241 87.7481 241Z" fill="url(#paint13_radial_1_1211)"/>
  <defs>
    <linearGradient id="paint0_linear_1_1211" x1="8.67783" y1="55.5636" x2="22.852" y2="55.5636" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E4E8EF"/>
      <stop offset="1" stop-color="#A0A5B0"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1_1211" x1="150.135" y1="55.5636" x2="164.31" y2="55.5636" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A0A5B0"/>
      <stop offset="1" stop-color="#E4E8EF"/>
    </linearGradient>
    <linearGradient id="paint2_linear_1_1211" x1="-5.60362" y1="153.023" x2="43.7654" y2="153.023" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E4E8EF"/>
      <stop offset="1" stop-color="#A0A5B0"/>
    </linearGradient>
    <linearGradient id="paint3_linear_1_1211" x1="122.992" y1="153.023" x2="172.361" y2="153.023" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A0A5B0"/>
      <stop offset="1" stop-color="#E4E8EF"/>
    </linearGradient>
    <linearGradient id="paint4_linear_1_1211" x1="87.748" y1="132.603" x2="87.748" y2="231.374" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E4E8EF"/>
      <stop offset="1" stop-color="#A0A5B0"/>
    </linearGradient>
    <linearGradient id="paint5_linear_1_1211" x1="87.7478" y1="166.429" x2="87.7478" y2="182.141" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A0A5B0"/>
      <stop offset="1" stop-color="#B6BABF"/>
    </linearGradient>
    <linearGradient id="paint6_linear_1_1211" x1="87.7481" y1="84.3346" x2="87.7481" y2="117.956" gradientUnits="userSpaceOnUse">
      <stop offset="0.21" stop-color="#E4E8EF"/>
      <stop offset="1" stop-color="#A0A5B0"/>
    </linearGradient>
    <linearGradient id="paint7_linear_1_1211" x1="87.7481" y1="12.1209" x2="87.7481" y2="0.657312" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A0A5B0"/>
      <stop offset="1" stop-color="#E4E8EF"/>
    </linearGradient>
    <linearGradient id="paint8_linear_1_1211" x1="86.6541" y1="18.9634" x2="86.6541" y2="100.505" gradientUnits="userSpaceOnUse">
      <stop stop-color="#E4E8EF"/>
      <stop offset="1" stop-color="#A0A5B0"/>
    </linearGradient>
    <radialGradient id="paint9_radial_1_1211" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(87.7476 59.4903) scale(61.9339 35.3023)">
      <stop stop-color="#1A7959"/>
      <stop offset="1" stop-color="#154535"/>
    </radialGradient>
    <radialGradient id="paint10_radial_1_1211" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60.0019 57.3421) scale(7.56242 7.56242)">
      <stop stop-color="#8FF9D1"/>
      <stop offset="1" stop-color="#31CA92"/>
    </radialGradient>
    <radialGradient id="paint11_radial_1_1211" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(115.396 -26.0952) scale(7.56241 7.56242)">
      <stop stop-color="#96F5FF"/>
      <stop offset="1" stop-color="#54E0EF"/>
    </radialGradient>
    <radialGradient id="paint12_radial_1_1211" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(115.396 57.3421) scale(7.56241 7.56242)">
      <stop stop-color="#8FF9D1"/>
      <stop offset="1" stop-color="#31CA92"/>
    </radialGradient>
    <radialGradient id="paint13_radial_1_1211" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(87.7481 233.624) scale(30.139 5.72641)">
      <stop stop-opacity="0.8"/>
      <stop offset="0.93" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>
      </div>
    </article>
  );
}
