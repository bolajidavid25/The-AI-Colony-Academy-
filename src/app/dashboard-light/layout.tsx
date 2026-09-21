import type { Metadata } from "next";
import Header from "../../components/dashboard-light/Header";
import Sidebar from "../../components/dashboard-light/Sidebar";
import Footer from "../../components/dashboard-light/Footer";
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
      <div className="flex min-h-screen flex-col bg-white text-[#0F172A]">
        <Header />

        <div className="flex flex-1 min-h-[calc(100vh-80px)]">
          <Sidebar />

          {/* Main Content Area + Footer Column */}
          <div className="flex min-w-0 flex-1 flex-col justify-between md:ml-[240px]">
            <main className="min-w-0 flex-1 bg-white px-5 py-6 lg:px-8 lg:py-8">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </MobileMenuProvider>
  );
}