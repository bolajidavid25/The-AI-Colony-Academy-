import type { Metadata } from "next";
import StudentDetailScreen from "@/components/dashboard-light/students/StudentDetailScreen";
import { getStudentDetailById } from "@/components/dashboard-light/students/studentDetailData";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const student = getStudentDetailById(id);
  return {
    title: `${student.name} - Student Details | The AI Colony Academy`,
    description: `Manage and review student progress, attendance, and assignment details for ${student.name}.`,
  };
}

export default async function StudentDetailPage({ params }: Props) {
  const { id } = await params;
  const student = getStudentDetailById(id);

  return (
    <div className="mx-auto w-full max-w-[1600px] animate-in fade-in duration-300">
      <StudentDetailScreen initialData={student} studentId={id} />
    </div>
  );
}
