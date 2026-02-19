import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Utensils, Car, Truck, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MosqueSilhouette } from './RamadanDecorations';

const heroImages = [
  'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Screenshot%202026-01-16%20164250%20(1).png',
  'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Screenshot%202026-01-16%20165033.png',
  'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Screenshot%202026-01-16%20164534.png',
];

const features = [
  { icon: Utensils, label: { en: 'Dine-in', hi: 'डाइन-इन' } },
  { icon: Car, label: { en: 'Drive-through', hi: 'ड्राइव-थ्रू' } },
  { icon: Truck, label: { en: 'Delivery', hi: 'डिलीवरी' } },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const target = 257;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setReviewCount(target);
        clearInterval(timer);
      } else {
        setReviewCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center pt-24 pb-20 md:pt-28 md:pb-24">
        {/* Background Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide]}
              alt="1Mysa Cafe"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover"
            />
            {/* Premium gradient overlay — emerald to navy */}
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(160,40%,8%)/0.75] via-[hsl(220,45%,10%)/0.5] to-background" />
          </motion.div>
        </AnimatePresence>

        {/* Subtle star particles — reduced count for performance */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/30"
              animate={{ opacity: [0.15, 0.7, 0.15] }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.4 }}
              style={{ left: `${(i * 13) % 95}%`, top: `${(i * 19) % 80}%` }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-primary/30 mb-6"
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary" />
              <span className="font-bold text-white text-sm sm:text-base">4.7</span>
              <span className="text-white/40">|</span>
              <span className="text-white/90 text-sm sm:text-base">{reviewCount} {language === 'en' ? 'Reviews' : 'समीक्षाएं'}</span>
            </motion.div>

            {/* Ramadan Greeting — refined typography */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-primary text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4"
            >
              ✦ {language === 'en' ? 'Ramadan Kareem' : 'रमज़ान करीम'} ✦
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-5 leading-[1.1]"
            >
              <span className="gold-text">
                {language === 'en' ? 'Celebrate the Spirit of Ramadan' : 'रमज़ान की रूह को मनाएं'}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 font-light max-w-2xl mx-auto"
            >
              {language === 'en'
                ? 'Community · Reflection · Blessings — Kunafa, Coffee & Baklava'
                : 'समुदाय · चिंतन · आशीर्वाद — कुनाफा, कॉफी और बाकलावा'}
            </motion.p>

            {/* CTA Buttons — with premium glow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10"
            >
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-[0_4px_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_4px_40px_hsl(var(--primary)/0.5)] hover:bg-primary/90 transition-all duration-300"
              >
                ✦ {language === 'en' ? 'Explore Ramadan Specials' : 'रमज़ान स्पेशल देखें'}
              </a>

              <a
                href="https://www.zomato.com/ncr/1mysa-cafe-jasola-new-delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#E23744] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 hover:bg-[#cb303c] shadow-lg transition-all duration-300"
              >
                <span className="w-6 h-6 bg-white rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-[#E23744] font-bold text-base">Z</span>
                </span>
                {language === 'en' ? 'Order on Zomato' : 'Zomato पर ऑर्डर करें'}
              </a>

              <a
                href="https://maps.app.goo.gl/kLANE8iK1mekgQ768"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/90 text-foreground font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-white shadow-lg transition-all duration-300"
              >
                <MapPin className="w-5 h-5 flex-shrink-0" />
                {language === 'en' ? 'Get Directions' : 'दिशा-निर्देश'}
              </a>
            </motion.div>

            {/* Features badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
            >
              {features.map((feature) => (
                <div
                  key={feature.label.en}
                  className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15"
                >
                  <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium">
                    {language === 'en' ? feature.label.en : feature.label.hi}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Mosque Silhouette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 text-accent/8 z-[1]">
          <MosqueSilhouette />
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-primary w-7'
                  : 'bg-white/30 w-2 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
