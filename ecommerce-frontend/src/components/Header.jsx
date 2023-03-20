import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import products from "../data/products";
import { Modal } from "react-bootstrap";
import SignUp from "./SignUp";
import { Routes, Route, Link } from "react-router-dom";
import menus from "../data/menus";
import { Nav, Stack, NavLink } from "react-bootstrap";
import SubMenu from "./SubMenu";
import Badge from "@mui/material/Badge";
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
        <p1 className="my-3 text-black-50">Утас: (+976) 9988-2655</p1>
        <p1 className="m-2 ms-auto text-black-50">Киткат ХХК</p1>
      </div>
      <div
        id="down"
        className=" d-flex justify-content-between align-items-center "
      >
        {" "}
        <Link to={"/"} addWishlist={addWishlist}>
          <img
            style={{ width: 130, height: 130 }}
            className=""
            src="https://logodix.com/logo/1167676.png"
            alt=""
          ></img>
        </Link>
        <div className=" d-flex align-items-center fs-5 w-50">
          <Nav className="">
            <SubMenu />
            <NavLink className="">Бидний тухай</NavLink>
            <NavLink className="">Мэдээ</NavLink>
            <NavLink className="">Холбоо барих</NavLink>
          </Nav>
        </div>
        <div className="hstack gap-4">
          <Link to={"/signup"} onClick={() => handleProduct()}>
            <p className="sign-in">НЭВТРЭХ/БҮРТГҮҮЛЭХ</p>
          </Link>
          <i className="bi bi-search text-danger " style={{ fontSize: 25 }}></i>
          <Badge badgeContent={addWishlist.length} color="error">
            <i
              className="bi bi-heart text-danger "
              style={{ fontSize: 25 }}
              onClick={() => setList(!list)}
            ></i>
          </Badge>

          {list && (
            <WishBox addWishlist={addWishlist} downWishList={downWishList} />
          )}

          <Badge badgeContent={addWishlist.length} color="error">
            <Link to={"/cart"}>
              <i class="bi bi-cart text-danger" style={{ fontSize: 25 }}></i>
            </Link>
          </Badge>
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
