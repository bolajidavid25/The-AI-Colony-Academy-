import { SearchIcon, ExportIcon, ChevronDownIcon } from "./ApplicationsIcons";

interface ApplicationsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onExport?: () => void;
}

export default function ApplicationsToolbar({
  search,
  onSearchChange,
  onExport,
}: ApplicationsToolbarProps) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* Search Input — h-[39px] w-[442px] bg #F9F9F9 placeholder #A0A5B0 */}
      <label className="relative" style={{ width: "442px", maxWidth: "100%" }}>
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A5B0]">
          <SearchIcon />
        </span>
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg py-2 pr-4 pl-9 text-sm outline-none transition-all focus:ring-1 focus:ring-[#31CA92]"
          style={{
            height: "39px",
            backgroundColor: "#F9F9F9",
            color: "#A0A5B0",
          }}
        />
      </label>

      {/* Action Controls */}
      <div className="flex items-center gap-3">
        {/* All Courses Dropdown — bg #F9F9F9 color #A0A5B0 */}
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg px-3 text-sm cursor-pointer transition-opacity hover:opacity-80"
          style={{
            height: "39px",
            backgroundColor: "#F9F9F9",
            color: "#A0A5B0",
          }}
        >
          All Courses <ChevronDownIcon color="#A0A5B0" />
        </button>

        {/* Sort Dropdown — bg #F9F9F9 color #A0A5B0 */}
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg px-3 text-sm cursor-pointer transition-opacity hover:opacity-80"
          style={{
            height: "39px",
            backgroundColor: "#F9F9F9",
            color: "#A0A5B0",
          }}
        >
          Sort By Newest <ChevronDownIcon color="#A0A5B0" />
        </button>

        {/* Export Button — bg #8FF9D1 */}
        <button
          type="button"
          onClick={onExport}
          className="flex items-center gap-2 rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-90 cursor-pointer"
          style={{
            height: "39px",
            backgroundColor: "#8FF9D1",
            color: "#154535",
          }}
        >
          Export <ExportIcon />
        </button>
      </div>
    </div>
  );
}
