import { products } from "../data/products";
import Stack from "react-bootstrap/Stack";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Modal } from "react-bootstrap";
import Detail from "./Detail";
import { Routes, Route, Link } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

export const ProductBox = ({ setAddWishlist, addWishlist, data }) => {
  const [stars, setStars] = useState(data.stars);
  //   const [heart, setHeart] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleProduct = (productId) => {
    setShow(true);
  };

  const upWishList = (productId) => {
    const filtered = products.filter((product) => {
      if (product.id === productId) {
        return product;
      }
    });
    setAddWishlist([...addWishlist, ...filtered]);
  };

  const downWishList = (productId) => {
    const filtered = addWishlist.filter((product) => {
      if (product.id !== productId) {
        return product;
      }
    });
    setAddWishlist([...filtered]);
  };
  const heart = addWishlist.filter((wish) => wish.id === data.id)[0];
  return (
    <div className="m-2  p-2 border rounded product">
      <Stack direction="horizontal" className="h-50">
        <Link to={"/detail"} className="col-10 h-100" state={data}>
          <img
            onClick={() => handleProduct(data.id)}
            className=" h-100"
            src={data.imgUrl}
            alt=""
          ></img>
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
      </Stack>
      <h5>{data.title}</h5>
      <Stack direction="horizontal">
        <p1>{data.price}</p1>
        <img className="ms-auto" src="./img/shop.png" alt=""></img>
      </Stack>
      <Rating initialValue={stars} size={30} />
      {/* <Modal show={show} onHide={handleClose} size="lg">
        <Detail data={data} addWishlist={addWishlist}></Detail>
      </Modal> */}
    </div>
  );
};
