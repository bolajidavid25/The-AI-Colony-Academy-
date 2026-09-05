export default function CommunityCTA() {
  return (
    <section
      aria-labelledby="community-cta-heading"
      className="relative z-20 mx-auto -mb-[44px] w-[calc(100%-64px)] px-0 sm:mb-20 sm:w-[90%] md:w-[80%] lg:mb-24 lg:w-[70%]"
    >
      <div className="relative flex aspect-[3/5] flex-col overflow-hidden rounded-[24px] border-2 border-solid border-white px-6 pt-[36vw] text-center sm:aspect-auto sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[#002B1F]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(49,202,146,0.35) 0%, transparent 55%), radial-gradient(ellipse at 70% 80%, rgba(0,185,138,0.28) 0%, transparent 50%), radial-gradient(ellipse at center, rgba(0,60,45,0.6) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2
            id="community-cta-heading"
            className="mx-auto max-w-[390px] text-[44px] font-bold leading-[1.08] tracking-[-1px] text-white sm:max-w-[520px] sm:text-[100px] lg:text-[100px]"
          >
            <span className="block sm:inline">Join [X]+</span>{" "}
            <span className="block sm:inline">learners in our</span>{" "}
            <span className="block sm:inline">AI community.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[390px] text-[20px] leading-[1.2] text-white/80 sm:max-w-none sm:text-[15px]">
            Daily AI tips, partner deals, and early cohort announcements.{" "}
            <span className="font-semibold text-[#00B98A]">Free to join.</span>
          </p>
          <button
            type="button"
            className="mx-auto mt-16 w-full max-w-[356px] rounded-full bg-[#00B98A] px-7 py-5 text-[18px] font-bold text-white transition-opacity hover:opacity-90 sm:mt-8 sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
          >
            Join the WhatsApp community.
          </button>
        </div>
      </div>
    </section>
  );
}
