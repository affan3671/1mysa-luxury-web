import { motion } from 'framer-motion';
import { Instagram, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const quickLinks = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.menu', path: '/menu' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.gallery', path: '/gallery' },
  { key: 'nav.reviews', path: '/reviews' },
  { key: 'nav.contact', path: '/contact' },
];

const socialLinks = [
  {
    name: 'Zomato',
    url: 'https://www.zomato.com/ncr/1mysa-cafe-jasola-new-delhi',
    icon: () => (
      <span className="w-5 h-5 bg-[#E23744] rounded flex items-center justify-center">
        <span className="text-white font-bold text-sm">Z</span>
      </span>
    ),
    customStyle: 'bg-[#E23744] hover:bg-[#cb303c]',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: Instagram,
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/919310579571',
    icon: MessageCircle,
  },
];

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.jpg" alt="1Mysa Cafe" className="h-14 w-auto rounded-lg" />
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  1Mysa Café
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? '1मैसा कैफे' : '1Mysa Café'}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              {language === 'en' 
                ? 'Kunafa & Turkish Coffee – Shaheen Bagh'
                : 'कुनाफा & तुर्किश कॉफी – शाहीन बाघ'
              }
            </p>
            <p className="text-lg font-heading italic gold-text">
              "{t('footer.tagline')}"
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {t('footer.quicklinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {t('footer.connect')}
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                      social.customStyle 
                        ? social.customStyle 
                        : 'bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground'
                    }`}
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>093105 79571</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Shaheen Bagh, New Delhi</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 1Mysa Café. {t('footer.rights')}
          </p>
          <p className="text-sm text-muted-foreground">
            {language === 'en' ? 'टेस्ट में दिलावरी, दिल से हिंदुस्तानी' : 'Taste mein Dilawari, Dil se Hindustani'}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
