import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import Cart from "./components/Cart";
import Section10 from "./components/Section10";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import { useState } from "react";
import { products } from "./data/products";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
function App() {
  const [addWishlist, setAddWishlist] = useState([]);
  let colors = "";
  const downWishList = (productId) => {
    const filtered = addWishlist.filter((product) => {
      if (product.id !== productId) {
        return product;
      }
    });
    console.log("filtered", filtered);

    setAddWishlist([...filtered]);
  };

  return (
    <div className="App container">
      <Header
        addWishlist={addWishlist}
        setAddWishlist={setAddWishlist}
        downWishList={downWishList}
      />
      <MainMenu />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addWishlist={addWishlist}
              setAddWishlist={setAddWishlist}
              colors={colors}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/detail" element={<Detail />} />
        <Route
          path="/cart"
          element={
            <Cart
              addWishlist={addWishlist}
              setAddWishlist={setAddWishlist}
              downWishList={downWishList}
            />
          }
        />
      </Routes>
      <Section10 />
      <Footer />
    </div>
  );
}

export default App;
