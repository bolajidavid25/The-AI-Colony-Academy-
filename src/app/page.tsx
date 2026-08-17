import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FixedScrollArrow from "../components/FixedScrollArrow";
import WhyChooseUs from "../components/WhyChooseUs";
import CohortBanner from "../components/CohortBanner";
import AvailableCourses from "../components/AvailableCourses";
import ScholarshipForm from "../components/ScholarshipForm";
import PartnerLogos from "../components/PartnerLogos";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs";
import CommunityCTA from "../components/CommunityCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#061C19]">
      <Navbar />

      <Hero />

      <FixedScrollArrow />

      <WhyChooseUs />

      <CohortBanner />

      <AvailableCourses />

      <ScholarshipForm />

      <PartnerLogos />

      <FAQ />

      <div className="bg-[#F9FAFB]">
        <ContactUs />
        <CommunityCTA />
      </div>

      <Footer />
    </main>
  );
}
