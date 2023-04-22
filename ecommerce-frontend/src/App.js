import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header/Header";
import MainMenu from "./components/MainMenu";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Header/Register";
import ProductBox from "./components/Products/ProductBox";
import ProductDetail from "./components/Products/ProductDetail";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import CartDetail from "./components/Header/CartDetail";
import BlogDetail from "./components/BlogDetail";
import BlogDetail2 from "./components/BlogDetail2";
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
        <Route path="/register" element={<Register />} />
        <Route
          path="/product-box"
          element={
            <ProductBox
              addWishlist={addWishlist}
              setAddWishlist={setAddWishlist}
              downWishList={downWishList}
            />
          }
        />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/blog-detail2" element={<BlogDetail2 />} />
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
