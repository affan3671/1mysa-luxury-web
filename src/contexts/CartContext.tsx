import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { MenuItem } from '@/data/menuData';
import { supabase } from '@/integrations/supabase/client';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function getSessionId(): string {
  const key = '1mysa_cart_session';
  let id = localStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(key, id);
  }
  return id;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sessionId = getSessionId();

  // Load cart from Supabase on mount
  useEffect(() => {
    async function load() {
      try {
        const { data, error } = await supabase
          .from('cart_items')
          .select('*')
          .eq('session_id', sessionId);

        if (!error && data) {
          const loaded: CartItem[] = data.map((row: any) => ({
            item: {
              id: row.item_id,
              name: row.item_name,
              nameHi: row.item_name_hi || row.item_name,
              description: '',
              descriptionHi: '',
              price: Number(row.item_price),
              category: (row.item_category || 'kunafa') as MenuItem['category'],
              image: row.item_image,
            },
            quantity: row.quantity,
          }));
          setItems(loaded);
        }
      } catch {
        // Fallback: empty cart
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, [sessionId]);

  const syncToSupabase = useCallback(async (item: MenuItem, quantity: number) => {
    if (quantity <= 0) {
      await supabase.from('cart_items').delete().eq('session_id', sessionId).eq('item_id', item.id);
    } else {
      await supabase.from('cart_items').upsert({
        session_id: sessionId,
        item_id: item.id,
        item_name: item.name,
        item_name_hi: item.nameHi,
        item_price: item.price,
        item_image: item.image || null,
        item_category: item.category,
        quantity,
      }, { onConflict: 'session_id,item_id' });
    }
  }, [sessionId]);

  const addItem = useCallback((item: MenuItem) => {
    setItems(prev => {
      const existing = prev.find(ci => ci.item.id === item.id);
      const newQty = existing ? existing.quantity + 1 : 1;
      syncToSupabase(item, newQty);
      if (existing) {
        return prev.map(ci =>
          ci.item.id === item.id ? { ...ci, quantity: newQty } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  }, [syncToSupabase]);

  const removeItem = useCallback((itemId: string) => {
    setItems(prev => {
      const found = prev.find(ci => ci.item.id === itemId);
      if (found) syncToSupabase(found.item, 0);
      return prev.filter(ci => ci.item.id !== itemId);
    });
  }, [syncToSupabase]);

  const updateQuantity = useCallback((itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
    } else {
      setItems(prev => {
        const found = prev.find(ci => ci.item.id === itemId);
        if (found) syncToSupabase(found.item, quantity);
        return prev.map(ci => (ci.item.id === itemId ? { ...ci, quantity } : ci));
      });
    }
  }, [removeItem, syncToSupabase]);

  const clearCart = useCallback(async () => {
    setItems([]);
    await supabase.from('cart_items').delete().eq('session_id', sessionId);
  }, [sessionId]);

  const totalItems = items.reduce((sum, ci) => sum + ci.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, isOpen, setIsOpen, isLoading }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
