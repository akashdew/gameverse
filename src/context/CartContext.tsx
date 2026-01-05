import React, { createContext, useContext, useState, useCallback } from 'react';
import { Game } from '@/data/games';

export interface CartItem {
  game: Game;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (game: Game) => void;
  removeFromCart: (gameId: string) => void;
  updateQuantity: (gameId: string, quantity: number) => void;
  isInCart: (gameId: string) => boolean;
  getCartTotal: () => number;
  getItemCount: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((game: Game) => {
    setItems(prev => {
      const existing = prev.find(item => item.game.id === game.id);
      if (existing) {
        return prev.map(item =>
          item.game.id === game.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { game, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((gameId: string) => {
    setItems(prev => prev.filter(item => item.game.id !== gameId));
  }, []);

  const updateQuantity = useCallback((gameId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(gameId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.game.id === gameId ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  const isInCart = useCallback((gameId: string) => {
    return items.some(item => item.game.id === gameId);
  }, [items]);

  const getCartTotal = useCallback(() => {
    return items.reduce((total, item) => total + item.game.price * item.quantity, 0);
  }, [items]);

  const getItemCount = useCallback(() => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        isInCart,
        getCartTotal,
        getItemCount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
