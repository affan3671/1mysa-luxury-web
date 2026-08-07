import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionHeading from './SectionHeading';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-[1.75rem] overflow-hidden border border-border shadow-[0_40px_70px_-45px_hsl(var(--primary)/0.5)]">
              <img
                src="/images/2024-06-14.jpg"
                alt="Inside 1Mysa Café in Shaheen Bagh"
                loading="lazy"
                decoding="async"
                className="w-full h-[280px] sm:h-[420px] lg:h-[520px] object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <SectionHeading
              align="left"
              eyebrow={t('about.subtitle')}
              title={t('about.title')}
              className="mb-6 sm:mb-8"
            />

            <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 mt-8 border-t border-border">
              {[
                { value: '2+', label: 'Years' },
                { value: '50+', label: 'Items' },
                { value: '10K+', label: 'Customers' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-heading text-primary">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
