import { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Cake, Cookie, GlassWater, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { menuItems, MenuItem } from '@/data/menuData';

const categories = [
  { id: 'coffee', icon: Coffee, key: 'menu.coffee', image: '/images/399361128_759025669573090_1213483921279875783_n.jpg' },
  { id: 'kunafa', icon: Cake, key: 'menu.kunafa', image: '/images/cheese-pull-w.jpg' },
  { id: 'baklava', icon: Cookie, key: 'menu.baklava', image: '/images/403859769_659643392951136_6089730639769534153_n.jpg' },
  { id: 'drinks', icon: GlassWater, key: 'menu.drinks', image: '/images/Coca-Cola_s_Cans.jpg' },
];

interface MenuSectionProps {
  showAll?: boolean;
  hideHeader?: boolean;
}

export default function MenuSection({ showAll = false, hideHeader = false }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('kunafa');
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
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
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
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'gold-shimmer text-coffee shadow-lg scale-105'
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

        {/* Menu Items */}
        {showAll ? (
          <div className="space-y-10 sm:space-y-16">
            {groupedItems?.map((category) => (
              <div key={category.id}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
                >
                  <category.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-foreground">
                    {t(category.key)}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {category.items.map((item, index) => (
                    <MenuCard key={item.id} item={item} index={index} language={language} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredItems.map((item, index) => (
              <MenuCard
                key={item.id}
                item={item}
                index={index}
                language={language}
              />
            ))}
          </div>
        )}
      </div>
    </section>
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2"
    >
      {/* Image */}
      <div className="relative h-40 sm:h-48 overflow-hidden">
        <motion.img
          src={item.image || '/images/hero-kunafa.jpg'}
          alt={item.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-1.5 sm:gap-2">
          {item.isPopular && (
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-semibold gold-shimmer text-coffee">
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
        {item.category === 'coffee' && isHovered && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 h-8 bg-foreground/20 rounded-full steam-animation"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        )}

        {/* Sparkle for Kunafa */}
        {item.category === 'kunafa' && isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 right-4"
          >
            <Sparkles className="w-6 h-6 text-primary sparkle" />
          </motion.div>
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
          <span className="text-lg sm:text-xl font-bold gold-text">₹{item.price}</span>
          <motion.a
            href="https://www.zomato.com/ncr/1mysa-cafe-jasola-new-delhi/order"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-primary text-primary-foreground text-xs sm:text-sm font-medium transition-colors hover:bg-primary/90"
          >
            {language === 'en' ? 'Order Now' : 'अभी ऑर्डर करें'}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
