import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

// Eid al-Fitr 2026 estimated: March 20, 2026
const EID_DATE = new Date('2026-03-20T00:00:00+05:30');

function getTimeLeft() {
  const now = new Date();
  const diff = EID_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function RamadanCountdown() {
  const [time, setTime] = useState(getTimeLeft);
  const { language } = useLanguage();

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const labels = language === 'en'
    ? { days: 'Days', hours: 'Hours', minutes: 'Min', seconds: 'Sec' }
    : { days: 'दिन', hours: 'घंटे', minutes: 'मिनट', seconds: 'सेकंड' };

  const units = [
    { value: time.days, label: labels.days },
    { value: time.hours, label: labels.hours },
    { value: time.minutes, label: labels.minutes },
    { value: time.seconds, label: labels.seconds },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[hsl(220,40%,8%)] relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
            style={{ left: `${8 + i * 8}%`, top: `${20 + (i % 4) * 18}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-3xl mb-2">☪</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-2">
            {language === 'en' ? 'Countdown to Eid' : 'ईद की उलटी गिनती'}
          </h2>
          <p className="text-white/60 text-sm mb-8">
            {language === 'en' ? 'Eid al-Fitr 2026' : 'ईद-उल-फ़ित्र 2026'}
          </p>

          <div className="flex justify-center gap-3 sm:gap-5">
            {units.map((u, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/5 border border-primary/30 backdrop-blur-sm flex items-center justify-center mb-2 shadow-[0_0_20px_hsl(var(--primary)/0.15)]">
                  <span className="text-2xl sm:text-3xl font-heading font-bold text-primary tabular-nums">
                    {String(u.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-white/50 font-medium">{u.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
