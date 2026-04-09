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


const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="menu">
        <MenuSection />
      </div>
      <AboutSection />
      <ReviewsSection />
      <GallerySection />
      <FAQs />
      <ContactSection />
      <PartyPage />
      <FloatingButtons />
    </main>
  );
};

export default Index;
