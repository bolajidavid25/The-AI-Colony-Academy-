import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      <DashboardHeader />
      <div className="flex min-h-[calc(100vh-64px)]">
        <DashboardSidebar />
        <main className="min-w-0 flex-1 bg-white px-5 py-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
