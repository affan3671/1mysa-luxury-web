import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, MessageCircle, PhoneCall } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

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
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gold-text">{t('contact.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-card rounded-2xl border border-border shadow-md"
              >
                <div className="w-14 h-14 rounded-xl gold-shimmer flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-coffee" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:+919310579571"
                className="flex items-center gap-2 px-6 py-3 rounded-xl gold-shimmer text-coffee font-semibold transition-all hover:scale-105"
              >
                <PhoneCall className="w-5 h-5" />
                {t('contact.callnow')}
              </a>
              <a
                href="https://wa.me/919310579571"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                {t('contact.whatsapp')}
              </a>
              <a
                href="https://maps.google.com/?q=1Mysa+Cafe+Shaheen+Bagh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-semibold transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground"
              >
                <Navigation className="w-5 h-5" />
                {t('contact.directions')}
              </a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.735955668583!2d77.29632907547285!3d28.554093875712898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45b95c34417%3A0x74e4e8d8f8f5e5a5!2sShaheen%20Bagh%2C%20Okhla%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1702658400000!5m2!1sen!2sin"
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
