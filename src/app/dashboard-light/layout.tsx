import type { Metadata } from "next";
import Header from "../../components/dashboard-light/Header";
import Sidebar from "../../components/dashboard-light/Sidebar";
import { MobileMenuProvider } from "../../components/dashboard-light/MobileMenuContext";

export const metadata: Metadata = {
  title: "Dashboard - The AI Colony Academy",
  description: "Light mode dashboard view.",
};

export default function DashboardLightLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MobileMenuProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
        <Header />

        <div className="flex min-h-[calc(100vh-64px)]">
          <Sidebar />

          {/* Main Content Area — md:ml-[240px] offsets the fixed sidebar's width so content isn't hidden underneath it */}
          <main className="min-w-0 flex-1 bg-[#F8FAFC] px-5 py-6 md:ml-[240px] lg:px-8 lg:py-8">
            {children}
          </main>
        </div>
      </div>
    </MobileMenuProvider>
  );
}