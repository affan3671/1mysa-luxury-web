import { motion } from 'framer-motion';
import { Phone, MessageCircle, Instagram, MapPin } from 'lucide-react';

const floatingButtons = [
  {
    icon: Phone,
    label: 'Call',
    href: 'tel:+919310579571',
    bgColor: 'bg-coffee',
    delay: 0,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/919310579571',
    bgColor: 'bg-accent',
    delay: 0.1,
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com',
    bgColor: 'bg-pink-500',
    delay: 0.2,
  },
  {
    icon: MapPin,
    label: 'Directions',
    href: 'https://maps.google.com/?q=1Mysa+Cafe+Shaheen+Bagh',
    bgColor: 'bg-blue-500',
    delay: 0.3,
  },
];

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {floatingButtons.map((button, index) => {
        const Icon = button.icon;
        return (
          <motion.a
            key={button.label}
            href={button.href}
            target={button.href.startsWith('http') ? '_blank' : undefined}
            rel={button.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, scale: 0, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5 + button.delay, type: 'spring' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`group relative w-14 h-14 rounded-full ${button.bgColor} text-primary-foreground shadow-lg flex items-center justify-center transition-all pulse-glow`}
            aria-label={button.label}
          >
            <Icon className="w-6 h-6" />
            
            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1 rounded-lg bg-foreground text-background text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {button.label}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}
