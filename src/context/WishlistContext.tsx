import React, { createContext, useContext, useState, useCallback } from 'react';
import { Game } from '@/data/games';

interface WishlistContextType {
  items: Game[];
  addToWishlist: (game: Game) => void;
  removeFromWishlist: (gameId: string) => void;
  isInWishlist: (gameId: string) => boolean;
  getWishlistCount: () => number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Game[]>([]);

  const addToWishlist = useCallback((game: Game) => {
    setItems(prev => {
      if (prev.some(item => item.id === game.id)) {
        return prev;
      }
      return [...prev, game];
    });
  }, []);

  const removeFromWishlist = useCallback((gameId: string) => {
    setItems(prev => prev.filter(item => item.id !== gameId));
  }, []);

  const isInWishlist = useCallback((gameId: string) => {
    return items.some(item => item.id === gameId);
  }, [items]);

  const getWishlistCount = useCallback(() => {
    return items.length;
  }, [items]);

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        getWishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
