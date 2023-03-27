import CloseButton from "react-bootstrap/CloseButton";
import { useState } from "react";

export default function CartDetail({
  addWishlist,
  setAddWishlist,
  downWishList,
}) {
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
          {/* {addWishlist.length === 0 && (
            <h4 className="mt-3">Your wishlist is empty</h4>
          )} */}
          {/* {addWishlist.map((wish) => {
            return ( */}
          <CarList
          //   id={wish.id}
          //   imgUrl={wish.imgUrl}
          //   title={wish.title}
          //   price={wish.price}
          //   downWishList={downWishList}
          //   wish={wish}
          />
          {/* );
          })} */}

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

const CarList = ({ downWishList, price, id, title, imgUrl }) => {
  const [number, setNumber] = useState(1);
  const multiple = number * price;
  return (
    <div className="w-100 d-flex border-bottom" key={id}>
      <img
        className="col-3 p-3"
        src="https://img.freepik.com/free-photo/new-sneakers_93675-130032.jpg?w=1380&t=st=1679499554~exp=1679500154~hmac=5c0f10e4ed882e89543abd0a3a53b8e6457e0c8b54a68e881a28e03dc537c31b"
        alt=""
      />
      <div className="d-flex align-items-center  w-100 ">
        <p className="col-4  dark-blue mb-0">Converse Green/30</p>

        <p className="col-2 mb-0 me-4 fw-semibold">$ 1,000</p>
        <input
          type="number"
          name="quantity"
          className=" rounded-3  form-control cart-input me-5"
        />
        <p className=" fw-semibold ms-5 mb-0 col-2">₮ 4,000</p>
        <button
          className="btn-close  "
          onClick={() => downWishList(id)}
        ></button>
      </div>
    </div>
  );
};
