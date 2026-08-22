export default function CurrentCohortCard() {
  return (
    <article className="flex flex-col rounded-2xl border border-[#F1F5F9] bg-[#F1F5F9] p-5">
      <h2 className="mb-3 text-md font-bold text-[#154535]">Current Cohort</h2>
      <h3 className="text-base text-lg font-bold text-[#154535]">AI Engineering Cohort 2</h3>
      <p className="mt-1 text-sm text-[#154535]">Aug 5 - Sep 30, 2026</p>
      <p className="mt-5 text-sm text-[#94A3B8]">Tomorrow, July 8 2026</p>
      <p className=" text-sm text-[#94A3B8]"> 6:00PM GMT</p>
      <div className="mb-50 h-1.5 overflow-hidden rounded-full bg-[#E2E8F0]">
        <div className="h-full w-[45%] rounded-full bg-[#00B98A]" />
      </div>

        <button
          type="button"
          className="mb-6 rounded-full bg-[#00B98A] px-4 py-2.5 w-48 text-sm font-semibold text-white"
        >
          View Cohort Details
        </button>

    </article>
  );
}
