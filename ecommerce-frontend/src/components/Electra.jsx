import { Stack, Button, Heart } from "react-bootstrap";
import Slider from "react-slick";
import { products } from "../data/products";

import Detail from "./Detail";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";
import ProductBox from "./Electra-ProductBox.jsx";
function Section3({ setAddWishlist, addWishlist, downWishList }) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    row: 2,
    slidesPerRow: 2,
  };

  return (
    <section className="">
      {/* <div className="hstack" id="product-up">
        <h2 className="green">Popular products</h2>
        <div id="genre" className="ms-auto">
          <button class="green btn btn-outline-secondary rounded-pill bg-light m-2">
            Cameras
          </button>
          <button class="green  btn btn-outline-secondary rounded-pill bg-light m-2">
            Laptops
          </button>
          <button class="green  btn btn-outline-secondary rounded-pill bg-light m-2">
            Tablets
          </button>
          <button class="green  btn btn-outline-secondary rounded-pill bg-light m-2">
            Mouse
          </button>
        </div>
      </div>
      <div id="product-down " className="mt-2">
        <Slider {...settings}>
          {products.map((data) => {
            return (
              <ProductBox
                downWishList={downWishList}
                setAddWishlist={setAddWishlist}
                addWishlist={addWishlist}
                title={data.title}
                imgUrl={data.imgUrl}
                price={data.price}
                data={data}
              />
            );
          })}
        </Slider>
      </div> */}
    </section>
  );
}
export default Section3;
