import Stack from "react-bootstrap/Stack";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import products from "../data/products";
import { Badge, Modal } from "react-bootstrap";
import SignUp from "./SignUp";
import { Routes, Route, Link } from "react-router-dom";

function Header({ addWishlist, setAddWishlist, downWishList }) {
  const [list, setList] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleProduct = (productId) => {
    setShow(true);
  };

  return (
    <header>
      <div className="hstack" id="up">
        <p1 className="m-5">Need help? Call us: (+98) 0234 456 789</p1>
        <div id="up-inner" className="ms-auto  ">
          <img className="m-2" src="./img/location.png" alt=""></img>
          <p1 className="m-2">Our store</p1>
          <img className="m-2" src="./img/group.png" alt=""></img>
          <p1 className="m-2">Track your order</p1>
        </div>
      </div>
      <div
        id="down"
        className="green-bg d-flex justify-content-around align-items-center "
      >
        {" "}
        <Link to={"/"} addWishlist={addWishlist}>
          <img className="" src="./img/logo 1 (1).png" alt=""></img>
        </Link>
        <div className="input-group input me-5">
          <input class="form-control" placeholder="Search any things" />
          <button className="orange btn text-white ">Search</button>
        </div>
        <div className="hstack">
          <img className="m-2" src="./img/user.png" alt=""></img>
          <Link to={"/signup"} onClick={() => handleProduct()}>
            <p className="text-white my-2">Sign in</p>
          </Link>
          <img
            onClick={() => setList(!list)}
            className="ms-2"
            src="./img/Frame 6.png"
            alt=""
          ></img>
          {list && (
            <WishBox addWishlist={addWishlist} downWishList={downWishList} />
          )}
          <span class="m-1  badge rounded-pill  orange">
            {addWishlist.length}
          </span>
          <Link to={"/cart"}>
            <img className="ms-2" src="./img/shopping-cart.png" alt="" />
          </Link>
          <span class=" m-1 badge rounded-pill  orange">
            {addWishlist.length}
          </span>
        </div>
      </div>
      <div></div>
    </header>
  );
}
export default Header;

const WishBox = ({ addWishlist, downWishList }) => {
  return (
    <div className="wishlist">
      <h3>Wishlist</h3>
      {addWishlist.length === 0 && <h4>Your wishlist is empty</h4>}
      {addWishlist.map((wish) => {
        return (
          <div className="wishlist-product" key={wish.id}>
            <img src={wish.imgUrl} alt={wish.imgUrl} />
            <div className="product-content">
              <p className="product-name">{wish.title}</p>
              <p className="product-price">{wish.price}</p>
            </div>
            <button
              className="btn-close"
              onClick={() => downWishList(wish.id)}
            ></button>
          </div>
        );
      })}
    </div>
  );
};
