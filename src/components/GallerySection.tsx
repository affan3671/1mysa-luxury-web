import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionHeading from './SectionHeading';

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
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Kunafa%20Gallery/Ice_Cream_Kunafa_NEW_POST_1Mysa.webp', category: 'vibe', alt: 'Cafe interior', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Kunafa%20Gallery/Dubai_Pista_Spred_Kunafa_POST_New_1Mysa.webp', category: 'vibe', alt: 'Cafe vibe', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Gallery%20Section/WhatsApp%20Image%202026-06-10%20at%2011.16.12%20PM.jpeg', category: 'food', alt: 'Dubai Pista Spred Kunafa Chocolate', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Kunafa%20Gallery/1Mysa_Cafe_Post_Lotus_Biscoff_Kunafa_NEW.webp', category: 'vibe', alt: 'Cozy ambience', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Kunafa%20Gallery/1Mysa_Cafe_Post_Honey_Syrup_Kunafa_NEW.webp', category: 'vibe', alt: 'Baklava', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Summer%20Special/Peach_Ice_Tea_SUMMER_1Mysa_Cafe_POST_NEW.webp', category: 'vibe', alt: 'Kunafa Preparation', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Summer%20Special/1Mysa_Post_Tamar_Hindi_Summer_NEW-1.webp', category: 'vibe', alt: 'Kunafa Preparation', type: 'image' },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Affogato/1Mysa_Post_Pistachio_Affogato_NEW.webp', category: 'food', alt: 'Cafe menu', type: 'image' },
  { src: ('https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Affogato/1Mysa_Post_Nutella_Affogato_NEW.webp'), category: 'food', alt: ('Coffee serving'), type: ('image') },
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/Affogato/1Mysa_New_Affgato_Lotus_Biscoff_Post.webp', category: 'food', alt: 'Customize Your Kunafa', type: 'image' },

  // === ADD YOUR VIDEOS HERE ===
  // Example video entries:
  { src: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/videos/1Mysa_Shop_Edit-NEW.mp4', category: 'food', alt: '1Mysa Cafe', type: 'video', poster: 'https://zpdbjpaatpydeekemqaz.supabase.co/storage/v1/object/public/photos/photo4.webp' },
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
    <section className="py-16 sm:py-20 md:py-28 bg-background">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        {!hideHeader && (
          <SectionHeading
            eyebrow={language === 'en' ? 'Gallery' : 'गैलरी'}
            title={t('gallery.title')}
            subtitle={t('gallery.subtitle')}
          />
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground border border-border hover:bg-muted'
                }`}
            >
              {language === 'en' ? cat.label : cat.labelHi}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredMedia.map((item, index) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: Math.min(index, 4) * 0.05 }}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group border border-border ${index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
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
                      preload="none"
                      className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => {
                        e.currentTarget.pause();
                        e.currentTarget.currentTime = 0;
                      }}
                    />
                    {/* Play icon indicator */}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-background/85 backdrop-blur-sm flex items-center justify-center pointer-events-none">
                      <Play className="w-4 h-4 text-primary fill-primary" />
                    </div>
                  </>
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const img = e.currentTarget;
                      if (img.dataset.fallbackApplied) return;
                      img.dataset.fallbackApplied = "1";
                      img.src = "/placeholder.svg";
                    }}
                    className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-coffee-foreground">
                    <p className="text-sm font-medium">{item.alt}</p>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>


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
