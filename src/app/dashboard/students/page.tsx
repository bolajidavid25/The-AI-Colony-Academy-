import { redirect } from "next/navigation";

export default function DashboardStudentsRedirect() {
  redirect("/dashboard-light/students");
}
