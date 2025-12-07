import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Utensils, Car, Truck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroKunafa from '@/assets/hero-kunafa.jpg';
import heroCoffee from '@/assets/hero-coffee.jpg';
import heroBaklava from '@/assets/hero-baklava.jpg';

const heroImages = [heroKunafa, heroCoffee, heroBaklava];

const features = [
  { icon: Utensils, key: 'feature.dinein' },
  { icon: Car, key: 'feature.drivethrough' },
  { icon: Truck, key: 'feature.delivery' },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const { t, language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const target = 241;
    const duration = 2000;
    const steps = 60;
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentSlide]}
            alt="1Mysa Cafe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </motion.div>
      </AnimatePresence>

      {/* Gold Sparkle Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 50}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 mb-8"
          >
            <Star className="w-5 h-5 text-primary fill-primary" />
            <span className="font-bold text-foreground">4.7</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-foreground">{reviewCount} {language === 'en' ? 'Reviews' : 'समीक्षाएं'}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
          >
            <span className="gold-text">{t('hero.tagline')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href="https://zomato.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 rounded-xl gold-shimmer text-coffee font-semibold text-lg flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
              {t('hero.cta.order')}
            </a>

            <a
              href="https://maps.google.com/?q=1Mysa+Cafe+Shaheen+Bagh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-background/80 backdrop-blur-md border-2 border-primary text-foreground font-semibold text-lg flex items-center gap-3 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
            >
              <MapPin className="w-6 h-6" />
              {t('hero.cta.directions')}
            </a>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur-md"
              >
                <feature.icon className="w-5 h-5 text-accent" />
                <span className="text-foreground font-medium">{t(feature.key)}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-primary w-8'
                : 'bg-muted-foreground/50 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
