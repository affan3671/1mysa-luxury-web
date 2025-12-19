import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import AboutSection from '@/components/AboutSection';
import ReviewsSection from '@/components/ReviewsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import PartyPage from './PartyPage';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <ReviewsSection />
      <GallerySection />
      <ContactSection />
      <PartyPage />
      <FloatingButtons />
    </main>
  );
};

export default Index;
