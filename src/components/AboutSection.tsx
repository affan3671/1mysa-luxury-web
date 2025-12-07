import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import heroKunafa from '@/assets/hero-kunafa.jpg';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={heroKunafa}
                alt="1Mysa Cafe Interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/50 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 rounded-3xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              >
                {t('about.subtitle')}
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="gold-text">{t('about.title')}</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              {[
                { value: '2+', label: 'Years' },
                { value: '50+', label: 'Items' },
                { value: '10K+', label: 'Customers' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-heading font-bold gold-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
