import { createContext, useState } from "react";

const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [showProducts, setShowProducts] = useState([]);

  return (
    <ProductsContext.Provider value={[showProducts, setShowProducts]}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
