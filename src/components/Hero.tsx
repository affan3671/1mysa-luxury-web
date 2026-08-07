import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { MapPin, Star, Utensils, Car, Truck, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

const heroImages = [
  "https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo3.webp",
  "https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo11(1).webp",
  "https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo2.webp",
  "https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Uzbeki_Pilaf.webp",
];

const features = [
  { icon: Utensils, label: { en: "Dine-in", hi: "डाइन-इन" } },
  { icon: Car, label: { en: "Drive-through", hi: "ड्राइव-थ्रू" } },
  { icon: Truck, label: { en: "Delivery", hi: "डिलीवरी" } },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const en = language === "en";
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);
  const still = !!reduceMotion || !!isMobile;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  // Warm only the next slide — keeps mobile payload light
  useEffect(() => {
    const next = new Image();
    next.src = heroImages[(currentSlide + 1) % heroImages.length];
  }, [currentSlide]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: EASE } },
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      {/* quiet ambient wash */}
      <div className="pointer-events-none absolute -top-40 -left-32 hidden md:block w-[34rem] h-[34rem] rounded-full bg-primary/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 hidden md:block w-80 h-80 rounded-full bg-accent/[0.07] blur-3xl" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-14 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* ── Left: message ─────────────────────────── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={still ? undefined : { y: textY, opacity: fade }}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/[0.07] mb-6"
            >
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-semibold text-foreground">4.7</span>
              <span className="text-border">|</span>
              <span className="text-sm text-muted-foreground">
                300+ {en ? "Google reviews" : "गूगल समीक्षाएं"}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-heading text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl text-foreground mb-5"
            >
              {en ? "Turkish " : "तुर्की "}
              <span className="italic text-primary">{en ? "Kunafa" : "कुनाफ़ा"}</span>
              {en ? ", coffee & pilaf in Delhi" : ", कॉफी और पिलाफ़ दिल्ली में"}
            </motion.h1>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {en
                ? "Sand-brewed coffee, cheese-pulled kunafa and our Indo-Uzbeki pilaf — made fresh every day at 1Mysa Café, Shaheen Bagh."
                : "रेत पर बनी कॉफी, ताज़ा कुनाफ़ा और हमारा इंडो-उज़्बेकी पिलाफ़ — रोज़ ताज़ा बनता है, 1Mysa Café, शाहीन बाग़।"}
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <Link
                to="/menu"
                className="group px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_10px_30px_-12px_hsl(var(--primary)/0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-14px_hsl(var(--primary)/0.7)]"
              >
                {en ? "View the menu" : "मेन्यू देखें"}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href="https://wa.me/919310579571"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-colors duration-300 hover:bg-secondary"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
                {en ? "Order on WhatsApp" : "WhatsApp पर ऑर्डर"}
              </a>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
              {features.map((f) => (
                <span key={f.label.en} className="inline-flex items-center gap-2">
                  <f.icon className="w-4 h-4 text-accent" />
                  {en ? f.label.en : f.label.hi}
                </span>
              ))}
              <a
                href="https://maps.app.goo.gl/kLANE8iK1mekgQ768"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <MapPin className="w-4 h-4 text-accent" />
                {en ? "Shaheen Bagh, New Delhi" : "शाहीन बाग़, नई दिल्ली"}
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: parallax image ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[1.75rem] overflow-hidden bg-secondary shadow-[0_40px_70px_-40px_hsl(var(--primary)/0.5)]">
              <motion.div
                className="absolute inset-0 will-change-transform"
                style={still ? undefined : { y: parallaxY, scale: parallaxScale }}
              >
                {heroImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt="1Mysa Café — Turkish kunafa, coffee and pilaf"
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "low"}
                    decoding="async"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-out ${
                      currentSlide === i ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-coffee/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentSlide === index ? "bg-background w-8" : "bg-background/50 w-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
              className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 px-5 py-4 rounded-2xl bg-card border border-border shadow-xl"
            >
              <span className="font-heading text-3xl text-accent">100%</span>
              <span className="text-xs leading-tight text-muted-foreground">
                {en ? "Fresh, halal &" : "ताज़ा, हलाल और"}
                <br />
                {en ? "house-made daily" : "रोज़ ताज़ा बना"}
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
