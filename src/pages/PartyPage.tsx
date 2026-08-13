import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { motion } from 'framer-motion';
import { PartyPopper, Cake, Users, MessageCircle, HeartHandshake, Music, FileDown, FileText, Presentation, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SEO, kunafaKeywords, locationKeywords } from '@/components/SEO';

export default function PartyPage({ hideHeaderFooter = false }: { hideHeaderFooter?: boolean }) {
  const { t, language } = useLanguage();

  const whatsappNumber = '919310579571';
  const whatsappMessage = encodeURIComponent(
    language === 'en'
      ? 'Hi! I would like to inquire about party/event booking at 1Mysa Café.'
      : 'नमस्ते! मैं 1Mysa कैफे में पार्टी/इवेंट बुकिंग के बारे में जानना चाहता हूं।'
  );

  // Supabase bucket URLs for the brochure files (PDF + PPT stored in the same bucket)
  const brochurePdfUrl = 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/Docs/1Mysa_Brochure_Type_Presentation.pdf';
  const brochurePptUrl = 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/Docs/1Mysa_Brochure_Type_Presentation.pptx';

  const features = [
    { icon: PartyPopper, labelEn: 'Birthday Parties', labelHi: 'जन्मदिन की पार्टियां' },
    { icon: Cake, labelEn: 'Special Events', labelHi: 'विशेष आयोजन' },
    { icon: Users, labelEn: 'Corporate Orders', labelHi: 'कॉर्पोरेट ऑर्डर' },
    { icon: HeartHandshake, labelEn: 'Wedding Functions', labelHi: 'विवाह समारोह' },
    { icon: Music, labelEn: 'Parties and Music Festivals', labelHi: 'पार्टियाँ और संगीत समारोह' },
  ];

  return (
    <>
      {!hideHeaderFooter && (
        <SEO
          title="Party & Events Catering | Authentic Turkish Desserts Delhi"
          description="Host the sweetest celebration in Delhi with 1Mysa Café! We provide premium catering for birthdays, weddings, corporate events, and music festivals with fresh Turkish Kunafa, baklava, sand coffee, and Turkish qahwa."
          keywords={`Kunafa Catering Delhi, Turkish Dessert Party, Bulk Kunafa Orders, Sand Coffee Catering, Birthday Party Shaheen Bagh, ${kunafaKeywords}, ${locationKeywords}`}
          canonical="https://www.1mysacafe.com/party"
          jsonLd={{
            '@context': 'https://schema.org',
            '@type': 'EventVenue',
            name: '1Mysa Café Party & Events',
            description: 'Premium Turkish dessert catering and cozy event venue in Shaheen Bagh, Delhi',
            url: 'https://www.1mysacafe.com/party',
            telephone: '+91-93105-79571',
            priceRange: '₹₹',
          }}
        />
      )}
      <div className={hideHeaderFooter ? "" : "min-h-screen bg-background"}>
        {!hideHeaderFooter && <Navbar />}

        {/* Hero Banner */}
        <section className={`${hideHeaderFooter ? "py-12" : "pt-28 pb-8"} bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden`}>
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-40 h-40 bg-primary rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6"
            >
              <PartyPopper className="w-5 h-5" />
              <span className="font-medium">{t('party.badge')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-heading font-bold mb-4"
            >
              <span className="gold-text">{t('party.title')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              {t('party.subtitle')}
            </motion.p>

            {/* Features / Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10 px-2"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border"
                >
                  <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                    {language === 'en' ? feature.labelEn : feature.labelHi}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Brochure Download Section — placed right after the tags, before Our Events */}
        <section className="py-10 sm:py-14 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 text-primary mb-4">
                <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base font-medium">
                  {language === 'en' ? 'Download Our Brochure' : 'हमारा ब्रोशर डाउनलोड करें'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3">
                <span className="gold-text">
                  {language === 'en' ? 'Get the Full Party Brochure' : 'पूरा पार्टी मेन्यू प्राप्त करें'}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 max-w-xl mx-auto px-2">
                {language === 'en'
                  ? 'Explore our Brochure To View Our Expertise In This Service, At Different Prestigious Locations And Events. Downloadable Presentation Available.'
                  : 'हमारे संपूर्ण कैटरिंग पैकेज, मूल्य और मेन्यू विकल्प देखें — डाउनलोड करने योग्य PDF या प्रेजेंटेशन के रूप में उपलब्ध।'}
              </p>

              <div className="flex justify-center w-full">
                {/* PPT Download Button */}
                <motion.a
                  href={brochurePptUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-card border border-border shadow-md hover:shadow-xl hover:border-primary/60 transition-all overflow-hidden text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors flex-shrink-0">
                    <Presentation className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div className="relative flex-1 min-w-0">
                    <p className="font-heading font-semibold text-base sm:text-lg mb-0.5 truncate">
                      {language === 'en' ? 'PPT Presentation' : 'PPT प्रेजेंटेशन'}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {language === 'en' ? 'Great for planning meetings' : 'प्लानिंग मीटिंग के लिए उपयुक्त'}
                    </p>
                  </div>
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/15 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                    <Download className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Media Section - Videos & Photos (Our Events) */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-heading font-bold text-center mb-8"
            >
              <span className="gold-text">{t('party.gallery')}</span>
            </motion.h2>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

              {/* VIDEO 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-lg"
              >
                <video
                  src="https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/videos/event_1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  poster="/images/party-poster-1.jpg"
                />
              </motion.div>

              {/* VIDEO 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-lg"
              >
                <video
                  src="https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/videos/event_2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  poster="/images/party-poster-2.jpg"
                />
              </motion.div>

              {/* VIDEO 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-lg"
              >
                <video
                  src="https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/videos/event_3.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  poster="/images/party-poster-3.jpg"
                />
              </motion.div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              {/* PHOTO PLACEHOLDER 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-xl overflow-hidden bg-card border border-border shadow-md"
              >
                <img
                  src="https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/event_photo_1.webp"
                  alt="Party event"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                  <p className="text-muted-foreground text-xs">Photo 1</p>
                </div>
              </motion.div>

              {/* PHOTO PLACEHOLDER 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="aspect-square rounded-xl overflow-hidden bg-card border border-border shadow-md"
              >
                <img
                  src="https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/event_photo_2.webp"
                  alt="Party event"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                  <p className="text-muted-foreground text-xs">Photo 2</p>
                </div>
              </motion.div>

              {/* PHOTO PLACEHOLDER 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-square rounded-xl overflow-hidden bg-card border border-border shadow-md"
              >
                <img
                  src="https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/event_photo_3.webp"
                  alt="Party event"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                  <p className="text-muted-foreground text-xs">Photo 3</p>
                </div>
              </motion.div>

              {/* PHOTO PLACEHOLDER 4 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="aspect-square rounded-xl overflow-hidden bg-card border border-border shadow-md"
              >
                <img
                  src="https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/event_photo_4.webp"
                  alt="Party event"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                  <p className="text-muted-foreground text-xs">Photo 4</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                <span className="gold-text">{t('party.cta.title')}</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                {t('party.cta.subtitle')}
              </p>

              {/* WhatsApp Button */}
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <MessageCircle className="w-6 h-6" />
                {t('party.cta.button')}
              </motion.a>

              {/*<p className="text-sm text-muted-foreground mt-4">
                {t('party.cta.response')}
              </p>*/}
            </motion.div>
          </div>
        </section>

        {!hideHeaderFooter && <Footer />}
        {!hideHeaderFooter && <FloatingButtons />}
      </div>
    </>
  );
}