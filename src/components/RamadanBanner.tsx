import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RamadanBanner() {
  const [visible, setVisible] = useState(true);
  const { language } = useLanguage();

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[hsl(220,40%,12%)] via-[hsl(250,35%,18%)] to-[hsl(220,40%,12%)] text-white py-2 px-4 text-center border-b border-primary/30"
      >
        <div className="container mx-auto flex items-center justify-center gap-3 relative">
          <span className="text-primary text-lg">☪</span>
          <p className="text-xs sm:text-sm font-medium tracking-wide">
            {language === 'en'
              ? '🌙 Ramadan Kareem! Wishing you a blessed month of peace and reflection 🤲'
              : '🌙 रमज़ान करीम! शांति और चिंतन के इस पवित्र महीने की शुभकामनाएं 🤲'}
          </p>
          <span className="text-primary text-lg">☪</span>
          <button
            onClick={() => setVisible(false)}
            className="absolute right-0 p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
