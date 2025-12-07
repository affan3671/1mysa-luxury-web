import Navbar from '@/components/Navbar';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MenuPage() {
  const { t } = useLanguage();

  return (
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
            <span className="gold-text">{t('menu.title')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t('menu.subtitle')}
          </motion.p>
        </div>
      </section>

      <MenuSection showAll />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
