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
  const quickAddToWishlist = (item) => {
    setWishlist((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: (cartItem.quantity || 0) + 1,
              }
            : cartItem,
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    console.log("quick added to wishlist", wishlist);
  };

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: (cartItem.quantity || 1) + item.quantity,
              }
            : cartItem,
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
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        quickAddToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
