import CloseButton from "react-bootstrap/CloseButton";
import { useState } from "react";

export default function Cart({ addWishlist, setAddWishlist, downWishList }) {
  return (
    <div>
      <div className="detail-header gap-2 hstack">
        <p1 className="detail-home fw-normal">Home</p1>
        <p1 className="detail-home fw-normal ">All category</p1>
      </div>
      <div className="row">
        <div className="col-8 ">
          <div className="hstack p-2 blue">
            <h5 className="col-5 my-2">Product</h5>
            <div className="col-8  hstack">
              <h5 className="col-3 my-2">Price</h5>
              <h5 className="col-4 my-2">Quantity</h5>
              <h5 className="col-2 my-2">Subtotal</h5>
            </div>
          </div>
          {addWishlist.length === 0 && (
            <h4 className="mt-3">Your wishlist is empty</h4>
          )}
          {addWishlist.map((wish) => {
            return (
              <CarList
                id={wish.id}
                imgUrl={wish.imgUrl}
                title={wish.title}
                price={wish.price}
                downWishList={downWishList}
                wish={wish}
              />
            );
          })}

          <div className="d-flex justify-content-between mt-4">
            <button className="orange btn  text-white rounded-pill">
              Continue shopping
            </button>
            <button className="btn btn-outline-secondary rounded-pill">
              Update Cart
            </button>
            <button className="btn btn-outline-danger rounded-pill">
              Clear cart
            </button>
          </div>
        </div>
        <div className="col-4 border p-0">
          <div className="blue text-center py-2">
            <h5 className="my-2">Cart total</h5>
          </div>
          <div className="p-4">
            <div className="d-flex justify-content-between ">
              <h5 className="my-1">Subtotal</h5>
              <h5 className="my-1">$23,20</h5>
            </div>
            <hr />
            <div class="input-group mb-3 ">
              <input
                type="password"
                class="form-control "
                placeholder="Enter coupon code"
              />
              <button class="btn border green">Apply</button>
            </div>
            <hr />
            <select class="form-select rounded-4">
              <option selected>Country</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="d-flex justify-content-between mt-3">
              <p>Total amount</p>
              <p>$23,20</p>
            </div>
            <button className="col-10 ms-4 orange btn text-white rounded-pill">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const CarList = ({ downWishList, price, id, title, imgUrl }) => {
  const [number, setNumber] = useState(1);
  const multiple = number * price;
  return (
    <div className="hstack border-bottom" key={id}>
      <img className="col-2" src={imgUrl} alt="" />
      <div className="col-3 p-2">
        <p>
          <strong>{title}</strong>
        </p>
        <p className="">Color:Green</p>
        <p1 className="">Size: 30</p1>
      </div>
      <div className="col-8 hstack">
        <p1 className="col-3 fw-semibold">${price}</p1>
        <div className="col-4">
          <button
            className=" border"
            onClick={() => {
              setNumber(number - 1);
            }}
          >
            -
          </button>
          <button className="col-4 border">{number}</button>
          <button
            className="border "
            onClick={() => {
              setNumber(number + 1);
            }}
          >
            +
          </button>
        </div>
        <p1 className="col-2 fw-semibold">$ {multiple}</p1>
        <button
          className="btn-close ms-4"
          onClick={() => downWishList(id)}
        ></button>
      </div>
    </div>
  );
};
