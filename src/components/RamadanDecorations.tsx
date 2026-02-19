import { motion } from 'framer-motion';

/** Floating lanterns & stars to overlay on any section */
export function FloatingLanterns({ count = 5 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20 text-2xl sm:text-3xl select-none"
          animate={{
            y: [0, -12, 0],
            rotate: [0, i % 2 === 0 ? 5 : -5, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${10 + i * 18}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
        >
          🏮
        </motion.div>
      ))}
    </div>
  );
}

/** Twinkling stars background */
export function TwinklingStars({ count = 20 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.6, 1.2, 0.6] }}
          transition={{
            duration: 1.5 + (i % 4) * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 23) % 100}%`,
          }}
        />
      ))}
    </div>
  );
}

/** Mosque silhouette SVG for hero backgrounds */
export function MosqueSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 200"
      className={`w-full ${className}`}
      preserveAspectRatio="xMidYMax meet"
      fill="currentColor"
    >
      {/* Simplified mosque silhouette */}
      <path d="M0,200 L0,160 L50,160 L50,140 L60,100 Q80,60 100,100 L110,140 L110,160 L150,160 L150,180 L200,180 L200,140 L220,140 L220,120 Q240,80 260,120 L260,140 L280,140 L280,180 L350,180 L350,130 L360,90 Q380,30 400,90 L410,130 L410,180 L480,180 L480,140 L500,140 L500,120 Q520,80 540,120 L540,140 L560,140 L560,180 L650,180 L650,160 L690,160 L690,140 L700,100 Q720,60 740,100 L750,140 L750,160 L800,160 L800,200 Z" />
      {/* Crescent on dome */}
      <circle cx="400" cy="25" r="12" />
      <circle cx="406" cy="23" r="10" fill="hsl(220,40%,8%)" />
    </svg>
  );
}
