import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import PartyPage from './PartyPage';
import FloatingButtons from '@/components/FloatingButtons';
import FAQs from './FAQs';
import RamadanBanner from '@/components/RamadanBanner';
import RamadanCountdown from '@/components/RamadanCountdown';
import RamadanDivider from '@/components/RamadanDivider';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <RamadanBanner />
      <Navbar />
      <Hero />
      <RamadanCountdown />
      <RamadanDivider />
      <div id="menu">
        <MenuSection />
      </div>
      <RamadanDivider />
      <AboutSection />
      <RamadanDivider />
      <ReviewsSection />
      <RamadanDivider />
      <GallerySection />
      <RamadanDivider />
      <FAQs />
      <RamadanDivider />
      <ContactSection />
      <PartyPage />
      <FloatingButtons />
    </main>
  );
};

export default Index;
