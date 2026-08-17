import DashboardGreeting from "../../components/dashboard/DashboardGreeting";
import StatsRow from "../../components/dashboard/StatsRow";
import ContinueLearningCard from "../../components/dashboard/ContinueLearningCard";
import NextLiveSessionCard from "../../components/dashboard/NextLiveSessionCard";
import CurrentAssignmentCard from "../../components/dashboard/CurrentAssignmentCard";
import CertificateProgressCard from "../../components/dashboard/CertificateProgressCard";
import CurrentCohortCard from "../../components/dashboard/CurrentCohortCard";
import LeaderboardCard from "../../components/dashboard/LeaderboardCard";

export default function DashboardPage() {
  return (
    <div className="mx-10 w-full max-w-[1500px]">
      <DashboardGreeting />
      <StatsRow />

      <section className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-[1.35fr_1fr_1fr]">
        <ContinueLearningCard />
        <NextLiveSessionCard />
        <CurrentAssignmentCard />
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <CertificateProgressCard />
        <CurrentCohortCard />
        <LeaderboardCard />
      </section>
    </div>
  );
}
