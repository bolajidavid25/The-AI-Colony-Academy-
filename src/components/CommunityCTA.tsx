export default function CommunityCTA() {
  return (
    <section
      aria-labelledby="community-cta-heading"
      className="relative z-20 mx-auto -mb-[44px] w-[calc(100%-64px)] px-0 sm:-mb-[38px] sm:w-[82%] md:w-[82%] lg:-mb-[92px] lg:w-[90%]"
    >
      <div className="relative flex aspect-[3/5] flex-col overflow-hidden rounded-[24px] border-2 border-solid border-white px-6 pt-[36vw] text-center sm:aspect-auto sm:min-h-[266px] sm:justify-center sm:rounded-[12px] sm:border sm:px-8 sm:py-10 lg:min-h-[647px] lg:rounded-[24px] lg:border-2 lg:px-16 lg:py-20">
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
            className="mx-auto max-w-[390px] text-[44px] font-bold leading-[1.08] tracking-[-1px] text-white sm:max-w-[420px] sm:text-[24px] sm:leading-[1.05] lg:max-w-[700px] lg:text-[56px] lg:leading-[1.02]"
          >
            <span className="block sm:inline">Join [X]+</span>{" "}
            <span className="block sm:inline">learners in our</span>{" "}
            <span className="block sm:inline">AI community.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[390px] text-[20px] leading-[1.2] text-white/80 sm:max-w-[300px] sm:text-[10px] sm:leading-[1.25] lg:mt-7 lg:max-w-[520px] lg:text-[20px] lg:leading-[1.2]">
            Daily AI tips, partner deals, and early cohort announcements.{" "}
            <span className="font-semibold text-[#00B98A]">Free to join.</span>
          </p>
          <button
            type="button"
            className="mx-auto mt-16 w-full max-w-[356px] rounded-full bg-[#00B98A] px-7 py-5 text-[18px] font-bold text-white transition-opacity hover:opacity-90 sm:mt-6 sm:w-[198px] sm:px-4 sm:py-3 sm:text-[10px] lg:mt-14 lg:w-[480px] lg:max-w-none lg:px-8 lg:py-6 lg:text-[20px]"
          >
            Join the WhatsApp community.
          </button>
        </div>
      </div>
    </section>
  );
}
