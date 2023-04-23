import { createContext, useState, useEffect } from "react";
import axios from "axios";
const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [showProducts, setShowProducts] = useState([]);
  const ALL_PRODUCTS_URL = "https://puuzket.onrender.com/products/products";

  async function axiosTotalProducts() {
    const AXIOS_DATA = await axios.get(ALL_PRODUCTS_URL);
    setShowProducts(AXIOS_DATA.data);
  }
  useEffect(() => {
    axiosTotalProducts();
  }, []);

  return (
    <ProductsContext.Provider value={[showProducts, setShowProducts]}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
