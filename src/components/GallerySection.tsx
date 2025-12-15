import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const galleryImages = [
  { src: '/images/hero-kunafa.jpg', category: 'food', alt: 'Kunafa' },
  { src: '/images/399361128_759025669573090_1213483921279875783_n.jpg', category: 'food', alt: 'Turkish Coffee' },
  //{ src: '/images/403859769_659643392951136_6089730639769534153_n.jpg', category: 'food', alt: 'Baklava' },
  //{ src: '/images/menu-kunafa-1.jpg', category: 'food', alt: 'Menu Kunafa' },
  //{ src: '/images/menu-kunafa-2.jpg', category: 'food', alt: 'Cheese Kunafa' },
  //{ src: '/images/menu-sweets.jpg', category: 'food', alt: 'Sweets' },
  //{ src: '/images/menu-baklava.jpg', category: 'food', alt: 'Baklava Selection' },
  //{ src: '/images/menu-coffee.jpg', category: 'vibe', alt: 'Coffee Menu' },
  { src: '/images/403626269_375773254977197_8679190473259505294_n.jpg', category: 'interior', alt: 'Interior View' },
  { src: '/images/403887309_743160247662528_3771152756126886506_n.jpg', category: 'interior', alt: 'Interior View' },
  { src: '/images/unnamed.jpg', category: 'vibe', alt: 'Cafe Vibe' },
  { src: '/images/unnamed (1).jpg', category: 'vibe', alt: 'Cozy Ambience' },
  { src: '/images/unnamed (2).jpg', category: 'vibe', alt: 'Relaxing Atmosphere' },
];

const categories = [
  { id: 'all', label: 'All', labelHi: 'सभी' },
  { id: 'food', label: 'Food', labelHi: 'खाना' },
  { id: 'vibe', label: 'Vibe', labelHi: 'माहौल' },
  { id: 'interior', label: 'Interior', labelHi: 'इंटीरियर' },
];

interface GallerySectionProps {
  hideHeader?: boolean;
}

export default function GallerySection({ hideHeader = false }: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t, language } = useLanguage();

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="gold-text">{t('gallery.title')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('gallery.subtitle')}
            </p>
          </motion.div>
        )}

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'gold-shimmer text-coffee'
                  : 'bg-card text-foreground hover:bg-primary/10 border border-border'
              }`}
            >
              {language === 'en' ? cat.label : cat.labelHi}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-primary-foreground">
                    <p className="font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={selectedImage}
                alt="Gallery"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
