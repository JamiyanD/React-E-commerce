import CloseButton from "react-bootstrap/CloseButton";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import axios from "axios";
export default function CartDetail() {
  const [cartList, setCartList] = useContext(CartContext);
  const [orderData, setOrderData] = useState([]);
  let totalSum = 0;
  const URL = "http://localhost:8080/order/order";
  async function handleOrder() {
    console.log(cartList);
    cartList.map((data) => {
      if (orderData.length < cartList.length) {
        const putData = {
          name: data.name,
          order_quantity: data.order_quantity,
          price: data.price,
          order_date: new Date().toString().substr(3, 21),
        };
        orderData.push(putData);
      }
    });
    console.log(orderData);
    const AXIOS_DATA = await axios.post(URL, orderData);
    if (AXIOS_DATA.status == 200) {
      console.log("zahialga amjilttai");
    }
  }
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
            totalSum += data.price * data.order_quantity;
            return (
              <CartList
                id={data.id}
                title={data.title}
                filename={data.filename}
                price={data.price}
                order_quantity={data.order_quantity}
                name={data.name}
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
            <p className="text-secondary fs-5">₮ {totalSum}</p>
          </div>
          <hr />

          <div className="d-flex justify-content-between mt-5 align-items-center">
            <h3 className="m-0 dark-blue">Нийт</h3>
            <h2 className="m-0 dark-blue">₮ {totalSum}</h2>
          </div>
          <button
            className="border-0 pink-bg btn-dark btn text-white rounded-pill my-5 w-100 p-3 fw-semibold"
            onClick={handleOrder}
          >
            Захиалах
          </button>
        </div>
      </div>
    </div>
  );
}

const CartList = ({ price, id, name, filename, order_quantity }) => {
  const [cartList, setCartList] = useContext(CartContext);
  function downCartList(id) {
    setCartList(cartList.filter((product) => product.id !== id));
  }

  const multiple = order_quantity * price;

  return (
    <div className="w-100 d-flex border-bottom" key={id}>
      <img
        className="col-3 p-3"
        src={`http://localhost:8080/upload/${filename}`}
        alt=""
        style={{ height: "150px" }}
      />
      <div className="d-flex align-items-center  w-100 ">
        <p className="col-4  dark-blue mb-0">{name}</p>

        <p className="col-2 mb-0 me-4 fw-semibold">₮ {price}</p>
        <p className=" col-2  dark-blue mb-0">{order_quantity}</p>
        <p className=" fw-semibold ms-5 mb-0 col-2">₮ {multiple}</p>
        <button
          className="btn-close  "
          onClick={() => downCartList(id)}
        ></button>
      </div>
    </div>
  );
};
