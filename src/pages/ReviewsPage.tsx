import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import { motion } from 'framer-motion';
import { Star, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

export default function ReviewsPage() {
  const { t, language } = useLanguage();
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'en' ? 'Thank you!' : 'धन्यवाद!',
      description: language === 'en' 
        ? 'Your review has been submitted successfully.'
        : 'आपकी समीक्षा सफलतापूर्वक जमा कर दी गई है।',
    });
    setName('');
    setReview('');
    setRating(5);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-4"
          >
            <span className="gold-text">{t('reviews.title')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t('reviews.subtitle')}
          </motion.p>
        </div>
      </section>

      <ReviewsSection hideHeader />

      {/* Submit Review Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-heading font-bold text-center mb-8">
              <span className="gold-text">{t('reviews.submit')}</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl border border-border shadow-lg">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('reviews.name')}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={language === 'en' ? 'Enter your name' : 'अपना नाम दर्ज करें'}
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('reviews.rating')}
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="p-1 transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= (hoveredRating || rating)
                            ? 'text-primary fill-primary'
                            : 'text-muted'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Review */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t('reviews.review')}
                </label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder={language === 'en' ? 'Share your experience...' : 'अपना अनुभव साझा करें...'}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl gold-shimmer text-coffee font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {t('reviews.send')}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
