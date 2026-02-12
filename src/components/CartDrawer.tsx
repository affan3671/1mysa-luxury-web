import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';

const WHATSAPP_NUMBER = '919310579571';

export default function CartDrawer() {
  const { items, updateQuantity, removeItem, clearCart, totalItems, isOpen, setIsOpen } = useCart();
  const { language } = useLanguage();

  const totalPrice = items.reduce((sum, ci) => {
    if (ci.item.price === 0) return sum;
    return sum + ci.item.price * ci.quantity;
  }, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;
    const lines = items.map(
      ci => `• ${ci.item.name} x${ci.quantity}${ci.item.price > 0 ? ` (₹${ci.item.price * ci.quantity})` : ' (Price varies)'}`
    );
    const message = `Hi! I'd like to order:\n\n${lines.join('\n')}\n\n${totalPrice > 0 ? `Subtotal: ₹${totalPrice}\n` : ''}Thank you!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    // Clear cart after checkout
    clearCart();
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background border-l border-border shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-heading font-bold text-foreground">
                  {language === 'en' ? 'Your Cart' : 'आपकी कार्ट'}
                </h2>
                {totalItems > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                    {totalItems}
                  </span>
                )}
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-3 opacity-60">
                  <ShoppingBag className="w-12 h-12 text-muted-foreground" />
                  <p className="text-muted-foreground font-medium">
                    {language === 'en' ? 'Your cart is empty' : 'आपकी कार्ट खाली है'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Add some delicious items!' : 'कुछ स्वादिष्ट आइटम जोड़ें!'}
                  </p>
                </div>
              ) : (
                items.map(ci => (
                  <div
                    key={ci.item.id}
                    className="flex gap-3 p-3 rounded-xl bg-card border border-border"
                  >
                    {/* Thumbnail */}
                    <img
                      src={ci.item.image || '/placeholder.svg'}
                      alt={ci.item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover flex-shrink-0"
                      loading="lazy"
                    />
                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-foreground truncate">
                        {language === 'en' ? ci.item.name : ci.item.nameHi}
                      </h4>
                      <p className="text-sm font-bold text-primary mt-0.5">
                        {ci.item.price === 0
                          ? (language === 'en' ? 'Price varies' : 'मूल्य भिन्न')
                          : `₹${ci.item.price}`}
                      </p>
                      {/* Quantity controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 bg-muted rounded-lg">
                          <button
                            onClick={() => updateQuantity(ci.item.id, ci.quantity - 1)}
                            className="p-1.5 rounded-l-lg hover:bg-primary/10 transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5 text-foreground" />
                          </button>
                          <span className="w-8 text-center text-sm font-semibold text-foreground">
                            {ci.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(ci.item.id, ci.quantity + 1)}
                            className="p-1.5 rounded-r-lg hover:bg-primary/10 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5 text-foreground" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(ci.item.id)}
                          className="p-1.5 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-4 sm:p-5 space-y-3">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {language === 'en' ? 'Subtotal' : 'उप-योग'}
                  </span>
                  <span className="text-lg font-bold text-foreground">
                    {totalPrice > 0 ? `₹${totalPrice}` : '—'}
                  </span>
                </div>

                {/* Checkout button */}
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-accent text-accent-foreground font-semibold text-base transition-all hover:opacity-90 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  {language === 'en' ? 'Order via WhatsApp' : 'WhatsApp से ऑर्डर करें'}
                </button>

                {/* Clear */}
                <button
                  onClick={clearCart}
                  className="w-full py-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  {language === 'en' ? 'Clear Cart' : 'कार्ट खाली करें'}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
