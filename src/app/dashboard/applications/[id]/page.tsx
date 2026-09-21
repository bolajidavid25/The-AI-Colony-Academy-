import ApplicationDetailScreen from "../../../../components/dashboard-light/applications/ApplicationDetailScreen";

export default function DashboardApplicationDetailPage() {
  return (
    <div className="mx-auto w-full max-w-[1600px] animate-in fade-in duration-300">
      <ApplicationDetailScreen backUrl="/dashboard/applications" />
    </div>
  );
}
