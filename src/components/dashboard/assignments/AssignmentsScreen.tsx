"use client";

import { useMemo, useState } from "react";
import AssignmentDetailsDrawer from "./AssignmentDetailsDrawer";
import AssignmentRowCard from "./AssignmentRowCard";
import { ChevronDownIcon, SearchIcon } from "./AssignmentsIcons";
import {
  ASSIGNMENT_FILTER_OPTIONS,
  ASSIGNMENT_SORT_OPTIONS,
  INITIAL_ASSIGNMENTS,
  type AssignmentItem,
  type AssignmentSortOption,
  type AssignmentStatus,
  type SubmittedFile,
} from "./assignmentsData";
import SubmissionSuccessModal from "./SubmissionSuccessModal";

export default function AssignmentsScreen() {
  const [assignments, setAssignments] = useState<AssignmentItem[]>(INITIAL_ASSIGNMENTS);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All Categories" | AssignmentStatus>(
    "All Categories"
  );
  const [sortBy, setSortBy] = useState<AssignmentSortOption>("Sort By Recent");
  const [perPage, setPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submittedTitle, setSubmittedTitle] = useState<string | null>(null);

  const filteredAssignments = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = assignments.filter((item) => {
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.courseModule.toLowerCase().includes(q);
      const matchesStatus =
        statusFilter === "All Categories" || item.status === statusFilter;
      return matchesQuery && matchesStatus;
    });

    if (sortBy === "Due Soonest") {
      return [...filtered].sort((a, b) => a.dueTimestamp - b.dueTimestamp);
    }
    if (sortBy === "Title (A-Z)") {
      return [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }
    return filtered;
  }, [assignments, query, statusFilter, sortBy]);

  const totalCount = filteredAssignments.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / perPage));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedAssignments = useMemo(() => {
    const start = (safePage - 1) * perPage;
    return filteredAssignments.slice(start, start + perPage);
  }, [filteredAssignments, safePage, perPage]);

  const startItem = totalCount === 0 ? 0 : (safePage - 1) * perPage + 1;
  const endItem = Math.min(safePage * perPage, totalCount);

  const selectedAssignment = useMemo(
    () => assignments.find((item) => item.id === selectedId) ?? null,
    [assignments, selectedId]
  );

  function handleSubmitAssignment(
    assignmentId: string,
    payload: {
      files: SubmittedFile[];
    }
  ) {
    const submittedTitleMatch =
      assignments.find((item) => item.id === assignmentId)?.title ?? "Assignment";

    const nowLabel = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());

    setAssignments((prev) =>
      prev.map((item) => {
        if (item.id !== assignmentId) return item;
        return {
          ...item,
          status: "Submitted",
          rejectionReason: undefined,
          submission: {
            submittedAt: nowLabel,
            files: payload.files,
          },
        };
      })
    );

    setSelectedId(null);
    setSubmittedTitle(submittedTitleMatch);
  }

  return (
    <div className="animate-in fade-in duration-300">
      {/* Page Header & Filter Toolbar */}
      <div className="mb-6 flex flex-col gap-4 border-b border-[#8FF9D1] pb-5 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-[28px] font-bold tracking-[-0.5px] text-[#154535]">
          Assignments
        </h1>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
          {/* Search Input */}
          <label className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">
              <SearchIcon className="h-4 w-4" color="#A0A5B0" />
            </span>
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search"
              className="h-10 w-full rounded-full border border-[#F1F5F9] bg-[#F9F9F9] py-2 pr-4 pl-10 text-sm text-[#154535] outline-none placeholder:text-[#A0A5B0] focus:border-[#31CA92] sm:w-56"
            />
          </label>

          {/* Status Category Dropdown */}
          <div className="relative">
            <select
              aria-label="Filter assignments by status"
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as "All Categories" | AssignmentStatus);
                setCurrentPage(1);
              }}
              className="h-10 w-full appearance-none rounded-full border border-[#F1F5F9] bg-[#F9F9F9] py-2 pr-9 pl-4 text-xs font-medium text-[#A0A5B0] outline-none transition-colors focus:border-[#31CA92] cursor-pointer sm:w-auto"
            >
              {ASSIGNMENT_FILTER_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="text-[#154535]">
                  {opt}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
              <ChevronDownIcon className="h-3 w-3" color="#A0A5B0" />
            </span>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              aria-label="Sort assignments"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as AssignmentSortOption)}
              className="h-10 w-full appearance-none rounded-full border border-[#F1F5F9] bg-[#F9F9F9] py-2 pr-9 pl-4 text-xs font-medium text-[#A0A5B0] outline-none transition-colors focus:border-[#31CA92] cursor-pointer sm:w-auto"
            >
              {ASSIGNMENT_SORT_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="text-[#154535]">
                  {opt}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
              <ChevronDownIcon className="h-3 w-3" color="#A0A5B0" />
            </span>
          </div>
        </div>
      </div>

      {/* Assignments List */}
      {paginatedAssignments.length === 0 ? (
        <div className="rounded-2xl bg-[#F9F9F9] px-6 py-12 text-center">
          <p className="text-sm font-semibold text-[#154535]">
            No assignments match your current filter.
          </p>
          <p className="mt-1 text-xs text-[#A0A5B0]">
            Try clearing the search query or switching status categories.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setStatusFilter("All Categories");
              setCurrentPage(1);
            }}
            className="mt-4 cursor-pointer rounded-full border-0 bg-[#31CA92] px-5 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {paginatedAssignments.map((assignment) => (
            <AssignmentRowCard
              key={assignment.id}
              assignment={assignment}
              onSelect={(item) => setSelectedId(item.id)}
            />
          ))}
        </div>
      )}

      {/* Bottom Pagination Bar */}
      <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-semibold text-[#626262]">
        <div className="flex items-center gap-2.5">
          <span className="text-[#154535]">Result per page</span>
          <div className="relative">
            <select
              aria-label="Results per page"
              value={perPage}
              onChange={(e) => {
                setPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="h-8 appearance-none rounded-lg border-0 bg-white pr-6 pl-2 text-xs font-bold text-[#154535] outline-none cursor-pointer"
            >
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
            </select>
            <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2">
              <ChevronDownIcon className="h-3 w-3" color="#626262" />
            </span>
          </div>
        </div>

        <span>
          {startItem}-{endItem} of {totalCount}
        </span>

        <div className="flex items-center gap-2">
          <PaginationArrowButton
            label="«"
            ariaLabel="First page"
            disabled={safePage === 1 || totalCount === 0}
            onClick={() => setCurrentPage(1)}
          />
          <PaginationArrowButton
            label="‹"
            ariaLabel="Previous page"
            disabled={safePage === 1 || totalCount === 0}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          />
          <PaginationArrowButton
            label="›"
            ariaLabel="Next page"
            disabled={safePage >= totalPages || totalCount === 0}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          />
          <PaginationArrowButton
            label="»"
            ariaLabel="Last page"
            disabled={safePage >= totalPages || totalCount === 0}
            onClick={() => setCurrentPage(totalPages)}
          />
        </div>
      </div>

      {/* Floating Assignment Details Drawer */}
      {selectedAssignment && (
        <AssignmentDetailsDrawer
          key={selectedAssignment.id}
          assignment={selectedAssignment}
          onClose={() => setSelectedId(null)}
          onSubmitAssignment={handleSubmitAssignment}
        />
      )}

      {/* Submission Confirmation Modal */}
      <SubmissionSuccessModal
        isOpen={Boolean(submittedTitle)}
        assignmentTitle={submittedTitle ?? ""}
        onClose={() => setSubmittedTitle(null)}
      />
    </div>
  );
}

function PaginationArrowButton({
  label,
  ariaLabel,
  disabled,
  onClick,
}: {
  label: string;
  ariaLabel: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border-0 bg-transparent text-sm font-bold text-[#626262] transition-colors hover:bg-[#F9F9F9] disabled:cursor-not-allowed disabled:opacity-35"
    >
      {label}
    </button>
  );
}
