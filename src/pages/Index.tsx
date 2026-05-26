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
import { SEO, kunafaKeywords, locationKeywords } from '@/components/SEO';
import { restaurantSchema, breadcrumbSchema } from '@/utils/jsonLd';

const Index = () => {
  return (
    <>
      <SEO
        title="Best Kunafa in Delhi | Best Turkish Cafe & Turkish Coffee Near Me"
        description="Indulge in the No.1 authentic Turkish Kunafa in Delhi & New Delhi at 1Mysa Café. Sand-brewed Turkish coffee, fresh baklava, and premium desserts near you in Shaheen Bagh. Free delivery!"
        keywords={`${kunafaKeywords}, ${locationKeywords}`}
        canonical="https://www.1mysacafe.com"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            restaurantSchema,
            breadcrumbSchema([{ name: 'Home', url: 'https://www.1mysacafe.com' }]),
          ],
        }}
      />
      <main className="min-h-screen bg-background">
        <Navbar />
        <header>
          <Hero />
        </header>

        <section id="menu" aria-label="Our Menu">
          <MenuSection />
        </section>

        <section aria-label="About Us">
          <AboutSection />
        </section>

        <section aria-label="Customer Reviews">
          <ReviewsSection />
        </section>

        <section aria-label="Photo Gallery">
          <GallerySection />
        </section>

        <section aria-label="Contact Us">
          <ContactSection />
        </section>

        <section aria-label="Party & Events Catering">
          <PartyPage hideHeaderFooter={true} />
        </section>

        <Footer />
        <FloatingButtons />
      </main>
    </>
  );
};

export default Index;
