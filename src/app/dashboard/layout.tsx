import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import Footer from "../../components/dashboard/Footer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-white text-[#0F172A] pb-[50px]">
      <DashboardHeader />
      <div className="flex min-h-[calc(100vh-64px)]">
        <DashboardSidebar />
        <main className="min-w-0 flex-1 bg-white px-5 py-6 md:ml-[232px] lg:px-8 lg:py-8">
          {children}
        </main>
      </div>

      {/* Floating Footer Wrapper */}
      <div className="fixed bottom-0 left-0 w-full z-[10000]">
        <Footer />
      </div>
    </div>
  );
}
