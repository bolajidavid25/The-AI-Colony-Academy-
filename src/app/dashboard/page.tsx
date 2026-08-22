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
    <main className="min-h-screen w-full overflow-x-hidden bg-[#FFF]">
      <div className="mx-auto w-full max-w-[1500px] px-6 py-6 lg:px-10">
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
    </main>
  );
}
