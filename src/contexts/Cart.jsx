/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const quickAddToCart = (item) => {
    setCart((prev) => {
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
    console.log("quick added to cart", cart);
  };

  const addToCart = (item) => {
    setCart((prev) => {
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
    console.log("added to cart", cart);
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => {
      return prev.filter((cartItem) => cartItem.id !== itemId);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, quickAddToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
