export default function CohortBanner() {
  return (
    <section
      aria-labelledby="cohort-banner-heading"
      className="w-full bg-white px-6 py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1260px] flex-col items-center text-center">
        <h2
          id="cohort-banner-heading"
          className="max-w-4xl text-3xl font-bold leading-tight tracking-[-1px] text-[#002B1F] md:text-4xl lg:text-[42px]"
        >
          Cohort 1 starts [Date]. <br/>Limited spots.
        </h2>

        <button
          type="button"
          className="mt-8 rounded-full bg-[#00B98A] px-10 py-4 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
        >
          Apply Before [Closing Date]
        </button>
      </div>
    </section>
  );
}
