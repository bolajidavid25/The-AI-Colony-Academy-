"use client";

import React from "react";
import { ChevronDownIcon } from "./StudentsIcons";

interface StudentsPaginationProps {
  currentPage: number;
  totalPages: number;
  perPage: number;
  totalCount: number;
  onPageChange: (page: number) => void;
  onPerPageChange: (perPage: number) => void;
}

export default function StudentsPagination({
  currentPage,
  totalPages,
  perPage,
  totalCount,
  onPageChange,
  onPerPageChange,
}: StudentsPaginationProps) {
  const startItem = totalCount === 0 ? 0 : (currentPage - 1) * perPage + 1;
  const endItem = Math.min(currentPage * perPage, totalCount);

  return (
    <div
      className="flex flex-col gap-3 rounded-b-xl px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      {/* ── Result Info ── */}
      <div
        className="flex items-center gap-2.5 text-sm font-semibold"
        style={{ color: "#626262" }}
      >
        <span>Result per page</span>

        <div className="relative">
          <select
            value={perPage}
            onChange={(e) => {
              onPerPageChange(Number(e.target.value));
              onPageChange(1);
            }}
            className="flex appearance-none items-center gap-1.5 rounded-lg border-0 bg-white py-1.5 pr-7 pl-3 text-sm font-bold shadow-sm transition-all hover:bg-slate-50 outline-none cursor-pointer"
            style={{ color: "#626262" }}
          >
            <option value={5}>5</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span
            className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2"
            style={{ color: "#626262" }}
          >
            <ChevronDownIcon className="h-3 w-3" color="#626262" />
          </span>
        </div>

        <span className="ml-1">
          {startItem}–{endItem} of {totalCount}
        </span>
      </div>

      {/* ── Navigation Arrow Buttons ── */}
      <div className="flex items-center gap-2">
        <PageBtn
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1 || totalPages === 0}
          label="«"
        />
        <PageBtn
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1 || totalPages === 0}
          label="‹"
        />
        <PageBtn
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages || totalPages === 0}
          label="›"
        />
        <PageBtn
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages || totalPages === 0}
          label="»"
        />
      </div>
    </div>
  );
}

function PageBtn({
  onClick,
  disabled,
  label,
}: {
  onClick: () => void;
  disabled: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex h-9 w-9 items-center justify-center rounded-lg border-0 bg-white text-base font-bold shadow-sm disabled:opacity-40 transition-all hover:bg-slate-50 cursor-pointer select-none"
      style={{ color: "#626262" }}
    >
      <span style={{ color: "#626262" }}>{label}</span>
    </button>
  );
}
