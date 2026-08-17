export default function CommunityCTA() {
  return (
    <section
      aria-labelledby="community-cta-heading"
      className="relative z-20 mx-auto -mb-[140px] w-[70%] px-0"
    >
      <div className="relative overflow-hidden rounded-[24px] border-2 border-solid border-white px-6 py-16 text-center lg:px-16 lg:py-20">
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
            className="text-3xl font-bold leading-tight tracking-[-1px] text-white md:text-4xl lg:text-[42px]"
          >
            Join [X]+ learners in our AI community.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/80">
            Daily AI tips, partner deals, and early cohort announcements.{" "}
            <span className="font-semibold text-[#00B98A]">Free to join.</span>
          </p>
          <button
            type="button"
            className="mt-8 rounded-full bg-[#00B98A] px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            Join the WhatsApp community.
          </button>
        </div>
      </div>
    </section>
  );
}
