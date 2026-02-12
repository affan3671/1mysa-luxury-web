
-- Cart items table using session_id (no auth required)
CREATE TABLE public.cart_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  item_id TEXT NOT NULL,
  item_name TEXT NOT NULL,
  item_name_hi TEXT,
  item_price NUMERIC NOT NULL DEFAULT 0,
  item_image TEXT,
  item_category TEXT,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Index for fast lookups by session
CREATE INDEX idx_cart_items_session_id ON public.cart_items (session_id);

-- Unique constraint: one row per session+item
CREATE UNIQUE INDEX idx_cart_items_session_item ON public.cart_items (session_id, item_id);

-- Enable RLS
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

-- Public access policies (no auth, session-based)
CREATE POLICY "Anyone can read their session cart"
  ON public.cart_items FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert cart items"
  ON public.cart_items FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update cart items"
  ON public.cart_items FOR UPDATE
  USING (true);

CREATE POLICY "Anyone can delete cart items"
  ON public.cart_items FOR DELETE
  USING (true);

-- Auto-update timestamp
CREATE OR REPLACE FUNCTION public.update_cart_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_cart_items_updated_at
  BEFORE UPDATE ON public.cart_items
  FOR EACH ROW
  EXECUTE FUNCTION public.update_cart_updated_at();
