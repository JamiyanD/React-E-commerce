import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";

import Footer from "./components/Footer";
import Detail from "./components/Detail";
import { useState } from "react";
import { products } from "./data/products";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Login from "./components/Login";
import ProductBox from "./components/ProductBox";
function App() {
  const [addWishlist, setAddWishlist] = useState([]);
  function downWishList(productId) {
    setAddWishlist(addWishlist.filter((product) => product.id !== productId));
  }

  return (
    <div className="App ">
      <Header
        addWishlist={addWishlist}
        setAddWishlist={setAddWishlist}
        downWishList={downWishList}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addWishlist={addWishlist}
              setAddWishlist={setAddWishlist}
              downWishList={downWishList}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-box" element={<ProductBox />} />
        {/* <Route
          path="/cart"
          element={
            <Cart
              addWishlist={addWishlist}
              setAddWishlist={setAddWishlist}
              downWishList={downWishList}
            />
          }
        /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
