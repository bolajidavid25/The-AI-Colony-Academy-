import { notFound } from "next/navigation";
import { COHORTS_DATA } from "../../../../components/dashboard-light/cohorts/cohortsData";
import CohortDetailScreen from "../../../../components/dashboard-light/cohorts/CohortDetailScreen";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CohortDetailPage({ params }: Props) {
  const { id } = await params;
  const cohort = COHORTS_DATA.find((c) => c.id === id);

  if (!cohort) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-[1600px] animate-in fade-in duration-300">
      <CohortDetailScreen cohort={cohort} />
    </div>
  );
}
