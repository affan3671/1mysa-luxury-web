import { useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CategoryVideo, getVideosByCategory } from '@/data/categoryVideos';

// Instagram icon component
const InstagramIcon = memo(({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
));

// YouTube icon component
const YouTubeIcon = memo(({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
));

interface CategoryVideoSectionProps {
  category: 'coffee' | 'kunafa' | 'baklava';
}

export default function CategoryVideoSection({ category }: CategoryVideoSectionProps) {
  const { language } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<CategoryVideo | null>(null);
  const videos = getVideosByCategory(category);

  const instagramVideos = videos.filter((v) => v.platform === 'instagram');
  const youtubeVideos = videos.filter((v) => v.platform === 'youtube');

  const handleSelectVideo = useCallback((video: CategoryVideo) => {
    setSelectedVideo(video);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  if (videos.length === 0) {
    return (
      <div className="text-center py-8 sm:py-12">
        <p className="text-muted-foreground text-sm sm:text-base">
          {language === 'en' ? 'Videos coming soon!' : 'वीडियो जल्द आ रहे हैं!'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Instagram Reels Section */}
      {instagramVideos.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
            <h4 className="text-base sm:text-lg font-heading font-semibold text-foreground">
              {language === 'en' ? 'Watch on Instagram' : 'Instagram पर देखें'}
            </h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {instagramVideos.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                index={index}
                language={language}
                onSelect={handleSelectVideo}
              />
            ))}
          </div>
        </div>
      )}

      {/* YouTube Section */}
      {youtubeVideos.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <YouTubeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
            <h4 className="text-base sm:text-lg font-heading font-semibold text-foreground">
              {language === 'en' ? 'Watch on YouTube' : 'YouTube पर देखें'}
            </h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {youtubeVideos.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                index={index}
                language={language}
                onSelect={handleSelectVideo}
              />
            ))}
          </div>
        </div>
      )}

      {/* Video Modal */}
      <AnimatePresence mode="wait">
        {selectedVideo && (
          <VideoModal video={selectedVideo} onClose={handleCloseModal} language={language} />
        )}
      </AnimatePresence>
    </div>
  );
}

interface VideoCardProps {
  video: CategoryVideo;
  index: number;
  language: 'en' | 'hi';
  onSelect: (video: CategoryVideo) => void;
}

const VideoCard = memo(function VideoCard({ video, index, language, onSelect }: VideoCardProps) {
  const handleClick = useCallback(() => {
    onSelect(video);
  }, [onSelect, video]);

  return (
    <div
      className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border-2 border-primary/20 hover:border-primary/50 transition-colors duration-200 shadow-md hover:shadow-xl"
      onClick={handleClick}
      style={{ willChange: 'auto' }}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[9/16] sm:aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.fallbackApplied) return;
            img.dataset.fallbackApplied = "1";
            img.src = "/placeholder.svg";
          }}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110 ${
            video.platform === 'instagram' 
              ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400' 
              : 'bg-red-600'
          } shadow-lg`}>
            <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* Platform Badge */}
        <div className="absolute top-2 right-2">
          <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
            video.platform === 'instagram'
              ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white'
              : 'bg-red-600 text-white'
          }`}>
            {video.platform === 'instagram' ? (
              <InstagramIcon className="w-3 h-3" />
            ) : (
              <YouTubeIcon className="w-3 h-3" />
            )}
            <span className="hidden sm:inline">
              {video.platform === 'instagram' ? 'Reel' : 'Video'}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
          <p className="text-white text-xs sm:text-sm font-medium line-clamp-2">
            {language === 'en' ? video.title : video.titleHi}
          </p>
        </div>
      </div>
    </div>
  );
});

interface VideoModalProps {
  video: CategoryVideo;
  onClose: () => void;
  language: 'en' | 'hi';
}

const VideoModal = memo(function VideoModal({ video, onClose, language }: VideoModalProps) {
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="relative w-full max-w-3xl bg-card rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            {video.platform === 'instagram' ? (
              <InstagramIcon className="w-6 h-6 text-pink-500" />
            ) : (
              <YouTubeIcon className="w-6 h-6 text-red-500" />
            )}
            <h3 className="font-heading font-semibold text-foreground">
              {language === 'en' ? video.title : video.titleHi}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Preview / Link */}
        <div className="aspect-video bg-muted flex flex-col items-center justify-center p-6 sm:p-8">
          <img
            src={video.thumbnail}
            alt={video.title}
            loading="eager"
            decoding="async"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.dataset.fallbackApplied) return;
              img.dataset.fallbackApplied = "1";
              img.src = "/placeholder.svg";
            }}
            className="w-full h-full object-cover rounded-lg mb-4"
          />
        </div>

        {/* Action Button */}
        <div className="p-4 border-t border-border">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors duration-200 ${
              video.platform === 'instagram'
                ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white hover:opacity-90'
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            <ExternalLink className="w-5 h-5" />
            {language === 'en' 
              ? `Watch on ${video.platform === 'instagram' ? 'Instagram' : 'YouTube'}` 
              : `${video.platform === 'instagram' ? 'Instagram' : 'YouTube'} पर देखें`}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
});