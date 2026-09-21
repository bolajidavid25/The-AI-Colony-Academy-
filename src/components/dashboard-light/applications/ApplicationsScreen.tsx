"use client";

import { useState } from "react";
import ApplicationsHeader from "./ApplicationsHeader";
import ApplicationsStatsRow from "./ApplicationsStatsRow";
import ApplicationsTabs from "./ApplicationsTabs";
import ApplicationsToolbar from "./ApplicationsToolbar";
import ApplicationsTable from "./ApplicationsTable";
import ApplicationsPagination from "./ApplicationsPagination";
import { APPLICATIONS_DATA, Tab } from "./applicationsData";

export default function ApplicationsScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 7;

  // Filter applications by tab and search
  const filtered = APPLICATIONS_DATA.filter((a) => {
    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Accepted" && a.status === "Approved") ||
      a.status === activeTab;
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <div className="min-h-screen w-full">
      {/* ── Group 1: Header ── */}
      <ApplicationsHeader />

      {/* ── Group 2: Stat Cards Row ── */}
      <ApplicationsStatsRow />

      {/* ── Group 3: Table Section ── */}
      <div className="rounded-lg bg-white overflow-hidden">
        {/* Tabs */}
        <ApplicationsTabs
          activeTab={activeTab}
          onSelectTab={(tab) => {
            setActiveTab(tab);
            setCurrentPage(1);
          }}
        />

        {/* Content Container */}
        <div className="rounded-b-lg p-5 bg-white">
          {/* Toolbar */}
          <ApplicationsToolbar
            search={search}
            onSearchChange={(value) => {
              setSearch(value);
              setCurrentPage(1);
            }}
          />

          {/* Unified Table & Pagination Card Block */}
          <div className="rounded-xl overflow-hidden" style={{ backgroundColor: "#F9F9F9" }}>
            {/* Table */}
            <ApplicationsTable applications={paginated} />

            {/* Pagination */}
            <ApplicationsPagination
              currentPage={currentPage}
              totalPages={totalPages}
              perPage={perPage}
              totalCount={filtered.length}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
