import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-2xl mb-10 sm:mb-14 ${className}`}
    >
      {eyebrow && (
        <span className="section-eyebrow mb-3">
          <span className="w-6 h-px bg-accent/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground leading-[1.1] mt-2">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">{subtitle}</p>
      )}
    </motion.div>
  );
}
