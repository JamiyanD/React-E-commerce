import CloseButton from "react-bootstrap/CloseButton";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartDetail() {
  const [cartList, setCartList] = useContext(CartContext);
  return (
    <div className="container my-5">
      <div className=" d-flex justify-content-between">
        <div className="col-7 ">
          <div className="w-100 row dark-blue">
            <div className=" ms-1 col-3"></div>
            <h5 className="col-3 ">БАРАА</h5>
            <h5 className="col-1 me-5 ">ҮНЭ</h5>
            <h5 className="col-2 ms-2">ШИРХЭГ</h5>
            <h5 className="col-1 ms-3">ДҮН</h5>
          </div>
          {cartList.length === 0 && (
            <h4 className="mt-3">Your cartlist is empty</h4>
          )}
          {cartList.map((data) => {
            return (
              <CartList
                id={data.id}
                title={data.title}
                imgURL={data.imgURL}
                price={data.price}
              />
            );
          })}

          <div className="w-100 mt-4 text-end">
            <button className="btn btn-dark pink-bg text-white  rounded-pill w-25 p-3 fw-semibold border-0 me-3">
              Сагсаа Шинэчлэх
            </button>
          </div>
        </div>
        <div className="col-4 ">
          <div className="mb-5">
            <p className="dark-blue fs-3">САГСАНД НИЙТ ДҮН</p>
          </div>

          <div className="d-flex justify-content-between align-items-center my-4">
            <h3 className="m-0 dark-blue">Дүн</h3>
            <p className="text-secondary fs-5">₮ 4,000</p>
          </div>
          <hr />

          <div className="d-flex justify-content-between mt-5 align-items-center">
            <h3 className="m-0 dark-blue">Нийт</h3>
            <h2 className="m-0 dark-blue">₮ 7,000</h2>
          </div>
          <button className="border-0 pink-bg btn-dark btn text-white rounded-pill my-5 w-100 p-3 fw-semibold">
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
}

const CartList = ({ price, id, title, imgURL }) => {
  const [quantity, setQuantity] = useState(1);
  const multiple = quantity * price;
  return (
    <div className="w-100 d-flex border-bottom" key={id}>
      <img className="col-3 p-3" src={imgURL} alt="" />
      <div className="d-flex align-items-center  w-100 ">
        <p className="col-4  dark-blue mb-0">{title}</p>

        <p className="col-2 mb-0 me-4 fw-semibold">₮ {price}</p>
        <input
          type="number"
          name="quantity"
          value={quantity}
          className=" rounded-3  form-control cart-input me-5"
        />
        <p className=" fw-semibold ms-5 mb-0 col-2">₮ 4,000</p>
        <button
          className="btn-close  "
          // onClick={() => downWishList(id)}
        ></button>
      </div>
    </div>
  );
};
