import StatsRow from "../../components/dashboard-light/StatsRow";
import ApplicationOverview from "../../components/dashboard-light/ApplicationOverview";
import AtRiskStudents from "../../components/dashboard-light/AtRiskStudents";
import UpcomingLiveSessions from "../../components/dashboard-light/UpcomingLiveSessions";
import RecentAnnouncements from "../../components/dashboard-light/RecentAnnouncements";
import AssignmentsList from "../../components/dashboard-light/AssignmentsList";

export default function DashboardLightPage() {
  return (
    <div className="mx-auto w-full max-w-[1600px] animate-in fade-in duration-300">
      {/* Welcome Greeting */}
      <div className="mb-6">
        <h1 className="text-[28px] font-bold tracking-[-0.6px] text-[#0F172A]">
          Hello David, Welcome back!
        </h1>
        <p className="mt-1 text-sm font-medium text-[#94A3B8]">
          Keep going! You&apos;re doing great.
        </p>
      </div>

      {/* Metrics Cards Row */}
      <StatsRow />

      {/* Middle Section: Application Overview & At Risk Students */}
      <section className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="h-full">
          <ApplicationOverview />
        </div>
        <div className="h-full">
          <AtRiskStudents />
        </div>
      </section>

      {/* Bottom Section: Upcoming Live Sessions, Recent Announcements, Assignments */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="h-full">
          <UpcomingLiveSessions />
        </div>
        <div className="h-full">
          <RecentAnnouncements />
        </div>
        <div className="h-full">
          <AssignmentsList />
        </div>
      </section>
    </div>
  );
}
