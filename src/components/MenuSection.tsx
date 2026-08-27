import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Cake, Cookie, Sparkles, Play, ShoppingCart, Check, Crown, Droplets } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { menuItems, MenuItem } from '@/data/menuData';
import CategoryVideoSection from './CategoryVideoSection';

const categories = [
  { id: 'affogato', icon: Coffee, key: 'menu.affogato'},
  { id: 'coffee', icon: Coffee, key: 'menu.coffee'},
  { id: 'kunafa', icon: Cake, key: 'menu.kunafa'},
  { id: 'baklava', icon: Cookie, key: 'menu.baklava'},
  { id: 'summer_refreshments', icon: Droplets, key: 'menu.summer_refreshments'},
  { id: 'premium_imports', icon: Crown, key: 'menu.premium_imports'},
];

interface MenuSectionProps {
  showAll?: boolean;
  hideHeader?: boolean;
}

export default function MenuSection({ showAll = false, hideHeader = false }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('affogato');
  const [activeTab, setActiveTab] = useState<'menu' | 'videos'>('menu');
  const { t, language } = useLanguage();

  const filteredItems = showAll
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  const groupedItems = showAll
    ? categories.map((cat) => ({
        ...cat,
        items: menuItems.filter((item) => item.category === cat.id),
      }))
    : null;

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4">
              <span className="gold-text">{t('menu.title')}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              {t('menu.subtitle')}
            </p>
          </motion.div>
        )}

        {/* Category Tabs - Only show when not showing all */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setActiveTab('menu');
                  }}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-card text-foreground hover:bg-primary/10 border border-border'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t(cat.key)}
                </button>
              );
            })}
          </motion.div>
        )}

        {/* Menu/Videos Toggle - Only show when not showing all */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <div className="inline-flex bg-card rounded-xl p-1 border border-border shadow-sm">
              <button
                onClick={() => setActiveTab('menu')}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTab === 'menu'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Cake className="w-4 h-4" />
                {language === 'en' ? 'Menu' : 'मेन्यू'}
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTab === 'videos'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Play className="w-4 h-4" />
                {language === 'en' ? 'Watch Videos' : 'वीडियो देखें'}
              </button>
            </div>
          </motion.div>
        )}

        {/* Content */}
        <AnimatePresence mode="wait">
          {showAll ? (
            <div className="space-y-10 sm:space-y-16">
              {groupedItems?.map((category) => (
                <CategorySection
                  key={category.id}
                  category={category}
                  language={language}
                  t={t}
                />
              ))}
            </div>
          ) : activeTab === 'menu' ? (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {filteredItems.map((item, index) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  index={index}
                  language={language}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="videos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <CategoryVideoSection category={activeCategory as 'coffee' | 'kunafa' | 'baklava'} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Category Section component for showAll view
interface CategorySectionProps {
  category: {
    id: string;
    icon: React.ComponentType<{ className?: string }>;
    key: string;
    items: MenuItem[];
  };
  language: 'en' | 'hi';
  t: (key: string) => string;
}

function CategorySection({ category, language, t }: CategorySectionProps) {
  const [activeTab, setActiveTab] = useState<'menu' | 'videos'>('menu');

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
          <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground">
            {t(category.key)}
          </h3>
        </div>
        
        {/* Menu/Videos Toggle for each category */}
        <div className="flex items-center gap-2 ml-0 sm:ml-4">
          <div className="inline-flex bg-card rounded-lg p-0.5 border border-border shadow-sm">
            <button
              onClick={() => setActiveTab('menu')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === 'menu'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Cake className="w-3 h-3 sm:w-4 sm:h-4" />
              {language === 'en' ? 'Menu' : 'मेन्यू'}
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Play className="w-3 h-3 sm:w-4 sm:h-4" />
              {language === 'en' ? 'Videos' : 'वीडियो'}
            </button>
          </div>
        </div>
        
        <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent hidden sm:block" />
      </motion.div>
      
      <AnimatePresence mode="wait">
        {activeTab === 'menu' ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {category.items.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} language={language} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="videos"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <CategoryVideoSection category={category.id as 'coffee' | 'kunafa' | 'baklava'} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuCard({
  item,
  index,
  language,
}: {
  item: MenuItem;
  index: number;
  language: 'en' | 'hi';
}) {
  const [justAdded, setJustAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.03, duration: 0.4, ease: "easeOut" }}
      className="group relative bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-[0_8px_30px_hsl(var(--primary)/0.12)] transition-all duration-400 hover:-translate-y-1 will-change-[transform,opacity]"
    >
      {/* Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <img
          src={item.image || '/placeholder.svg'}
          alt={item.name}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const img = e.currentTarget;
            if (img.dataset.fallbackApplied) return;
            img.dataset.fallbackApplied = "1";
            img.src = "/placeholder.svg";
          }}
          style={{ objectPosition: item.imagePosition || 'center' }}
          className={`w-full h-full transition-transform duration-500 ease-out group-hover:scale-110 will-change-transform ${
            item.imageFit === 'contain' ? 'object-contain p-3' : 'object-cover'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
        
        {/* Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-1.5 sm:gap-2 z-10">
          {item.isPopular && (
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/25">
              Popular
            </span>
          )}
          {item.isNew && (
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
              New
            </span>
          )}
        </div>

        {/* Steam Animation for Coffee */}
        {item.category === 'coffee' && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-8 bg-foreground/20 rounded-full steam-animation"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        )}

        {/* Sparkle for Kunafa */}
        {item.category === 'kunafa' && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            <Sparkles className="w-6 h-6 text-primary sparkle" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3 className="text-base sm:text-lg font-heading font-bold text-foreground mb-1.5 sm:mb-2">
          {language === 'en' ? item.name : item.nameHi}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
          {language === 'en' ? item.description : item.descriptionHi}
        </p>
        <div className="flex items-center justify-between">
          {/* Price with optional strikethrough */}
          <div className="flex items-center gap-2">
            {item.originalPrice && (
              <span className="text-sm sm:text-base text-muted-foreground line-through">
                ₹{item.originalPrice}
              </span>
            )}
            <span className="text-lg sm:text-xl font-bold text-primary">
              {item.displayPrice ? (
                `₹${item.displayPrice}`
              ) : item.price === 0 ? (
                language === 'en' ? 'Price varies' : 'मूल्य भिन्न होता है'
              ) : (
                `₹${item.price}`
              )}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {/* Add to Cart */}
            <motion.button
              onClick={handleAddToCart}
              whileTap={{ scale: 0.9 }}
              className={`p-2.5 sm:p-3 rounded-xl border transition-all duration-300 ${
                justAdded
                  ? 'bg-accent text-accent-foreground border-accent'
                  : 'border-border text-foreground hover:bg-primary/10 hover:border-primary/30'
              }`}
              aria-label="Add to cart"
            >
              {justAdded ? (
                <Check className="w-5 h-5" />
              ) : (
                <ShoppingCart className="w-5 h-5" />
              )}
            </motion.button>
            {/* Order Now */}
            <motion.a
              href={`https://wa.me/919310579571?text=I Would Like To Order: ${item.name}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-primary text-primary-foreground text-sm sm:text-base font-medium transition-colors hover:bg-primary/90"
            >
              {language === 'en' ? 'Order Now' : 'ऑर्डर करें'}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}