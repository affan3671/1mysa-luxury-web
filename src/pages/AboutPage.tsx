import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO, kunafaKeywords, locationKeywords } from '@/components/SEO';
import { breadcrumbSchema } from '@/utils/jsonLd';

export default function AboutPage() {
  const { t, language } = useLanguage();

  return (
    <>
      <SEO
        title="About Us | Authentic Turkish Kunafa in Delhi"
        description="Learn about 1Mysa Café - Delhi's premier destination for authentic Turkish Kunafa. Our story, values, and commitment to bringing the finest Turkish desserts to Shaheen Bagh."
        keywords={`About 1Mysa Café, Turkish Kunafa Story, Best Kunafa Shop Delhi, Authentic Turkish Desserts, Kunafa Cafe History, ${kunafaKeywords}, ${locationKeywords}`}
        canonical="https://www.1mysacafe.com/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About 1Mysa Café',
          description: 'Learn about our authentic Turkish Kunafa café in Delhi',
          url: 'https://www.1mysacafe.com/about',
          breadcrumb: breadcrumbSchema([
            { name: 'Home', url: 'https://www.1mysacafe.com' },
            { name: 'About', url: 'https://www.1mysacafe.com/about' },
          ]),
        }}
      />

      <main className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Banner */}
        <header className="relative pt-20 min-h-[60vh] flex items-center">
          <div className="absolute inset-0">
            <img
              src="https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo11.webp"
              alt="About 1Mysa Café - Best Turkish Kunafa in Delhi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center py-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-4"
            >
              <span className="gold-text">{typeof t('about.title') === 'string' ? t('about.title') : 'About Us'}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              {typeof t('about.subtitle') === 'string' ? t('about.subtitle') : 'Authentic Turkish Kunafa in the heart of Delhi'}
            </motion.p>
          </div>
        </header>

        {/* Story Section */}
        <section className="py-20 bg-secondary/30" aria-label="Our Story">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-heading font-bold text-foreground">
                  {language === 'en' ? 'The Art of 1Mysa' : '1Mysa की कला'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">{typeof t('about.p1') === 'string' ? t('about.p1') : 'We bring authentic Turkish Kunafa to Delhi'}</p>
                <p className="text-muted-foreground leading-relaxed">{typeof t('about.p2') === 'string' ? t('about.p2') : 'Premium ingredients, traditional recipes'}</p>
                <p className="text-muted-foreground leading-relaxed">{typeof t('about.p3') === 'string' ? t('about.p3') : 'Experience the best Kunafa in Shaheen Bagh'}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/2024-06-14.webp"
                  alt="1Mysa Café - Turkish Kunafa Restaurant in Delhi"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 border-4 border-primary rounded-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background" aria-label="Our Values">
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
                    ? 'Traditional Turkish Kunafa recipes passed down through generations'
                    : 'पीढ़ियों से चली आ रही पारंपरिक तुर्की कुनाफा व्यंजन विधियां',
                },
                {
                  title: language === 'en' ? 'Quality' : 'गुणवत्ता',
                  desc: language === 'en'
                    ? 'Only the finest ingredients for our Kunafa, sourced with care from Turkey'
                    : 'केवल सबसे बेहतरीन सामग्री, तुर्की से देखभाल के साथ प्राप्त',
                },
                {
                  title: language === 'en' ? 'Hospitality' : 'आतिथ्य',
                  desc: language === 'en'
                    ? 'Every guest is treated like family at our Kunafa café'
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
    </>
  );
}
