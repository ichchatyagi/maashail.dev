import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const showPopupWithMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.size === product.size);
      if (existing) {
        // increase quantity if already in cart
        return prev.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, { ...product }];
    });
    showPopupWithMessage("Item added to cart!");
  };

  const removeFromCart = (id, size) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id || item.size !== size));
  };

  const updateQuantity = (id, size, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ 
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        showPopup,
        popupMessage,
        showPopupWithMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
