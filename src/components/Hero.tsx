import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Utensils, Car, Truck, CheckCircle, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { TwinklingStars, MosqueSilhouette } from './RamadanDecorations';

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
      {/* Ramadan Crescent & Text */}
      <div className="absolute top-20 left-0 right-0 z-20 pointer-events-none text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-block"
        >
          <span className="text-4xl sm:text-5xl drop-shadow-[0_0_20px_hsl(var(--primary)/0.6)]">🌙</span>
        </motion.div>
      </div>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center pt-20 pb-16 md:pt-24 md:pb-20">
        {/* Background Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentSlide]}
              alt="1Mysa Cafe"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,40%,8%)/0.7] via-[hsl(220,40%,8%)/0.4] to-background" />
          </motion.div>
        </AnimatePresence>

        {/* Twinkling Stars */}
        <TwinklingStars count={25} />

        {/* Floating Lanterns */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
          {['🏮', '🏮', '🏮', '🏮'].map((lantern, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl sm:text-3xl select-none opacity-30"
              animate={{
                y: [0, -15, 0],
                rotate: [0, i % 2 === 0 ? 8 : -8, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                left: `${5 + i * 25}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
            >
              {lantern}
            </motion.div>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/50 backdrop-blur-sm border border-primary/40 mb-4 sm:mb-6"
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary fill-primary" />
              <span className="font-bold text-white text-sm sm:text-base">4.7</span>
              <span className="text-white/60">|</span>
              <span className="text-white text-sm sm:text-base">{reviewCount} {language === 'en' ? 'Reviews' : 'समीक्षाएं'}</span>
            </motion.div>

            {/* Ramadan Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="text-primary text-sm sm:text-base font-medium tracking-widest uppercase mb-3"
            >
              ☪ {language === 'en' ? 'Ramadan Kareem' : 'रमज़ान करीम'} ☪
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-3 sm:mb-4 px-2"
            >
              <span className="gold-text">
                {language === 'en' ? 'Celebrate the Spirit of Ramadan' : 'रमज़ान की रूह को मनाएं'}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/85 mb-6 sm:mb-8 font-light"
            >
              {language === 'en'
                ? 'Community · Reflection · Blessings — Kunafa, Coffee & Baklava'
                : 'समुदाय · चिंतन · आशीर्वाद — कुनाफा, कॉफी और बाकलावा'}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            >
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-primary/90 shadow-[0_0_25px_hsl(var(--primary)/0.35)] transition-all"
              >
                🌙 {language === 'en' ? 'Explore Ramadan Specials' : 'रमज़ान स्पेशल देखें'}
              </a>

              <a
                href="https://www.zomato.com/ncr/1mysa-cafe-jasola-new-delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#E23744] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#cb303c] shadow-lg"
              >
                <span className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-[#E23744] font-bold text-base sm:text-lg">Z</span>
                </span>
                {language === 'en' ? 'Order on Zomato' : 'Zomato पर ऑर्डर करें'}
              </a>

              <a
                href="https://maps.app.goo.gl/kLANE8iK1mekgQ768"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/90 text-foreground font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-white shadow-lg"
              >
                <MapPin className="w-5 h-5 flex-shrink-0" />
                {language === 'en' ? 'Get Directions' : 'दिशा-निर्देश'}
              </a>
            </motion.div>

            {/* Features badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            >
              {features.map((feature) => (
                <div
                  key={feature.label.en}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20"
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
        <div className="absolute bottom-0 left-0 right-0 text-foreground/5 z-[1]">
          <MosqueSilhouette />
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-primary w-6'
                  : 'bg-white/40 w-2 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
