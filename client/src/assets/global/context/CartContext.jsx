import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log("Producto recibido en addToCart:", product);
    setCartItems((prevItems) => {
      const newItems = [...prevItems, product];
      console.log("Nuevo estado de cartItems:", newItems); // Verifica el nuevo estado
      return newItems;
    });
  };
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === productId);
  
      if (index !== -1) {
        const newItems = [...prevItems];
        newItems.splice(index, 1); 
        return newItems;
      }
  
      return prevItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);