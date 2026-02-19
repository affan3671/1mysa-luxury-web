import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const reviews = [
  {
    id: 1,
    name: 'Arjun Sharma',
    nameHi: 'अर्जुन शर्मा',
    rating: 5,
    text: 'The owner was generally pleasant, and I thoroughly enjoyed the ambiance. The Kunafa here is absolutely divine - crispy on the outside, perfectly gooey on the inside!',
    textHi: 'मालिक आम तौर पर सुखद थे, और मैंने माहौल का पूरा आनंद लिया। यहां की कुनाफा बिल्कुल दिव्य है - बाहर से कुरकुरी, अंदर से बिल्कुल नरम!',
    date: '2 weeks ago',
    avatar: 'AS',
  },
  {
    id: 2,
    name: 'Fatima Khan',
    nameHi: 'फातिमा खान',
    rating: 5,
    text: 'Yummy food, also loved how he behaved with his customers. The Turkish coffee is the best I have had in Delhi. Authentic taste that reminds me of Istanbul!',
    textHi: 'स्वादिष्ट खाना, साथ ही मुझे पसंद आया कि वह अपने ग्राहकों के साथ कैसे व्यवहार करते हैं। तुर्किश कॉफी दिल्ली में सबसे अच्छी है। प्रामाणिक स्वाद जो मुझे इस्तांबुल की याद दिलाता है!',
    date: '1 month ago',
    avatar: 'FK',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    nameHi: 'राहुल वर्मा',
    rating: 4,
    text: 'Great place for dessert lovers! The baklava is fresh and the portions are generous. Will definitely come back for more.',
    textHi: 'मिठाई प्रेमियों के लिए शानदार जगह! बकलावा ताज़ा है और पोर्शन उदार हैं। निश्चित रूप से और अधिक के लिए वापस आऊंगा।',
    date: '3 weeks ago',
    avatar: 'RV',
  },
  {
    id: 4,
    name: 'Priya Gupta',
    nameHi: 'प्रिया गुप्ता',
    rating: 5,
    text: 'Hidden gem in Shaheen Bagh! The Nutella Kunafa is a must-try. Perfect blend of traditional and modern flavors.',
    textHi: 'शाहीन बाघ में छिपा हुआ रत्न! नुटेला कुनाफा जरूर ट्राई करें। पारंपरिक और आधुनिक स्वादों का सही मिश्रण।',
    date: '1 week ago',
    avatar: 'PG',
  },
  {
    id: 5,
    name: 'Ahmed Ali',
    nameHi: 'अहमद अली',
    rating: 4,
    text: 'Cozy ambiance and delicious desserts. The pistachio kunafa is heavenly. Service could be faster during peak hours.',
    textHi: 'आरामदायक माहौल और स्वादिष्ट मिठाइयां। पिस्ता कुनाफा स्वर्गीय है। पीक आवर्स में सेवा तेज हो सकती है।',
    date: '2 months ago',
    avatar: 'AA',
  },
];

interface ReviewsSectionProps {
  hideHeader?: boolean;
}

export default function ReviewsSection({ hideHeader = false }: ReviewsSectionProps) {
  const [currentReview, setCurrentReview] = useState(0);
  const { t, language } = useLanguage();

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Ramadan geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-conic-gradient(hsl(var(--primary)) 0% 25%, transparent 0% 50%)', backgroundSize: '40px 40px' }} />
      {/* Decorative Quote */}
      <div className="absolute top-10 left-10 opacity-5">
        <Quote className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 rotate-180">
        <Quote className="w-32 h-32 text-primary" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="gold-text">{t('reviews.title')}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('reviews.subtitle')}
            </p>
          </motion.div>
        )}

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < reviews[currentReview].rating
                          ? 'text-primary fill-primary'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                  "{language === 'en' ? reviews[currentReview].text : reviews[currentReview].textHi}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full gold-shimmer flex items-center justify-center text-coffee font-bold text-lg">
                    {reviews[currentReview].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {language === 'en' ? reviews[currentReview].name : reviews[currentReview].nameHi}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {reviews[currentReview].date}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentReview === index
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
