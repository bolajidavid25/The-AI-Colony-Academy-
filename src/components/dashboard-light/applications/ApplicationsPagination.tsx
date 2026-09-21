import { ChevronDownIcon } from "./ApplicationsIcons";

interface ApplicationsPaginationProps {
  currentPage: number;
  totalPages: number;
  perPage: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

export default function ApplicationsPagination({
  currentPage,
  totalPages,
  perPage,
  totalCount,
  onPageChange,
}: ApplicationsPaginationProps) {
  const startItem = totalCount === 0 ? 0 : (currentPage - 1) * perPage + 1;
  const endItem = Math.min(currentPage * perPage, totalCount);

  return (
    <div
      className="flex flex-col gap-3 rounded-b-xl px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      {/* Result Info */}
      <div className="flex items-center gap-2.5 text-sm font-semibold" style={{ color: "#626262" }}>
        <span>Result per page</span>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg border-0 bg-white px-3 py-1.5 text-sm font-bold shadow-sm transition-all hover:bg-slate-50 cursor-pointer"
          style={{ color: "#626262" }}
        >
          {perPage} <ChevronDownIcon color="#626262" size={12} />
        </button>
        <span className="ml-1">
          {startItem}–{endItem} of {totalCount}
        </span>
      </div>

      {/* Navigation Arrow Buttons */}
      <div className="flex items-center gap-2">
        <PageBtn
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          label="«"
        />
        <PageBtn
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
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
      className="flex h-9 w-9 items-center justify-center rounded-lg border-0 bg-white text-base font-bold shadow-sm disabled:opacity-40 transition-all hover:bg-slate-50 cursor-pointer"
      style={{ color: "#626262" }}
    >
      {label}
    </button>
  );
}
