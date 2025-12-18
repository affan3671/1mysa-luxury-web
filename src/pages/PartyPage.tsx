import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { motion } from 'framer-motion';
import { PartyPopper, Cake, Users, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PartyPage() {
  const { t, language } = useLanguage();
  
  const whatsappNumber = '919220522205';
  const whatsappMessage = encodeURIComponent(
    language === 'en' 
      ? 'Hi! I would like to inquire about party/event booking at 1Mysa Café.' 
      : 'नमस्ते! मैं 1Mysa कैफे में पार्टी/इवेंट बुकिंग के बारे में जानना चाहता हूं।'
  );

  const features = [
    { icon: PartyPopper, labelEn: 'Birthday Parties', labelHi: 'जन्मदिन की पार्टियां' },
    { icon: Cake, labelEn: 'Special Events', labelHi: 'विशेष आयोजन' },
    { icon: Users, labelEn: 'Corporate Orders', labelHi: 'कॉर्पोरेट ऑर्डर' },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
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

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">
                  {language === 'en' ? feature.labelEn : feature.labelHi}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Media Section - Videos & Photos */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold text-center mb-12"
          >
            <span className="gold-text">{t('party.gallery')}</span>
          </motion.h2>

          {/* Video Grid */}
          {/* TODO: Add your party/event videos here */}
          {/* Each video should be in a motion.div with similar styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* VIDEO PLACEHOLDER 1 */}
            {/* Replace src with your video URL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-lg"
            >
              {/* Uncomment and add your video:
              <video 
                src="/videos/party-1.mp4" 
                controls 
                className="w-full h-full object-cover"
                poster="/images/party-poster-1.jpg"
              />
              */}
              <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                <p className="text-muted-foreground text-sm">Video 1</p>
              </div>
            </motion.div>

            {/* VIDEO PLACEHOLDER 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-lg"
            >
              {/* Uncomment and add your video:
              <video 
                src="/videos/party-2.mp4" 
                controls 
                className="w-full h-full object-cover"
                poster="/images/party-poster-2.jpg"
              />
              */}
              <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                <p className="text-muted-foreground text-sm">Video 2</p>
              </div>
            </motion.div>

            {/* VIDEO PLACEHOLDER 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-video rounded-2xl overflow-hidden bg-card border border-border shadow-lg"
            >
              {/* Uncomment and add your video:
              <video 
                src="/videos/party-3.mp4" 
                controls 
                className="w-full h-full object-cover"
                poster="/images/party-poster-3.jpg"
              />
              */}
              <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                <p className="text-muted-foreground text-sm">Video 3</p>
              </div>
            </motion.div>
          </div>

          {/* Photo Grid */}
          {/* TODO: Add your party/event photos here */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* PHOTO PLACEHOLDER 1 */}
            {/* Replace src with your image path */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-xl overflow-hidden bg-card border border-border shadow-md"
            >
              {/* Uncomment and add your image:
              <img 
                src="/images/party/event-1.jpg" 
                alt="Party event" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              */}
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

            <p className="text-sm text-muted-foreground mt-4">
              {t('party.cta.response')}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
