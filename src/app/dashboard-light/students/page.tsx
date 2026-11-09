import type { Metadata } from "next";
import StudentsScreen from "@/components/dashboard-light/students/StudentsScreen";

export const metadata: Metadata = {
  title: "Enrolled Students - The AI Colony Academy",
  description: "Manage and monitor student progress and performance.",
};

export default function StudentsPage() {
  return (
    <div className="mx-auto w-full max-w-[1600px] animate-in fade-in duration-300">
      <StudentsScreen />
    </div>
  );
}
