import CertificateScreen from "../../../components/dashboard/certificate/CertificateScreen";

type PageProps = {
  searchParams?: Promise<{
    name?: string;
    course?: string;
    view?: string;
    id?: string;
  }>;
};

export default async function DashboardCertificatePage({ searchParams }: PageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const name =
    typeof resolvedSearchParams?.name === "string" && resolvedSearchParams.name.trim()
      ? resolvedSearchParams.name.trim()
      : "Jermaine Doe";

  const course =
    typeof resolvedSearchParams?.course === "string" && resolvedSearchParams.course.trim()
      ? resolvedSearchParams.course.trim()
      : "Advanced AI Marketing Course";

  const hasSpecificCourseOrView = Boolean(
    resolvedSearchParams?.course ||
      resolvedSearchParams?.id ||
      resolvedSearchParams?.view === "celebration"
  );

  return (
    <div className="mx-auto w-full max-w-[1600px]">
      <CertificateScreen
        recipientName={name}
        courseName={course}
        initialView={hasSpecificCourseOrView ? "celebration" : "list"}
      />
    </div>
  );
}
