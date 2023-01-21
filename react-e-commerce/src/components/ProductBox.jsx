import { products } from "../data/products";
import Stack from "react-bootstrap/Stack";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Modal } from "react-bootstrap";
import Detail from "./Detail";
import { Routes, Route, Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

export default function ProductBox({
  setAddWishlist,
  addWishlist,
  data,
  downWishList,
}) {
  const [stars, setStars] = useState(data.stars);

  const upWishList = (productId) => {
    const filtered = products.filter((product) => product.id === productId);
    setAddWishlist([...addWishlist, ...filtered]);
  };

  const heart = addWishlist.filter((wish) => wish.id === data.id)[0];
  return (
    <div className="">
      <div className="m-3  p-3 border rounded-4 product">
        <div className="h-50 w-100 d-flex justify-content-between">
          <Link to={"/detail"} className=" h-100 col-8" state={data}>
            <img className=" h-100 w-100 ms-2" src={data.imgUrl} alt=""></img>
          </Link>
          {heart ? (
            <AiFillHeart
              className="heart-icon"
              color="red"
              onClick={() => {
                downWishList(data.id);
              }}
            ></AiFillHeart>
          ) : (
            <AiOutlineHeart
              className="heart-icon"
              onClick={() => {
                upWishList(data.id);
              }}
            ></AiOutlineHeart>
          )}
        </div>
        <h5 className="my-2 green">{data.title}</h5>
        <div className="hstack">
          <p1>${data.price}</p1>
          <img className="ms-auto" src="./img/shop.png" alt=""></img>
        </div>
        <Rating initialValue={stars} size={20} />
      </div>
    </div>
  );
}
