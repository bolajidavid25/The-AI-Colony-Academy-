import { ApplicationStatusBadge } from "./ApplicationsTable";
import { Status } from "./applicationsData";

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
  isTag?: boolean;
}

function InfoRow({ label, value, isTag }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-[#F1F5F9] py-3 last:border-0">
      <span className="text-sm text-[#64748B]">{label}</span>
      {isTag ? (
        value
      ) : (
        <span className="text-sm font-medium text-[#0F172A] text-right">{value}</span>
      )}
    </div>
  );
}

interface ApplicantInfoCardProps {
  status: Status;
}

export default function ApplicantInfoCard({ status }: ApplicantInfoCardProps) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-[#0F172A]">Applicant Info</h2>
        <span className="text-xs text-[#94A3B8]">#tacca-2026-123</span>
      </div>

      <InfoRow label="Name" value="Jonathan Cooper" />
      <InfoRow label="Email" value="jonathan.cooper@gmail.com" />
      <InfoRow label="Phone" value="+234 9012 345 678" />
      <InfoRow label="Country" value="Nigeria" />
      <InfoRow label="State" value="Lagos" />
      <InfoRow label="Gender" value="Male" />
      <InfoRow label="Employment Status" value="Employed" />
      <InfoRow label="Educational Level" value="Bachelors Degree" />
      <InfoRow
        label="Has Prior tech experience"
        isTag
        value={
          <span className="inline-flex items-center rounded-full bg-[#DCFCE7] px-2.5 py-0.5 text-xs font-medium text-[#15803D]">
            Yes
          </span>
        }
      />
      <InfoRow
        label="Agreed to terms"
        isTag
        value={
          <span className="inline-flex items-center rounded-full bg-[#DCFCE7] px-2.5 py-0.5 text-xs font-medium text-[#15803D]">
            Yes
          </span>
        }
      />
      <InfoRow label="Course ID" value="#tacca-2026-123" />
      <InfoRow label="Date Applied" value="Jul 12, 2026" />
      <InfoRow label="Status" isTag value={<ApplicationStatusBadge status={status} />} />
    </div>
  );
}
