import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Utensils, Car, Truck, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const heroImages = [
  '/images/hero-kunafa.jpg',
  '/images/hero-coffee.jpg',
  '/images/hero-baklava.jpg',
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
    const target = 241;
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
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
      {/* Background Slider - Faster transition */}
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
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Gold Particles - Reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/50"
            animate={{
              y: [0, -100],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: '80%',
            }}
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

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-3 sm:mb-4 px-2"
          >
            <span className="gold-text">{language === 'en' ? 'Kunafa. Coffee. Comfort.' : 'कुनाफा। कॉफी। आराम।'}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/85 mb-6 sm:mb-8 font-light"
          >
            {language === 'en' ? 'The Heart of Shaheen Bagh' : 'शाहीन बाग का दिल'}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <a
              href="https://www.zomato.com/ncr/1mysa-cafe-jasola-new-delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#E23744] text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#cb303c] shadow-lg"
            >
              <span className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded flex items-center justify-center flex-shrink-0">
                <span className="text-[#E23744] font-bold text-base sm:text-lg">Z</span>
              </span>
              {language === 'en' ? 'Order on Zomato' : 'Zomato पर ऑर्डर करें'}
            </a>

            <a
              href="https://maps.google.com/?q=1Mysa+Cafe+Shaheen+Bagh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-white/90 text-coffee font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-white shadow-lg"
            >
              <MapPin className="w-5 h-5 flex-shrink-0" />
              {language === 'en' ? 'Get Directions' : 'दिशा-निर्देश'}
            </a>
          </motion.div>

          {/* Features - Clean badges */}
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

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
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
    </section>
  );
}
