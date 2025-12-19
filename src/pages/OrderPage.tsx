import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { motion } from 'framer-motion';
import { MapPin, Instagram, ExternalLink, MessageCircle, } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OrderPage() {
  const { t, language } = useLanguage();

  const orderPlatforms = [
    {
  name: 'WhatsApp',
  url: 'https://wa.me/919310579571',   // your existing number
  color: 'bg-[#25D366]',
  icon: MessageCircle,
  description: language === 'en'
    ? 'Order directly on WhatsApp'
    : 'व्हाट्सएप पर सीधे ऑर्डर करें',
},    {
      name: 'Zomato',
      url: 'https://www.zomato.com/ncr/1mysa-cafe-jasola-new-delhi',
      color: 'bg-[#E23744]',
      icon: () => (
        <span className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <span className="text-[#E23744] font-bold text-2xl">Z</span>
        </span>
      ),
      description: language === 'en' 
        ? 'Order your favorite Kunafa on Zomato' 
        : 'Zomato पर अपना पसंदीदा कुनाफा ऑर्डर करें',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com',
      color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
      icon: Instagram,
      description: language === 'en' 
        ? 'Follow us & DM for special orders' 
        : 'हमें फॉलो करें और स्पेशल ऑर्डर के लिए DM करें',
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img src="https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo11.jpg" alt="Order Online" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center py-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            <span className="gold-text">{t('order.title')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {t('order.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Order Platforms */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {orderPlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative p-8 bg-card rounded-3xl border border-border shadow-xl overflow-hidden"
                >
                  {/* Background Glow */}
                  <div className={`absolute inset-0 ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-2xl ${platform.color} flex items-center justify-center text-primary-foreground mb-6 shadow-lg`}>
                      <Icon />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      {platform.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {platform.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      {language === 'en' ? 'Order Now' : 'अभी ऑर्डर करें'}
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Visit Us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-muted-foreground mb-6">
              {language === 'en' 
                ? 'Or visit us at our café for the freshest experience!' 
                : 'या सबसे ताज़े अनुभव के लिए हमारे कैफे में आएं!'
              }
            </p>
            <a
              href="https://maps.app.goo.gl/kLANE8iK1mekgQ768"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gold-shimmer text-coffee font-semibold text-lg transition-all hover:scale-105"
            >
              <MapPin className="w-6 h-6" />
              {t('contact.directions')}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
