import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, MessageCircle, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  const MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.address'),
      value: 'Al-habib masjid, near 40 futa road, next to Crumbs of Paris, Shaheen Bagh, Okhla, New Delhi, Delhi 110025',
      valueHi: 'अल-हबीब मस्जिद, 40 फुटा रोड के पास, क्रम्ब्स ऑफ पेरिस के बगल में, शाहीन बाघ, ओखला, नई दिल्ली, दिल्ली 110025',
    },
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '093105 79571',
      valueHi: '093105 79571',
    },
    {
      icon: Clock,
      label: t('contact.hours'),
      value: 'Open till 11 PM daily',
      valueHi: 'रोजाना रात 11 बजे तक खुला',
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          eyebrow={t('contact.title')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 sm:p-6 bg-card rounded-2xl border border-border"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">{item.label}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground break-words">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              <motion.a
                href="tel:+919310579571"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium transition-colors hover:bg-primary/90"
              >
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                {t('contact.callnow')}
              </motion.a>
              <a
                href="https://wa.me/919310579571"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl bg-accent text-accent-foreground font-semibold text-sm sm:text-base transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                {t('contact.whatsapp')}
              </a>
              <a
                href="https://maps.app.goo.gl/kLANE8iK1mekgQ768"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 rounded-lg sm:rounded-xl bg-card border border-border text-foreground font-semibold text-sm sm:text-base transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground"
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
                {t('contact.directions')}
              </a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[280px] sm:h-[350px] lg:h-full lg:min-h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-border"
          >
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${MAPS_KEY}&q=1Mysa+Cafe+Kunafa+Turkish+Coffee+Shaheen+Bagh+New+Delhi&zoom=17`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="1Mysa Cafe Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
