import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import { useState } from "react";
import { products } from "./data/products";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ProductBox from "./components/ProductBox";
import ProductDetail from "./components/ProductDetail";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import CartDetail from "./components/CartDetail";
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

        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-box" element={<ProductBox />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <CartDetail
              addWishlist={addWishlist}
              setAddWishlist={setAddWishlist}
              downWishList={downWishList}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
