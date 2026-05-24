import Navbar from '@/components/Navbar';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO, kunafaKeywords, locationKeywords } from '@/components/SEO';
import { breadcrumbSchema } from '@/utils/jsonLd';

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Gallery | Inside 1Mysa Café Delhi"
        description="Explore the visual journey of 1Mysa Café in Shaheen Bagh, Delhi. View photos of our authentic hot Turkish Kunafa, sand-boiled Turkish coffee, cozy interiors, and vibrant client moments."
        keywords={`1Mysa Cafe Photos, Turkish Desserts Delhi, Kunafa Shaheen Bagh Photos, Turkish Coffee Cafe Interior, ${kunafaKeywords}, ${locationKeywords}`}
        canonical="https://www.1mysacafe.com/gallery"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ImageGallery',
          name: '1Mysa Café Gallery',
          description: 'A visual journey of premium Turkish desserts and coffee at 1Mysa Cafe, Delhi',
          url: 'https://www.1mysacafe.com/gallery',
          publisher: {
            '@type': 'Restaurant',
            name: '1Mysa Café',
            url: 'https://www.1mysacafe.com',
          },
        }}
      />
      <main className="min-h-screen bg-background">
        <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            <span className="gold-text">{t('gallery.title')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t('gallery.subtitle')}
          </motion.p>
        </div>
      </section>

      <GallerySection hideHeader />
      <Footer />
      <FloatingButtons />
    </main>
    </>
  );
}
