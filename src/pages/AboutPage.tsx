import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative pt-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-kunafa.jpg" alt="About 1Mysa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            <span className="gold-text">{t('about.title')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-heading font-bold text-foreground">
                {language === 'en' ? 'The Art of Kunafa' : 'कुनाफा की कला'}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{t('about.p1')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('about.p2')}</p>
              <p className="text-muted-foreground leading-relaxed">{t('about.p3')}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/images/hero-coffee.jpg"
                alt="Turkish Coffee"
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border-4 border-primary rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="gold-text">
                {language === 'en' ? 'Our Values' : 'हमारे मूल्य'}
              </span>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: language === 'en' ? 'Authenticity' : 'प्रामाणिकता',
                desc: language === 'en'
                  ? 'Traditional recipes passed down through generations'
                  : 'पीढ़ियों से चली आ रही पारंपरिक व्यंजन विधियां',
              },
              {
                title: language === 'en' ? 'Quality' : 'गुणवत्ता',
                desc: language === 'en'
                  ? 'Only the finest ingredients, sourced with care'
                  : 'केवल सबसे बेहतरीन सामग्री, देखभाल के साथ प्राप्त',
              },
              {
                title: language === 'en' ? 'Hospitality' : 'आतिथ्य',
                desc: language === 'en'
                  ? 'Every guest is treated like family'
                  : 'हर मेहमान को परिवार की तरह माना जाता है',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-card rounded-2xl border border-border text-center hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-shimmer flex items-center justify-center text-2xl font-heading font-bold text-coffee">
                  {index + 1}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
