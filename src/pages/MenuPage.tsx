import Navbar from '@/components/Navbar';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Truck, Droplets, Check, Leaf, Zap, Shield } from 'lucide-react';
import { SEO, kunafaKeywords, kunafaMenuKeywords, locationKeywords } from '@/components/SEO';
import { kunafaProductSchema, breadcrumbSchema } from '@/utils/jsonLd';

export default function MenuPage() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Kunafa Menu | Order Best Turkish Kunafa Online in Delhi"
        description="View our Kunafa menu & prices. Order authentic Turkish Kunafa online with FREE delivery in Delhi. Freshly made with premium ingredients. Best Kunafa in Shaheen Bagh."
        keywords={`${kunafaKeywords}, ${kunafaMenuKeywords}, ${locationKeywords}`}
        canonical="https://www.1mysacafe.com/menu"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            kunafaProductSchema,
            breadcrumbSchema([
              { name: 'Home', url: 'https://www.1mysacafe.com' },
              { name: 'Menu', url: 'https://www.1mysacafe.com/menu' },
            ]),
          ],
        }}
      />

      <main className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Banner */}
        <header className="pt-28 pb-12 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-4"
            >
              <span className="gold-text">{typeof t('menu.title') === 'string' ? t('menu.title') : 'Our Menu'}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              {typeof t('menu.subtitle') === 'string' ? t('menu.subtitle') : 'Authentic Turkish Kunafa & Desserts'}
            </motion.p>
          </div>
        </header>

        {/* Benefits Grid - Free Delivery + Zero Sweetness */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="container mx-auto px-4 mb-10"
          aria-label="Our Benefits"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {/* Free Delivery Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-400 p-1 shadow-lg"
            >
              <div className="relative h-full rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 px-6 py-5">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <Truck className="h-24 w-24 text-amber-600" />
                </div>
                <div className="relative flex items-center gap-4">
                  <div className="rounded-full bg-amber-500 p-3 shadow-md shrink-0">
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Truck className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-lg font-bold text-amber-900">
                        {typeof t('delivery.free') === 'string' ? t('delivery.free') : 'FREE DELIVERY'}
                      </h2>
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                        {typeof t('delivery.always') === 'string' ? t('delivery.always') : 'ALWAYS'}
                      </span>
                    </div>
                    <p className="text-sm text-amber-800/80">
                      {typeof t('delivery.noCharges') === 'string' ? t('delivery.noCharges') : 'No delivery charges by us — ever!'}
                    </p>
                  </div>
                </div>

                {/* Feature tags */}
                <div className="relative mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/60 text-xs text-amber-800">
                    <Zap className="h-3 w-3" />
                    {typeof t('delivery.fast') === 'string' ? t('delivery.fast') : 'Fast delivery'}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/60 text-xs text-amber-800">
                    <Shield className="h-3 w-3" />
                    {typeof t('delivery.guaranteed') === 'string' ? t('delivery.guaranteed') : 'Guaranteed'}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Zero Sweetness Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-400 p-1 shadow-lg"
            >
              <div className="relative h-full rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 px-6 py-5">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <Droplets className="h-24 w-24 text-emerald-600" />
                </div>
                <div className="relative flex items-center gap-4">
                  <div className="rounded-full bg-emerald-500 p-3 shadow-md shrink-0">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Droplets className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-lg font-bold text-emerald-900">
                        {typeof t('customization.zeroSweetness') === 'string' ? t('customization.zeroSweetness') : 'ZERO SWEETNESS'}
                      </h2>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold">
                        {typeof t('customization.option') === 'string' ? t('customization.option') : 'OPTION'}
                      </span>
                    </div>
                    <p className="text-sm text-emerald-800/80">
                      {typeof t('customization.sugarFree') === 'string' ? t('customization.sugarFree') : '100% sugar-free customization available'}
                    </p>
                  </div>
                </div>

                {/* Feature tags */}
                <div className="relative mt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/60 text-xs text-emerald-800">
                    <Check className="h-3 w-3" />
                    {typeof t('customization.noSugar') === 'string' ? t('customization.noSugar') : 'No sugar'}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/60 text-xs text-emerald-800">
                    <Leaf className="h-3 w-3" />
                    {typeof t('customization.natural') === 'string' ? t('customization.natural') : 'Natural taste'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <section aria-label="Kunafa Menu">
          <MenuSection showAll hideHeader />
        </section>

        <Footer />
        <FloatingButtons />
      </main>
    </>
  );
}
