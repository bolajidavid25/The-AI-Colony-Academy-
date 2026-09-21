import { ChevronDownIcon } from "./ApplicationsIcons";

export default function ApplicationsHeader() {
  return (
    <div className="mb-6 flex flex-col gap-4 bg-white sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-[#154535]">Applications</h1>
        <p className="mt-1 text-sm text-[#154535]">
          Review and Manage all incoming applications
        </p>
        {/* thin accent line */}
        <div className="mt-3 h-px w-full" style={{ backgroundColor: "#8FF9D1" }} />
      </div>

      {/* Date range button */}
      <button
        type="button"
        className="flex items-center gap-1.5 self-start rounded-lg px-3 py-2 text-sm transition-opacity hover:opacity-90 cursor-pointer"
        style={{ backgroundColor: "#F9F9F9", color: "#828282" }}
      >
        July 7 – July 26, 2026 <ChevronDownIcon color="#828282" />
      </button>
    </div>
  );
}
