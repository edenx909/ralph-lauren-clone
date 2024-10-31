/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      const existingItem = prev.find(
        (wishlistItem) => wishlistItem.id === item.id,
      );
      if (existingItem) {
        return prev.map((wishlistItem) =>
          wishlistItem.id === item.id
            ? { ...wishlistItem, quantity: (wishlistItem.quantity || 1) + 1 }
            : wishlistItem,
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    console.log("added to wishlist", wishlist);
  };

  const removeFromWishlist = (itemId) => {
    setWishlist((prev) => {
      return prev.filter((wishlistItem) => wishlistItem.id !== itemId);
    });
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
