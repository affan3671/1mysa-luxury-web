import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Gallery media items - supports both images and videos
// For videos: add type: 'video' and use src for video URL
// For images: add type: 'image' (or omit type, defaults to image)
type MediaItem = {
  src: string;
  category: string;
  alt: string;
  type?: 'image' | 'video';
  poster?: string; // Optional poster image for videos
};

const galleryMedia: MediaItem[] = [
  // Images
  { src: '/images/399361128_759025669573090_1213483921279875783_n.jpg', category: 'food', alt: 'Turkish coffee', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Turkish_Coffee_Post_NEW.png', category: 'food', alt: 'Sand Caffeine Turkish Coffee', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Turkish_Coffee_Thumbnil_New_Instagram.png', category: 'food', alt: 'The Taste of Tradition', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Screenshot%202026-01-16%20164250%20(1).png', category: 'food', alt: 'The Lotus Biscoff Kunafa', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo4.png', category: 'food', alt: 'Kunafa', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Screenshot%202026-01-16%20164345.png', category: 'food', alt: 'Delicious Kunafa', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo3.png', category: 'interior', alt: 'Cafe exterior', type: 'image' },
  { src: '/images/403626269_375773254977197_8679190473259505294_n.jpg', category: 'interior', alt: 'Interior view', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo6.png', category: 'vibe', alt: 'Cafe interior', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Screenshot%202026-01-16%20165033.png', category: 'vibe', alt: 'Cafe vibe', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Screenshot%202026-01-16%20164534.png', category: 'vibe', alt: 'Cozy ambience', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Screenshot%202026-01-16%20164452.png', category: 'vibe', alt: 'Baklava', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo7.png', category: 'vibe', alt: 'Kunafa Preparation', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo8.png', category: 'vibe', alt: 'Kunafa Preparation', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo9.png', category: 'food', alt: 'Cafe menu', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo10.jpg', category: 'food', alt: 'Coffee serving', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/1Mysa_Perfect_Kunafa_Post.jpg', category: 'food', alt: 'Customize Your Kunafa', type: 'image' },
  
  // === ADD YOUR VIDEOS HERE ===
  // Example video entries:
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/videos/1Mysa_Shop_Edit-NEW.mp4', category: 'food', alt: '1Mysa Cafe', type: 'video', poster: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Screenshot%202026-01-16%20164250.png' },
  // { src: '/videos/coffee-brewing.mp4', category: 'food', alt: 'Turkish Coffee Brewing', type: 'video' },
  // { src: 'https://example.com/video.mp4', category: 'vibe', alt: 'Cafe Atmosphere', type: 'video' },
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
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const { t, language } = useLanguage();

  const filteredMedia =
    activeCategory === 'all'
      ? galleryMedia
      : galleryMedia.filter((item) => item.category === activeCategory);

  const isVideo = (item: MediaItem) => item.type === 'video';

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
            {filteredMedia.map((item, index) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedMedia(item)}
              >
                {isVideo(item) ? (
                  <>
                    {/* Video thumbnail with play icon overlay */}
                    <video
                      src={item.src}
                      poster={item.poster}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                    {/* Play icon indicator */}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center pointer-events-none">
                      <Play className="w-4 h-4 text-primary fill-primary" />
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-primary-foreground">
                    <p className="font-medium">{item.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox - supports both images and videos */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              {isVideo(selectedMedia) ? (
                <motion.video
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  src={selectedMedia.src}
                  poster={selectedMedia.poster}
                  muted
                  loop
                  autoPlay
                  playsInline
                  controls
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              ) : (
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  src={selectedMedia.src}
                  alt="Gallery"
                  loading="eager"
                  decoding="async"
                  className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
