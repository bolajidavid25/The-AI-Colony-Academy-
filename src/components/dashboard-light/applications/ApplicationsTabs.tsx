import { TABS, Tab } from "./applicationsData";

interface ApplicationsTabsProps {
  activeTab: Tab;
  onSelectTab: (tab: Tab) => void;
}

export default function ApplicationsTabs({ activeTab, onSelectTab }: ApplicationsTabsProps) {
  return (
    <div
      className="flex w-full overflow-x-auto"
      style={{ backgroundColor: "#E7EBE9" }}
    >
      {/* Tabs take up 62% of the bar — each tab grows equally to fill that space */}
      <div className="flex" style={{ width: "62%" }}>
        {TABS.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => onSelectTab(tab)}
              className="flex-1 relative select-none whitespace-nowrap cursor-pointer text-sm font-bold transition-colors text-center"
              style={{
                height: "44px",
                color: isActive ? "#31CA92" : "#A0A5B0",
                backgroundColor: isActive ? "#8FF9D154" : "transparent",
                borderBottom: isActive ? "3px solid #31CA92" : "none",
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Remaining 38% stays empty, preserving the full-width bar */}
      <div className="flex-1" />
    </div>
  );
}
