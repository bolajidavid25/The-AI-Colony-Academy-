import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function DashboardStudentDetailRedirect({ params }: Props) {
  const { id } = await params;
  redirect(`/dashboard-light/students/${id}`);
}
