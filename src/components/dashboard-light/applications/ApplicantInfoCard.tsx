import { ApplicationStatusBadge } from "./ApplicationsTable";
import { Status } from "./applicationsData";

interface InfoRowProps {
  label: string;
  value: React.ReactNode;
  isTag?: boolean;
}

function InfoRow({ label, value, isTag }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between py-3">
      <span className="text-sm font-semibold" style={{ color: "#154535" }}>{label}</span>
      {isTag ? (
        value
      ) : (
        <span className="text-sm font-medium text-right" style={{ color: "#A0A5B0" }}>{value}</span>
      )}
    </div>
  );
}

interface ApplicantInfoCardProps {
  status: Status;
}

export default function ApplicantInfoCard({ status }: ApplicantInfoCardProps) {
  return (
    <div className="rounded-2xl p-6 border-0 shadow-none" style={{ backgroundColor: "#F9F9F9" }}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold" style={{ color: "#154535" }}>Applicant Info</h2>
        <span className="text-xs font-bold" style={{ color: "#154535" }}>#tacca-2026-123</span>
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
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
            style={{ color: "#31CA92", backgroundColor: "#8FF9D145" }}
          >
            Yes
          </span>
        }
      />
      <InfoRow
        label="Agreed to terms"
        isTag
        value={
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold"
            style={{ color: "#31CA92", backgroundColor: "#8FF9D145" }}
          >
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
