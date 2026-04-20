import MobileNav from "@/components/MobileNav";
import HeroSection from "@/components/HeroSection";
import OurOfferSection from "@/components/OurOfferSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import EventsSection from "@/components/EventsSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import ConsultantsCTASection from "@/components/ConsultantsCTASection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-clay flex flex-col items-center min-h-screen">
      {/* Mobile-width container — centered on desktop, full-width on phones */}
      <div className="flex flex-col items-start w-full max-w-[375px] relative overflow-x-hidden">
        <MobileNav />
        <HeroSection />
        <OurOfferSection />
        <SuccessStoriesSection />
        <EventsSection />
        <ServicesSection />
        <ReviewsSection />
        <ContactSection />
        <ConsultantsCTASection />
        <NewsletterSection />
        <Footer />
      </div>
    </div>
  );
}
