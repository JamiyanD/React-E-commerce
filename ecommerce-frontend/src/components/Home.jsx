import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "../App.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import MainMenu from "./MainMenu";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";
import Footer from "./Footer";
import Detail from "./Detail";
import { useState } from "react";
import { products } from "../data/products";
import { Routes, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";
import Cart from "./Cart";
function Home({ addWishlist, setAddWishlist, downWishList }) {
  return (
    <div className="App container">
      {/* <Cart /> */}

      <Section1 />
      <Section2 />
      {/* <Section3
        setAddWishlist={setAddWishlist}
        addWishlist={addWishlist}
        downWishList={downWishList}
      /> */}
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </div>
  );
}

export default Home;
