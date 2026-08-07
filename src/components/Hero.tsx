import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Utensils, Car, Truck, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

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

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const en = language === "en";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-background">
      {/* soft emerald wash behind the text column */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* ── Left: message ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/40 bg-accent/10 mb-6">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-semibold text-foreground">4.7</span>
              <span className="text-border">|</span>
              <span className="text-sm text-muted-foreground">
                300+ {en ? "Google reviews" : "गूगल समीक्षाएं"}
              </span>
            </div>

            <h1 className="font-heading text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl text-foreground mb-5">
              {en ? "Turkish " : "तुर्की "}
              <span className="italic text-accent">{en ? "Kunafa" : "कुनाफ़ा"}</span>
              {en ? ", coffee & pilaf in Delhi" : ", कॉफी और पिलाफ़ दिल्ली में"}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
              {en
                ? "Sand-brewed coffee, cheese-pulled kunafa and our Indo-Uzbeki pilaf — made fresh every day at 1Mysa Café, Shaheen Bagh."
                : "रेत पर बनी कॉफी, ताज़ा कुनाफ़ा और हमारा इंडो-उज़्बेकी पिलाफ़ — रोज़ ताज़ा बनता है, 1Mysa Café, शाहीन बाग़।"}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mb-8">
              <Link
                to="/menu"
                className="px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                {en ? "View the menu" : "मेन्यू देखें"}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919310579571"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full border border-primary/25 text-foreground font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-secondary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                {en ? "Order on WhatsApp" : "WhatsApp पर ऑर्डर"}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-muted-foreground">
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
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <MapPin className="w-4 h-4 text-accent" />
                {en ? "Shaheen Bagh, New Delhi" : "शाहीन बाग़, नई दिल्ली"}
              </a>
            </div>
          </motion.div>

          {/* ── Right: image ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] sm:aspect-[5/5] lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-secondary shadow-[0_30px_60px_-30px_hsl(var(--primary)/0.45)]">
              {heroImages.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt="1Mysa Café — Turkish kunafa, coffee and pilaf"
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    currentSlide === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === index ? "bg-background w-7" : "bg-background/50 w-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* floating accent card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 px-5 py-4 rounded-2xl bg-card border border-border shadow-xl">
              <span className="font-heading text-3xl text-accent">100%</span>
              <span className="text-xs leading-tight text-muted-foreground">
                {en ? "Fresh, halal &\nhouse-made daily" : "ताज़ा, हलाल और\nरोज़ घर पर बना"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
