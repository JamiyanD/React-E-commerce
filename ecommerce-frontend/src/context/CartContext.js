import { createContext, useState } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  return (
    <CartContext.Provider value={[cartList, setCartList]}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
